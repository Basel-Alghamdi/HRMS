'use client';

import { use, useState, useMemo } from 'react';
import { useTeamDirectory } from '@/hooks/use-team-directory';
import { EmployeeCard } from '@/components/team/EmployeeCard';
import { EmployeeTable } from '@/components/team/EmployeeTable';
import { EmployeeSheet } from '@/components/team/EmployeeSheet';
import { Employee } from '@/types/employee';
import { Search, Grid3x3, List, Loader2, ChevronDown } from 'lucide-react';
import { useDebounce } from '@/hooks/use-debounce';

interface TeamPageProps {
  params: Promise<{
    locale: string;
  }>;
}

type ViewMode = 'grid' | 'list';

export default function TeamPage({ params }: TeamPageProps) {
  const { locale } = use(params);
  const isArabic = locale === 'ar';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Debounce search query
  const debouncedSearch = useDebounce(searchQuery, 300);

  // Fetch data
  const { data, isLoading } = useTeamDirectory({
    search: debouncedSearch,
    department: selectedDepartment === 'all' ? undefined : selectedDepartment,
  });

  const employees = data?.data || [];
  const departments = data?.departments || [];

  const handleViewProfile = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
    setTimeout(() => setSelectedEmployee(null), 300);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          {isArabic ? 'فريق العمل' : 'Team Directory'}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {isArabic
            ? 'تعرف على أعضاء فريقك وابقَ على تواصل'
            : 'Connect with your team members'}
        </p>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 start-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isArabic ? 'بحث بالاسم أو القسم...' : 'Search by name or department...'
              }
              className="w-full ps-10 pe-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Department Filter */}
          <div className="relative min-w-[200px]">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full appearance-none px-4 py-2.5 pe-10 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white cursor-pointer"
            >
              <option value="all">
                {isArabic ? 'جميع الأقسام' : 'All Departments'}
              </option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.name}>
                  {isArabic ? dept.nameAr : dept.name} ({dept.employeeCount})
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 end-3 flex items-center pointer-events-none">
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-lg border transition-all ${
                viewMode === 'grid'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
              title={isArabic ? 'عرض شبكي' : 'Grid view'}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-lg border transition-all ${
                viewMode === 'list'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
              title={isArabic ? 'عرض قائمة' : 'List view'}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results count */}
        {!isLoading && (
          <div className="mt-3 text-sm text-gray-500">
            {isArabic
              ? `${employees.length} موظف`
              : `${employees.length} employee${employees.length !== 1 ? 's' : ''}`}
          </div>
        )}
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      )}

      {/* Empty State */}
      {!isLoading && employees.length === 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {isArabic ? 'لا توجد نتائج' : 'No results found'}
          </h3>
          <p className="text-sm text-gray-500">
            {isArabic
              ? 'جرب تغيير معايير البحث أو التصفية'
              : 'Try adjusting your search or filter criteria'}
          </p>
        </div>
      )}

      {/* Grid View */}
      {!isLoading && viewMode === 'grid' && employees.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              locale={locale}
              onViewProfile={handleViewProfile}
            />
          ))}
        </div>
      )}

      {/* List View */}
      {!isLoading && viewMode === 'list' && employees.length > 0 && (
        <EmployeeTable
          employees={employees}
          locale={locale}
          onViewProfile={handleViewProfile}
        />
      )}

      {/* Employee Profile Sheet */}
      <EmployeeSheet
        employee={selectedEmployee}
        locale={locale}
        isOpen={isSheetOpen}
        onClose={handleCloseSheet}
      />
    </div>
  );
}
