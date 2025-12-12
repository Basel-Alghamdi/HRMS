'use client';

import { useEffect, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { LoadingSpinner } from '@hris/ui';

interface AuthProviderProps {
  children: ReactNode;
}

const publicPaths = ['/login', '/forgot-password', '/reset-password'];

export function AuthProvider({ children }: AuthProviderProps) {
  const { user, isLoading, isAuthenticated } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    // Remove locale prefix to check path
    const pathWithoutLocale = pathname?.replace(/^\/(ar|en)/, '') || '';
    const isPublicPath = publicPaths.some((path) =>
      pathWithoutLocale.startsWith(path)
    );

    if (!isAuthenticated && !isPublicPath) {
      // Not authenticated and trying to access protected route
      router.push('/ar/login');
    } else if (isAuthenticated && isPublicPath) {
      // Authenticated and trying to access public route (login page)
      router.push('/ar/dashboard');
    }
  }, [isAuthenticated, pathname, router, isLoading]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return <>{children}</>;
}
