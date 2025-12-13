'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { LoadingSpinner } from '@hris/ui';

export default function HomePage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || 'ar';

  useEffect(() => {
    if (isLoading) return;

    if (isAuthenticated) {
      router.replace(`/${locale}/dashboard`);
    } else {
      router.replace(`/${locale}/login`);
    }
  }, [isAuthenticated, isLoading, router, locale]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoadingSpinner size="lg" />
    </div>
  );
}
