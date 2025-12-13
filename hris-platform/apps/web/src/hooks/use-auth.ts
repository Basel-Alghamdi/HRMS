import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import type { LoginFormData } from '@/lib/validations';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  jobTitle?: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
  rememberMe?: boolean;
}

// Mock login for development (replace with real API later)
const mockLogin = async (data: LoginFormData): Promise<LoginResponse> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock validation
  if (data.email === 'admin@hris.sa' && data.password === 'Password123') {
    const user = {
      id: '1',
      email: data.email,
      firstName: 'أحمد',
      lastName: 'محمد',
      role: 'employee',
      jobTitle: 'مطور برمجيات',
    };

    // Persist to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('hris_user', JSON.stringify(user));
    }

    return {
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token',
      user,
      rememberMe: data.rememberMe,
    };
  }

  throw new Error('البريد الإلكتروني أو كلمة المرور غير صحيحة');
};

// Mock get current user
const mockGetUser = async (): Promise<User | null> => {
  const token = Cookies.get('access_token');

  if (!token) {
    // Try to restore from localStorage
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('hris_user');
      if (storedUser) {
        try {
          return JSON.parse(storedUser);
        } catch {
          localStorage.removeItem('hris_user');
        }
      }
    }
    return null;
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Try to restore from localStorage first
  if (typeof window !== 'undefined') {
    const storedUser = localStorage.getItem('hris_user');
    if (storedUser) {
      try {
        return JSON.parse(storedUser);
      } catch {
        // Fallback to default mock user
      }
    }
  }

  return {
    id: '1',
    email: 'admin@hris.sa',
    firstName: 'أحمد',
    lastName: 'محمد',
    role: 'employee',
    jobTitle: 'مطور برمجيات',
  };
};

// Mock refresh token
const mockRefreshToken = async (): Promise<{ accessToken: string }> => {
  const refreshToken = Cookies.get('refresh_token');
  if (!refreshToken) {
    throw new Error('No refresh token');
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    accessToken: 'mock-new-access-token',
  };
};

export function useAuth() {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();

  // Extract locale from pathname
  const locale = pathname?.match(/^\/(ar|en)/)?.[1] || 'ar';

  // Get current user
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: mockGetUser,
    retry: false,
    staleTime: Infinity,
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: mockLogin,
    onSuccess: (data) => {
      // Store tokens
      Cookies.set('access_token', data.accessToken, {
        expires: data.rememberMe ? 30 : 7, // 30 days if remember me, 7 days otherwise
      });
      Cookies.set('refresh_token', data.refreshToken, {
        expires: data.rememberMe ? 30 : 7,
      });

      // Update user in cache
      queryClient.setQueryData(['user'], data.user);

      // Redirect to dashboard
      router.push(`/${locale}/dashboard`);
    },
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      // Call API logout endpoint (mock for now)
      await new Promise((resolve) => setTimeout(resolve, 500));
    },
    onSettled: () => {
      // Clear tokens
      Cookies.remove('access_token');
      Cookies.remove('refresh_token');

      // Clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('hris_user');
      }

      // Clear user from cache
      queryClient.setQueryData(['user'], null);
      queryClient.clear();

      // Redirect to login
      router.push(`/${locale}/login`);
    },
  });

  // Refresh token mutation
  const refreshTokenMutation = useMutation({
    mutationFn: mockRefreshToken,
    onSuccess: (data) => {
      Cookies.set('access_token', data.accessToken, { expires: 7 });
    },
  });

  return {
    user,
    isAuthenticated: !!user && !isError,
    isLoading,
    login: loginMutation.mutateAsync,
    logout: logoutMutation.mutate,
    refreshToken: refreshTokenMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    loginError: loginMutation.error,
  };
}
