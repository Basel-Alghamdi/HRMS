'use client';

import * as React from 'react';
import { Card, CardContent, Button, LoadingSpinner, Badge } from '@hris/ui';
import { Clock, CheckCircle, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import type { TodayAttendance } from '@/lib/types/attendance';
import { formatTime } from '@/lib/mock-data/attendance';

interface TodayAttendanceCardProps {
  data: TodayAttendance | null;
  isLoading: boolean;
  onCheckIn: () => Promise<void>;
  onCheckOut: () => Promise<void>;
  isCheckingIn: boolean;
  isCheckingOut: boolean;
}

export function TodayAttendanceCard({
  data,
  isLoading,
  onCheckIn,
  onCheckOut,
  isCheckingIn,
  isCheckingOut,
}: TodayAttendanceCardProps) {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [workDuration, setWorkDuration] = React.useState<string>('');

  // Update current time every second
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate work duration if checked in but not checked out
  React.useEffect(() => {
    if (data?.checkInTime && !data?.checkOutTime) {
      const [inHour, inMinute] = data.checkInTime.split(':').map(Number);

      const now = new Date();
      const checkInTime = new Date();
      checkInTime.setHours(inHour, inMinute, 0, 0);

      const diffMs = now.getTime() - checkInTime.getTime();
      const diffMinutes = Math.floor(diffMs / 1000 / 60);

      const hours = Math.floor(diffMinutes / 60);
      const minutes = diffMinutes % 60;

      if (hours > 0) {
        setWorkDuration(`${hours} ساعة و ${minutes} دقيقة`);
      } else {
        setWorkDuration(`${minutes} دقيقة`);
      }
    }
  }, [currentTime, data?.checkInTime, data?.checkOutTime]);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex min-h-[200px] items-center justify-center p-6">
          <LoadingSpinner size="lg" />
        </CardContent>
      </Card>
    );
  }

  if (!data) {
    return null;
  }

  const dateObj = new Date(data.date);
  const formattedDate = format(dateObj, 'EEEE، d MMMM yyyy', { locale: ar });
  const formattedTime = format(currentTime, 'hh:mm:ss a', { locale: ar });

  // Weekend state
  if (data.status === 'weekend') {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <Calendar className="h-12 w-12 text-gray-400" />
            <div>
              <p className="text-lg text-gray-500">📅 {formattedDate}</p>
              <p className="mt-2 text-xl font-semibold text-gray-600">
                عطلة نهاية الأسبوع
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Not checked in state
  if (!data.checkInTime) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-lg text-gray-600">📅 {formattedDate}</p>
              <p className="mt-1 text-base text-gray-500">
                ⏰ الوقت الحالي: {formattedTime}
              </p>
            </div>

            <div className="flex justify-center py-4">
              <Button
                onClick={onCheckIn}
                disabled={!data.canCheckIn || isCheckingIn}
                size="lg"
                className="w-full max-w-md gap-2 text-lg"
              >
                {isCheckingIn && <LoadingSpinner size="sm" />}
                <CheckCircle className="h-5 w-5" />
                تسجيل الحضور
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                موعد الدوام: {formatTime(data.shiftStartTime)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Checked in but not checked out state
  if (!data.checkOutTime) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-lg text-gray-600">📅 {formattedDate}</p>
            </div>

            <div className="space-y-2 rounded-lg bg-success-light/30 p-4">
              <div className="flex items-center justify-center gap-2 text-success">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">
                  وقت الحضور: {formatTime(data.checkInTime)}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <Clock className="h-5 w-5" />
                <span className="font-medium">مدة العمل: {workDuration}</span>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={onCheckOut}
                disabled={!data.canCheckOut || isCheckingOut}
                size="lg"
                className="w-full max-w-md gap-2 text-lg"
              >
                {isCheckingOut && <LoadingSpinner size="sm" />}
                <CheckCircle className="h-5 w-5" />
                تسجيل الانصراف
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Checked out state (completed)
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-600">📅 {formattedDate}</p>
            <Badge className="bg-success-light text-success">
              <CheckCircle className="ml-1 h-4 w-4" />
              حاضر
            </Badge>
          </div>

          <div className="grid gap-3 rounded-lg bg-gray-50 p-4 md:grid-cols-3">
            <div className="text-center">
              <p className="text-sm text-gray-500">وقت الحضور</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {formatTime(data.checkInTime)}
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500">وقت الانصراف</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {formatTime(data.checkOutTime)}
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500">إجمالي ساعات العمل</p>
              <p className="mt-1 text-lg font-semibold text-primary">
                {data.totalHours
                  ? `${Math.floor(data.totalHours)} ساعة و ${Math.round((data.totalHours % 1) * 60)} دقيقة`
                  : '-'}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
