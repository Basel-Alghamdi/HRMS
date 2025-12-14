'use client';

import { PayslipSummary } from '@/types/payslip';
import { FileText, Download } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PayslipCardProps {
  payslip: PayslipSummary;
  locale: string;
}

const statusConfig = {
  paid: {
    label: 'مدفوع',
    labelEn: 'Paid',
    bg: 'bg-primary-bg',
    text: 'text-primary-dark',
    border: 'border-primary',
  },
  processing: {
    label: 'قيد المعالجة',
    labelEn: 'Processing',
    bg: 'bg-info-light',
    text: 'text-info',
    border: 'border-info',
  },
  pending: {
    label: 'قيد الانتظار',
    labelEn: 'Pending',
    bg: 'bg-warning-light',
    text: 'text-warning',
    border: 'border-warning',
  },
  draft: {
    label: 'مسودة',
    labelEn: 'Draft',
    bg: 'bg-gray-100',
    text: 'text-gray-600',
    border: 'border-gray-300',
  },
};

export function PayslipCard({ payslip, locale }: PayslipCardProps) {
  const router = useRouter();
  const isArabic = locale === 'ar';
  const status = statusConfig[payslip.status];

  const handleViewDetails = () => {
    router.push(`/${locale}/payslips/${payslip.id}`);
  };

  const handleDownloadPDF = async (e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: Implement PDF download
    window.open(`/api/payslips/${payslip.id}/pdf`, '_blank');
  };

  return (
    <div
      onClick={handleViewDetails}
      className="group relative bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md hover:border-primary transition-all duration-200 cursor-pointer"
    >
      {/* Header Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-primary-bg flex items-center justify-center">
          <FileText className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Month & Year */}
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {isArabic ? payslip.monthNameAr : payslip.monthNameEn} {payslip.year}
        </h3>
      </div>

      {/* Net Salary */}
      <div className="text-center mb-4">
        <p className="text-sm text-gray-500 mb-1">
          {isArabic ? 'صافي الراتب' : 'Net Salary'}
        </p>
        <div className="h-px bg-gray-200 w-20 mx-auto mb-2"></div>
        <p className="text-2xl font-bold text-gray-900" dir="ltr">
          {payslip.netSalary.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {isArabic ? 'ر.س' : 'SAR'}
        </p>
      </div>

      {/* Status Badge */}
      <div className="flex justify-center mb-4">
        <span
          className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium border ${status.bg} ${status.text} ${status.border}`}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-current me-2"></span>
          {isArabic ? status.label : status.labelEn}
        </span>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        <button
          onClick={handleViewDetails}
          className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-primary transition-colors"
        >
          {isArabic ? 'عرض التفاصيل' : 'View Details'}
        </button>
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>PDF</span>
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
}
