import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type {
  TodayAttendance,
  AttendanceRecord,
  AttendanceSummary,
} from '@/lib/types/attendance';
import {
  getMockTodayAttendance,
  generateMonthAttendance,
  calculateSummary,
} from '@/lib/mock-data/attendance';
import { format } from 'date-fns';

// Mock API functions
const fetchTodayAttendance = async (): Promise<TodayAttendance> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return getMockTodayAttendance();
};

const mockCheckIn = async (): Promise<TodayAttendance> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const now = new Date();
  const currentTime = format(now, 'HH:mm');

  return {
    ...getMockTodayAttendance(),
    id: 'today-1',
    checkInTime: currentTime,
    status: 'present',
    canCheckIn: false,
    canCheckOut: true,
  };
};

const mockCheckOut = async (): Promise<TodayAttendance> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const now = new Date();
  const currentTime = format(now, 'HH:mm');
  const todayData = getMockTodayAttendance();

  // Calculate hours if checked in
  if (todayData.checkInTime) {
    const [inHour, inMinute] = todayData.checkInTime.split(':').map(Number);
    const [outHour, outMinute] = currentTime.split(':').map(Number);

    const inTotalMinutes = inHour * 60 + inMinute;
    const outTotalMinutes = outHour * 60 + outMinute;

    const diffMinutes = outTotalMinutes - inTotalMinutes;
    const hours = Math.round((diffMinutes / 60) * 100) / 100;

    return {
      ...todayData,
      checkOutTime: currentTime,
      totalHours: hours,
      canCheckIn: false,
      canCheckOut: false,
    };
  }

  return todayData;
};

const fetchMonthAttendance = async (month: string): Promise<{
  records: AttendanceRecord[];
  summary: AttendanceSummary;
}> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const [year, monthNum] = month.split('-').map(Number);
  const records = generateMonthAttendance(year, monthNum);
  const summary = calculateSummary(records, month);

  return { records, summary };
};

// Hook to fetch today's attendance
export function useAttendanceToday() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['attendance', 'today'],
    queryFn: fetchTodayAttendance,
    staleTime: 30 * 1000, // 30 seconds
    refetchInterval: 60 * 1000, // Refetch every minute to update live counter
  });

  const checkInMutation = useMutation({
    mutationFn: mockCheckIn,
    onSuccess: (newData) => {
      queryClient.setQueryData(['attendance', 'today'], newData);
      queryClient.invalidateQueries({ queryKey: ['attendance', 'history'] });
    },
  });

  const checkOutMutation = useMutation({
    mutationFn: mockCheckOut,
    onSuccess: (newData) => {
      queryClient.setQueryData(['attendance', 'today'], newData);
      queryClient.invalidateQueries({ queryKey: ['attendance', 'history'] });
    },
  });

  return {
    data: data || null,
    isLoading,
    error,
    checkIn: checkInMutation.mutateAsync,
    checkOut: checkOutMutation.mutateAsync,
    isCheckingIn: checkInMutation.isPending,
    isCheckingOut: checkOutMutation.isPending,
  };
}

// Hook to fetch monthly attendance history
export function useAttendanceHistory(month: string) {
  return useQuery({
    queryKey: ['attendance', 'history', month],
    queryFn: () => fetchMonthAttendance(month),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
