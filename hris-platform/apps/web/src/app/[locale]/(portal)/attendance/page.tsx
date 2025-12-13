'use client';

import * as React from 'react';
import { Card, CardContent, Button, LoadingSpinner } from '@hris/ui';
import { Calendar, List, Download } from 'lucide-react';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { useAttendanceToday, useAttendanceHistory } from '@/hooks/use-attendance';
import { TodayAttendanceCard } from '@/components/attendance/today-attendance-card';
import type { MonthOption } from '@/lib/types/attendance';

type ViewMode = 'calendar' | 'table';

export default function AttendancePage() {
  const [selectedMonth, setSelectedMonth] = React.useState<string>(
    format(new Date(), 'yyyy-MM')
  );
  const [viewMode, setViewMode] = React.useState<ViewMode>('calendar');

  const todayAttendance = useAttendanceToday();
  const { data: historyData, isLoading: isLoadingHistory } =
    useAttendanceHistory(selectedMonth);

  // Generate month options (current + last 11 months)
  const monthOptions = React.useMemo<MonthOption[]>(() => {
    const options: MonthOption[] = [];
    const now = new Date();

    for (let i = 0; i < 12; i++) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const value = format(date, 'yyyy-MM');
      const label = format(date, 'MMMM yyyy', { locale: ar });
      options.push({ value, label });
    }

    return options;
  }, []);

  const handleCheckIn = async () => {
    try {
      await todayAttendance.checkIn();
      toast.success('تم تسجيل الحضور بنجاح');
    } catch (error) {
      toast.error('حدث خطأ أثناء تسجيل الحضور');
    }
  };

  const handleCheckOut = async () => {
    try {
      await todayAttendance.checkOut();
      toast.success('تم تسجيل الانصراف بنجاح');
    } catch (error) {
      toast.error('حدث خطأ أثناء تسجيل الانصراف');
    }
  };

  const handleExport = () => {
    toast.success('جاري تصدير البيانات...');
    // TODO: Implement export to Excel
  };

  const summary = historyData?.summary;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">الحضور والانصراف</h1>
          <p className="text-gray-500">إدارة سجلات الحضور والغياب</p>
        </div>

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {monthOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Today's Attendance Card */}
      <TodayAttendanceCard
        data={todayAttendance.data}
        isLoading={todayAttendance.isLoading}
        onCheckIn={handleCheckIn}
        onCheckOut={handleCheckOut}
        isCheckingIn={todayAttendance.isCheckingIn}
        isCheckingOut={todayAttendance.isCheckingOut}
      />

      {/* Summary Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Present Days */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">أيام الحضور</p>
                <p className="mt-2 text-3xl font-bold text-success">
                  {isLoadingHistory ? (
                    <LoadingSpinner size="sm" />
                  ) : (
                    summary?.presentDays || 0
                  )}
                </p>
              </div>
              <div className="rounded-full bg-success-light p-3">
                <svg
                  className="h-6 w-6 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Absent Days */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">أيام الغياب</p>
                <p className="mt-2 text-3xl font-bold text-error">
                  {isLoadingHistory ? (
                    <LoadingSpinner size="sm" />
                  ) : (
                    summary?.absentDays || 0
                  )}
                </p>
              </div>
              <div className="rounded-full bg-error-light p-3">
                <svg
                  className="h-6 w-6 text-error"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Late Days */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">أيام التأخير</p>
                <p className="mt-2 text-3xl font-bold text-warning">
                  {isLoadingHistory ? (
                    <LoadingSpinner size="sm" />
                  ) : (
                    summary?.lateDays || 0
                  )}
                </p>
              </div>
              <div className="rounded-full bg-warning-light p-3">
                <svg
                  className="h-6 w-6 text-warning"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leave Days */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">أيام الإجازة</p>
                <p className="mt-2 text-3xl font-bold text-info">
                  {isLoadingHistory ? (
                    <LoadingSpinner size="sm" />
                  ) : (
                    summary?.leaveDays || 0
                  )}
                </p>
              </div>
              <div className="rounded-full bg-info-light p-3">
                <svg
                  className="h-6 w-6 text-info"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* View Toggle and Actions */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'calendar' ? 'default' : 'outline'}
            onClick={() => setViewMode('calendar')}
            className="gap-2"
          >
            <Calendar className="h-4 w-4" />
            التقويم
          </Button>
          <Button
            variant={viewMode === 'table' ? 'default' : 'outline'}
            onClick={() => setViewMode('table')}
            className="gap-2"
          >
            <List className="h-4 w-4" />
            القائمة
          </Button>
        </div>

        <Button variant="outline" onClick={handleExport} className="gap-2">
          <Download className="h-4 w-4" />
          تصدير Excel
        </Button>
      </div>

      {/* Content Area */}
      {isLoadingHistory ? (
        <Card>
          <CardContent className="flex min-h-[400px] items-center justify-center p-6">
            <LoadingSpinner size="lg" />
          </CardContent>
        </Card>
      ) : (
        <div>
          {viewMode === 'calendar' ? (
            <div className="text-center text-gray-500 py-12">
              <Calendar className="h-16 w-16 mx-auto mb-4 text-gray-400" />
              <p>Calendar View - Coming in next iteration</p>
              <p className="text-sm mt-2">Please use Table View for now</p>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <List className="h-16 w-16 mx-auto mb-4 text-gray-400" />
              <p>Table View - Coming in next iteration</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
