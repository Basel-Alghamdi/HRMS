import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type {
  Employee,
  Document,
  UpdateProfileData,
  ChangePasswordData,
} from '@/lib/types/profile';
import { mockEmployee, mockDocuments } from '@/lib/mock-data/profile';

// Mock API functions
const fetchProfile = async (): Promise<Employee> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockEmployee;
};

const fetchDocuments = async (): Promise<Document[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockDocuments;
};

const updateProfile = async (data: UpdateProfileData): Promise<Employee> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { ...mockEmployee, ...data };
};

const changePassword = async (
  data: ChangePasswordData,
): Promise<{ success: boolean }> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock validation
  if (data.currentPassword !== 'Password123') {
    throw new Error('كلمة المرور الحالية غير صحيحة');
  }

  if (data.newPassword.length < 8) {
    throw new Error('كلمة المرور يجب أن تكون 8 أحرف على الأقل');
  }

  if (data.newPassword !== data.confirmPassword) {
    throw new Error('كلمات المرور غير متطابقة');
  }

  return { success: true };
};

// Hook to fetch employee profile
export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Hook to fetch employee documents
export function useDocuments() {
  return useQuery({
    queryKey: ['documents'],
    queryFn: fetchDocuments,
    staleTime: 5 * 60 * 1000,
  });
}

// Hook to update profile
export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      queryClient.setQueryData(['profile'], data);
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
}

// Hook to change password
export function useChangePassword() {
  return useMutation({
    mutationFn: changePassword,
  });
}
