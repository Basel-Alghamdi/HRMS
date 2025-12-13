'use client';

import { Wallet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@hris/ui';

export default function PayslipsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">كشوف الرواتب</h1>
        <p className="mt-2 text-muted-foreground">
          عرض وتحميل كشوف الرواتب الشهرية
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            قريباً
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            ستتمكن قريباً من عرض وتحميل كشوف الرواتب من هنا.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
