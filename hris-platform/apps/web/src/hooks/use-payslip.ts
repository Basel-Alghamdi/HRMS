import { useQuery } from '@tanstack/react-query';
import { Payslip } from '@/types/payslip';

interface PayslipResponse {
  success: boolean;
  data: Payslip;
}

export function usePayslip(id: string | null) {
  return useQuery({
    queryKey: ['payslip', id],
    queryFn: async () => {
      if (!id) {
        throw new Error('Payslip ID is required');
      }
      const url = new URL(`/api/payslips/${id}`, window.location.origin);
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error('Failed to fetch payslip');
      }
      const result: PayslipResponse = await response.json();
      return result.data;
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}
