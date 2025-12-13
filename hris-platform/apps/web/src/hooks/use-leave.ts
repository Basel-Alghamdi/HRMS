import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type {
  LeaveRequest,
  LeaveBalance,
  LeaveStatus,
} from '@/lib/types/leave';
import {
  mockLeaveRequests,
  mockLeaveBalances,
  mockCreateLeaveRequest,
  mockCancelLeaveRequest,
} from '@/lib/mock-data/leave';

// Mock API functions
const fetchLeaveRequests = async (filters?: {
  status?: LeaveStatus;
}): Promise<LeaveRequest[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  let requests = [...mockLeaveRequests];

  // Filter by status if provided
  if (filters?.status) {
    requests = requests.filter((req) => req.status === filters.status);
  }

  // Sort by requested date (newest first)
  requests.sort((a, b) => {
    return new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime();
  });

  return requests;
};

const fetchLeaveBalance = async (): Promise<LeaveBalance[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockLeaveBalances;
};

const fetchLeaveRequest = async (id: string): Promise<LeaveRequest | null> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockLeaveRequests.find((req) => req.id === id) || null;
};

// Hook to fetch leave requests
export function useLeaveRequests(filters?: { status?: LeaveStatus }) {
  return useQuery({
    queryKey: ['leave', 'requests', filters],
    queryFn: () => fetchLeaveRequests(filters),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}

// Hook to fetch leave balance
export function useLeaveBalance() {
  return useQuery({
    queryKey: ['leave', 'balance'],
    queryFn: fetchLeaveBalance,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Hook to fetch single leave request
export function useLeaveRequest(id: string) {
  return useQuery({
    queryKey: ['leave', 'request', id],
    queryFn: () => fetchLeaveRequest(id),
    enabled: !!id,
  });
}

// Hook to create leave request
export function useCreateLeave() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mockCreateLeaveRequest,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['leave', 'requests'] });
      queryClient.invalidateQueries({ queryKey: ['leave', 'balance'] });
    },
  });
}

// Hook to cancel leave request
export function useCancelLeave() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mockCancelLeaveRequest,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['leave', 'requests'] });
      queryClient.invalidateQueries({ queryKey: ['leave', 'balance'] });
    },
  });
}
