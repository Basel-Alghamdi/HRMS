'use client';

import { use, useState } from 'react';
import { usePayslips, useAvailableYears } from '@/hooks/use-payslips';
import { PayslipCard } from '@/components/payslips/PayslipCard';
import { Loader2 } from 'lucide-react';

interface PayslipsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default function PayslipsPage({ params }: PayslipsPageProps) {
  const { locale } = use(params);
  const isArabic = locale === 'ar';

  const { data: yearsData, isLoading: yearsLoading } = useAvailableYears();
  const currentYear = yearsData?.currentYear || new Date().getFullYear();
  const availableYears = yearsData?.years || [];

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const { data: payslips, isLoading: payslipsLoading } = usePayslips(selectedYear);

  const isLoading = yearsLoading || payslipsLoading;

  // Sort payslips by month descending (most recent first)
  const sortedPayslips = payslips ? [...payslips].sort((a, b) => b.month - a.month) : [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          {isArabic ? 'كشوف الرواتب' : 'Payslips'}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {isArabic
            ? 'عرض وتحميل كشوف الرواتب الشهرية'
            : 'View and download your monthly payslips'}
        </p>
      </div>

      {/* Year Selector */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          {isArabic ? 'السنة' : 'Year'}
        </label>
        <div className="flex flex-wrap gap-2">
          {availableYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                selectedYear === year
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      )}

      {/* Empty State */}
      {!isLoading && sortedPayslips.length === 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {isArabic ? 'لا توجد كشوف رواتب' : 'No payslips found'}
          </h3>
          <p className="text-sm text-gray-500">
            {isArabic
              ? `لا توجد كشوف رواتب متاحة لعام ${selectedYear}`
              : `No payslips available for ${selectedYear}`}
          </p>
        </div>
      )}

      {/* Payslips Grid */}
      {!isLoading && sortedPayslips.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sortedPayslips.map((payslip) => (
            <PayslipCard
              key={payslip.id}
              payslip={payslip}
              locale={locale}
            />
          ))}
        </div>
      )}
    </div>
  );
}
