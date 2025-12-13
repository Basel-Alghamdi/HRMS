'use client';

import * as React from 'react';
import { FileText, ChevronLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@hris/ui';
import { Badge } from '@hris/ui';
import { Button } from '@hris/ui';
import { EmptyState } from '@hris/ui';
import { useRouter } from 'next/navigation';

interface Payslip {
  id: string;
  month: string;
  year: number;
  netSalary: number;
  status: 'paid' | 'pending' | 'processing';
}

interface RecentPayslipsProps {
  payslips: Payslip[];
}

const statusLabels = {
  paid: 'مدفوع',
  pending: 'قيد الانتظار',
  processing: 'قيد المعالجة',
};

const statusVariants = {
  paid: 'default' as const,
  pending: 'secondary' as const,
  processing: 'outline' as const,
};

export function RecentPayslips({ payslips }: RecentPayslipsProps) {
  const router = useRouter();

  if (payslips.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            كشوف الرواتب الأخيرة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon={<FileText className="h-10 w-10 text-muted-foreground" />}
            title="لا توجد كشوف رواتب"
            description="لم يتم إصدار أي كشوف رواتب حتى الآن"
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          كشوف الرواتب الأخيرة
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/ar/payslips')}
        >
          عرض الكل
          <ChevronLeft className="ms-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {payslips.map((payslip) => (
            <div
              key={payslip.id}
              className="flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-colors hover:bg-accent"
              onClick={() => router.push(`/ar/payslips/${payslip.id}`)}
            >
              <div className="space-y-1">
                <p className="font-medium">
                  {payslip.month} {payslip.year}
                </p>
                <p className="text-sm text-muted-foreground">
                  {payslip.netSalary.toLocaleString('ar-SA')} ر.س
                </p>
              </div>
              <Badge variant={statusVariants[payslip.status]}>
                {statusLabels[payslip.status]}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
