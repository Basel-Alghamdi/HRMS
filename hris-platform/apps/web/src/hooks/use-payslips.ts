import { useQuery } from '@tanstack/react-query';
import { PayslipSummary } from '@/types/payslip';

interface PayslipsResponse {
  success: boolean;
  data: PayslipSummary[];
  year: number;
}

export function usePayslips(year: number) {
  return useQuery({
    queryKey: ['payslips', year],
    queryFn: async () => {
      const url = new URL('/api/payslips', window.location.origin);
      url.searchParams.set('year', year.toString());
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error('Failed to fetch payslips');
      }
      const result: PayslipsResponse = await response.json();
      return result.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

interface AvailableYearsResponse {
  success: boolean;
  data: {
    years: number[];
    currentYear: number;
  };
}

export function useAvailableYears() {
  return useQuery({
    queryKey: ['payslips-years'],
    queryFn: async () => {
      const url = new URL('/api/payslips', window.location.origin);
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error('Failed to fetch available years');
      }
      const result: AvailableYearsResponse = await response.json();
      return result.data;
    },
    staleTime: 60 * 60 * 1000, // 1 hour
  });
}
