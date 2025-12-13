'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { mockLeaveBalances, mockPayslips, mockLeaveRequests, mockAttendanceData } from '@/lib/mock-data';

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API functions
const fetchDashboardData = async () => {
  await delay(500);
  return {
    leaveBalances: mockLeaveBalances,
    payslips: mockPayslips.slice(0, 3), // Last 3 payslips
    leaveRequests: mockLeaveRequests,
    attendance: mockAttendanceData,
  };
};

const checkIn = async () => {
  await delay(300);
  mockAttendanceData.status = 'checked_in';
  mockAttendanceData.checkInTime = new Date();
  return mockAttendanceData;
};

const checkOut = async () => {
  await delay(300);
  mockAttendanceData.status = 'checked_out';
  mockAttendanceData.checkOutTime = new Date();
  return mockAttendanceData;
};

export function useDashboard() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboardData,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const checkInMutation = useMutation({
    mutationFn: checkIn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    },
  });

  const checkOutMutation = useMutation({
    mutationFn: checkOut,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    },
  });

  return {
    data,
    isLoading,
    error,
    checkIn: checkInMutation.mutate,
    checkOut: checkOutMutation.mutate,
    isCheckingIn: checkInMutation.isPending,
    isCheckingOut: checkOutMutation.isPending,
  };
}
