'use client';

import * as React from 'react';
import { useAuth } from '@/hooks/use-auth';
import { useDashboard } from '@/hooks/use-dashboard';
import { AttendanceWidget } from '@/components/dashboard/attendance-widget';
import { LeaveBalanceCards } from '@/components/dashboard/leave-balance-cards';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { RecentPayslips } from '@/components/dashboard/recent-payslips';
import { PendingRequests } from '@/components/dashboard/pending-requests';
import { LoadingSpinner } from '@hris/ui';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

export default function DashboardPage() {
  const { user } = useAuth();
  const { data, isLoading, checkIn, checkOut } = useDashboard();

  const handleAttendanceAction = () => {
    if (data?.attendance.status === 'not_checked_in') {
      checkIn();
    } else if (data?.attendance.status === 'checked_in') {
      checkOut();
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">
          مرحباً، {user?.firstName} {user?.lastName} 👋
        </h1>
        <p className="mt-2 text-muted-foreground">
          {format(new Date(), 'EEEE، d MMMM yyyy', { locale: ar })}
        </p>
      </div>

      {/* Attendance & Quick Actions Row */}
      <div className="grid gap-6 md:grid-cols-2">
        <AttendanceWidget
          status={data?.attendance.status || 'not_checked_in'}
          checkInTime={data?.attendance.checkInTime}
          checkOutTime={data?.attendance.checkOutTime}
          onCheckIn={() => handleAttendanceAction()}
          onCheckOut={() => handleAttendanceAction()}
        />
        <QuickActions
          attendanceStatus={data?.attendance.status || 'not_checked_in'}
          onAttendanceAction={handleAttendanceAction}
        />
      </div>

      {/* Leave Balance Cards */}
      <div>
        <h2 className="mb-4 text-xl font-semibold">رصيد الإجازات</h2>
        <LeaveBalanceCards balances={data?.leaveBalances || []} />
      </div>

      {/* Recent Activity Row */}
      <div className="grid gap-6 md:grid-cols-2">
        <RecentPayslips payslips={data?.payslips || []} />
        <PendingRequests requests={data?.leaveRequests || []} />
      </div>
    </div>
  );
}
