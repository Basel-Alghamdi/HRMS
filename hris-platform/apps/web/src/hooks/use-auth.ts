import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { api } from '@/lib/api-client';
import type { LoginFormData } from '@/lib/validations';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

// Mock login for development (replace with real API later)
const mockLogin = async (data: LoginFormData): Promise<LoginResponse> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock validation
  if (data.email === 'admin@hris.sa' && data.password === 'Password123') {
    return {
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token',
      user: {
        id: '1',
        email: data.email,
        firstName: 'أحمد',
        lastName: 'محمد',
        role: 'employee',
      },
    };
  }

  throw new Error('البريد الإلكتروني أو كلمة المرور غير صحيحة');
};

// Mock get current user
const mockGetUser = async (): Promise<User | null> => {
  const token = Cookies.get('access_token');
  if (!token) return null;

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    id: '1',
    email: 'admin@hris.sa',
    firstName: 'أحمد',
    lastName: 'محمد',
    role: 'employee',
  };
};

export function useAuth() {
  const router = useRouter();
  const queryClient = useQueryClient();

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
        expires: data.rememberMe ? 30 : undefined, // 30 days if remember me
      });
      Cookies.set('refresh_token', data.refreshToken, {
        expires: data.rememberMe ? 30 : undefined,
      });

      // Update user in cache
      queryClient.setQueryData(['user'], data.user);

      // Redirect to dashboard
      router.push('/ar/dashboard');
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

      // Clear user from cache
      queryClient.setQueryData(['user'], null);
      queryClient.clear();

      // Redirect to login
      router.push('/ar/login');
    },
  });

  return {
    user,
    isAuthenticated: !!user && !isError,
    isLoading,
    login: loginMutation.mutateAsync,
    logout: logoutMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    loginError: loginMutation.error,
  };
}
