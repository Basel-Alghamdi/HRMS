'use client';

import * as React from 'react';
import { LogIn, Calendar, Wallet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@hris/ui';
import { Button } from '@hris/ui';
import { useRouter } from 'next/navigation';

interface QuickActionsProps {
  attendanceStatus: 'not_checked_in' | 'checked_in' | 'checked_out';
  onAttendanceAction?: () => void;
}

export function QuickActions({
  attendanceStatus,
  onAttendanceAction,
}: QuickActionsProps) {
  const router = useRouter();

  const getAttendanceButton = () => {
    if (attendanceStatus === 'not_checked_in') {
      return (
        <Button onClick={onAttendanceAction} className="w-full" size="lg">
          <LogIn className="me-2 h-5 w-5" />
          تسجيل الحضور
        </Button>
      );
    }

    if (attendanceStatus === 'checked_in') {
      return (
        <Button
          onClick={onAttendanceAction}
          className="w-full"
          size="lg"
          variant="destructive"
        >
          <LogIn className="me-2 h-5 w-5" />
          تسجيل الانصراف
        </Button>
      );
    }

    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>إجراءات سريعة</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {getAttendanceButton()}

        <Button
          onClick={() => router.push('/ar/leave/new')}
          className="w-full"
          size="lg"
          variant="outline"
        >
          <Calendar className="me-2 h-5 w-5" />
          طلب إجازة
        </Button>

        <Button
          onClick={() => router.push('/ar/payslips')}
          className="w-full"
          size="lg"
          variant="outline"
        >
          <Wallet className="me-2 h-5 w-5" />
          عرض كشف الراتب
        </Button>
      </CardContent>
    </Card>
  );
}
