'use client';

import * as React from 'react';
import { Clock, ChevronLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@hris/ui';
import { Badge } from '@hris/ui';
import { Button } from '@hris/ui';
import { EmptyState } from '@hris/ui';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { useRouter } from 'next/navigation';

interface LeaveRequest {
  id: string;
  type: string;
  startDate: Date;
  endDate: Date;
  days: number;
  status: 'pending' | 'approved' | 'rejected';
}

interface PendingRequestsProps {
  requests: LeaveRequest[];
}

export function PendingRequests({ requests }: PendingRequestsProps) {
  const router = useRouter();

  const pendingRequests = requests.filter((req) => req.status === 'pending');

  if (pendingRequests.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            الطلبات المعلقة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon={<Clock className="h-10 w-10 text-muted-foreground" />}
            title="لا توجد طلبات معلقة"
            description="جميع طلباتك تمت معالجتها"
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          الطلبات المعلقة
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/ar/leave')}
        >
          عرض الكل
          <ChevronLeft className="ms-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {pendingRequests.map((request) => (
            <div
              key={request.id}
              className="flex cursor-pointer items-start justify-between rounded-lg border p-3 transition-colors hover:bg-accent"
              onClick={() => router.push(`/ar/leave/${request.id}`)}
            >
              <div className="flex-1 space-y-1">
                <p className="font-medium">{request.type}</p>
                <p className="text-sm text-muted-foreground">
                  {format(request.startDate, 'd MMM', { locale: ar })} -{' '}
                  {format(request.endDate, 'd MMM yyyy', { locale: ar })}
                </p>
                <p className="text-xs text-muted-foreground">
                  {request.days} {request.days === 1 ? 'يوم' : 'أيام'}
                </p>
              </div>
              <Badge variant="secondary">قيد الانتظار</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
