'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { LoadingSpinner } from '@hris/ui';

interface AuthProviderProps {
  children: ReactNode;
}

const publicPaths = ['/login', '/forgot-password', '/reset-password'];

export function AuthProvider({ children }: AuthProviderProps) {
  const { isLoading, isAuthenticated } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (isLoading || isRedirecting) return;

    // Extract locale and path
    const match = pathname?.match(/^\/(ar|en)(\/.*)?$/);
    if (!match) return;

    const locale = match[1];
    const pathWithoutLocale = match[2] || '';

    // Check if current path is public
    const isPublicPath = publicPaths.some((path) =>
      pathWithoutLocale.startsWith(path)
    );

    // Redirect logic
    if (!isAuthenticated && !isPublicPath) {
      // Not authenticated and trying to access protected route
      setIsRedirecting(true);
      router.push(`/${locale}/login`);
    } else if (isAuthenticated && isPublicPath) {
      // Authenticated and trying to access auth pages
      setIsRedirecting(true);
      router.push(`/${locale}/dashboard`);
    }
  }, [isAuthenticated, pathname, router, isLoading, isRedirecting]);

  // Show loading spinner while checking auth or redirecting
  if (isLoading || isRedirecting) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return <>{children}</>;
}
