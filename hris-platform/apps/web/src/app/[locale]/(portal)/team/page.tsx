'use client';

import { Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@hris/ui';

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">فريق العمل</h1>
        <p className="mt-2 text-muted-foreground">
          تعرف على أعضاء فريقك
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            قريباً
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            ستتمكن قريباً من عرض معلومات فريق العمل من هنا.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
