'use client';

import { useAuth } from '@/hooks/use-auth';
import { Button, Card, CardHeader, CardTitle, CardContent } from '@hris/ui';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">مرحباً، {user?.firstName}!</h1>
        <p className="mt-2 text-muted-foreground">
          مرحباً بك في نظام إدارة الموارد البشرية
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>معلومات الموظف</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="font-medium text-muted-foreground">الاسم:</dt>
                <dd>{user?.firstName} {user?.lastName}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">البريد:</dt>
                <dd>{user?.email}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">الدور:</dt>
                <dd>{user?.role}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>الإجراءات السريعة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              ستتوفر المزيد من الميزات قريباً...
            </p>
            <Button onClick={() => logout()} variant="outline" className="w-full">
              تسجيل الخروج
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
