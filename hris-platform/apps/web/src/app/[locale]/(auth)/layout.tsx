import type { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary">نظام الموارد البشرية</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            HRIS Platform
          </p>
        </div>

        {/* Auth Card */}
        <div className="rounded-lg border bg-card shadow-lg">
          {children}
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © 2024 نظام إدارة الموارد البشرية. جميع الحقوق محفوظة.
        </p>
      </div>
    </div>
  );
}
