import { useQuery } from '@tanstack/react-query';
import { Employee } from '@/types/employee';

interface EmployeeCardResponse {
  success: boolean;
  data: Employee;
}

export function useEmployeeCard(id: string | null) {
  return useQuery({
    queryKey: ['employee-card', id],
    queryFn: async () => {
      if (!id) {
        throw new Error('Employee ID is required');
      }

      const url = new URL(`/api/employees/${id}/card`, window.location.origin);
      const response = await fetch(url.toString());

      if (!response.ok) {
        throw new Error('Failed to fetch employee');
      }

      const result: EmployeeCardResponse = await response.json();
      return result.data;
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}
