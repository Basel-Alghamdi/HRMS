import { useQuery } from '@tanstack/react-query';
import { TeamDirectoryResponse, TeamDirectoryFilters } from '@/types/employee';

export function useTeamDirectory(filters?: TeamDirectoryFilters) {
  return useQuery({
    queryKey: ['team-directory', filters],
    queryFn: async () => {
      const url = new URL('/api/employees/directory', window.location.origin);

      if (filters?.search) {
        url.searchParams.set('search', filters.search);
      }
      if (filters?.department) {
        url.searchParams.set('department', filters.department);
      }
      if (filters?.status) {
        url.searchParams.set('status', filters.status);
      }

      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error('Failed to fetch team directory');
      }

      const result: TeamDirectoryResponse = await response.json();
      return result;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
