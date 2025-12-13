'use client';

import * as React from 'react';
import { Clock, LogIn, LogOut } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@hris/ui';
import { Button } from '@hris/ui';
import { Badge } from '@hris/ui';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

interface AttendanceWidgetProps {
  status: 'not_checked_in' | 'checked_in' | 'checked_out';
  checkInTime?: Date;
  checkOutTime?: Date;
  onCheckIn?: () => void;
  onCheckOut?: () => void;
}

export function AttendanceWidget({
  status,
  checkInTime,
  checkOutTime,
  onCheckIn,
  onCheckOut,
}: AttendanceWidgetProps) {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [workingDuration, setWorkingDuration] = React.useState('00:00:00');

  // Update current time every second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate working duration
  React.useEffect(() => {
    if (status === 'checked_in' && checkInTime) {
      const interval = setInterval(() => {
        const diff = new Date().getTime() - checkInTime.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setWorkingDuration(
          `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
        );
      }, 1000);

      return () => clearInterval(interval);
    }
    return undefined;
  }, [status, checkInTime]);

  // Calculate total hours for checked out status
  const getTotalHours = () => {
    if (checkInTime && checkOutTime) {
      const diff = checkOutTime.getTime() - checkInTime.getTime();
      const hours = (diff / (1000 * 60 * 60)).toFixed(2);
      return `${hours} ساعة`;
    }
    return '0 ساعة';
  };

  const getStatusBadge = () => {
    if (!checkInTime || !checkOutTime) return null;

    // Mock logic - consider on time if checked in before 9 AM
    const isOnTime = checkInTime.getHours() < 9;

    return (
      <Badge variant={isOnTime ? 'default' : 'destructive'}>
        {isOnTime ? 'حاضر' : 'متأخر'}
      </Badge>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          الحضور والانصراف
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {status === 'not_checked_in' && (
          <>
            <div className="text-center">
              <p className="text-4xl font-bold tabular-nums">
                {format(currentTime, 'HH:mm:ss', { locale: ar })}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {format(currentTime, 'EEEE، d MMMM yyyy', { locale: ar })}
              </p>
            </div>
            <Button
              onClick={onCheckIn}
              className="w-full"
              size="lg"
              variant="default"
            >
              <LogIn className="me-2 h-5 w-5" />
              تسجيل الحضور
            </Button>
          </>
        )}

        {status === 'checked_in' && checkInTime && (
          <>
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                <span className="text-sm text-muted-foreground">
                  وقت الحضور
                </span>
                <span className="font-semibold">
                  {format(checkInTime, 'HH:mm', { locale: ar })}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-primary/10 p-3">
                <span className="text-sm font-medium">مدة العمل</span>
                <span className="text-lg font-bold tabular-nums text-primary">
                  {workingDuration}
                </span>
              </div>
            </div>
            <Button
              onClick={onCheckOut}
              className="w-full"
              size="lg"
              variant="destructive"
            >
              <LogOut className="me-2 h-5 w-5" />
              تسجيل الانصراف
            </Button>
          </>
        )}

        {status === 'checked_out' && checkInTime && checkOutTime && (
          <>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">الحالة</span>
                {getStatusBadge()}
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                <span className="text-sm text-muted-foreground">
                  وقت الحضور
                </span>
                <span className="font-semibold">
                  {format(checkInTime, 'HH:mm', { locale: ar })}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                <span className="text-sm text-muted-foreground">
                  وقت الانصراف
                </span>
                <span className="font-semibold">
                  {format(checkOutTime, 'HH:mm', { locale: ar })}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-primary/10 p-3">
                <span className="text-sm font-medium">إجمالي ساعات العمل</span>
                <span className="font-bold text-primary">{getTotalHours()}</span>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
