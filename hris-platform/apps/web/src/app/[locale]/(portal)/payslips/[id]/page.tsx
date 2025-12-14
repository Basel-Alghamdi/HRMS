'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { usePayslip } from '@/hooks/use-payslip';
import { ArrowRight, Download, Loader2 } from 'lucide-react';

interface PayslipDetailPageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export default function PayslipDetailPage({ params }: PayslipDetailPageProps) {
  const { locale, id } = use(params);
  const isArabic = locale === 'ar';
  const router = useRouter();

  const { data: payslip, isLoading, error } = usePayslip(id);

  const handleBack = () => {
    router.push(`/${locale}/payslips`);
  };

  const handleDownloadPDF = () => {
    window.open(`/api/payslips/${id}/pdf`, '_blank');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !payslip) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <div className="w-16 h-16 bg-error-light rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-error"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {isArabic ? 'كشف الراتب غير موجود' : 'Payslip not found'}
        </h3>
        <button
          onClick={handleBack}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          {isArabic ? 'العودة للقائمة' : 'Back to list'}
        </button>
      </div>
    );
  }

  const paymentDate = new Date(payslip.paymentInfo.paymentDate);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {isArabic
                ? `كشف راتب ${payslip.monthNameAr} ${payslip.year}`
                : `${payslip.monthNameEn} ${payslip.year} Payslip`}
            </h1>
          </div>
        </div>
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>{isArabic ? 'تحميل PDF' : 'Download PDF'}</span>
        </button>
      </div>

      {/* Payslip Detail Card */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-8 max-w-4xl mx-auto">
          {/* Company Header */}
          <div className="text-center mb-8 pb-8 border-b-2 border-gray-200">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">H</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              {isArabic ? 'شركة هيلمان للتقنية' : 'Hailaman Technology Company'}
            </h2>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <div className="h-1 bg-gray-200 mb-4"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isArabic ? 'كشف راتب' : 'Payslip'}
            </h3>
            <p className="text-lg text-gray-600">
              {isArabic
                ? `${payslip.monthNameAr} ${payslip.year}`
                : `${payslip.monthNameEn} ${payslip.year}`}
            </p>
            <div className="h-1 bg-gray-200 mt-4"></div>
          </div>

          {/* Employee Information */}
          <div className="mb-8">
            <h4 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {isArabic ? 'معلومات الموظف' : 'Employee Information'}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {isArabic ? 'الاسم' : 'Name'}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  {isArabic ? payslip.employee.nameAr : payslip.employee.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {isArabic ? 'الرقم الوظيفي' : 'Employee Number'}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  {payslip.employee.employeeNumber}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {isArabic ? 'القسم' : 'Department'}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  {isArabic ? payslip.employee.departmentAr : payslip.employee.department}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {isArabic ? 'المسمى الوظيفي' : 'Position'}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  {isArabic ? payslip.employee.positionAr : payslip.employee.position}
                </p>
              </div>
            </div>
          </div>

          <div className="h-1 bg-gray-200 my-8"></div>

          {/* Earnings Section */}
          <div className="mb-8">
            <h4 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {isArabic ? 'الاستحقاقات' : 'Earnings'}
            </h4>
            <div className="space-y-3">
              {payslip.earnings.map((earning, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">
                    {isArabic ? earning.labelAr : earning.label}
                  </span>
                  <span className="text-sm font-medium text-gray-900" dir="ltr">
                    {earning.amount.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              ))}
              <div className="h-px bg-gray-200 my-2"></div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-900">
                  {isArabic ? 'إجمالي الاستحقاقات' : 'Total Earnings'}
                </span>
                <span className="text-sm font-bold text-gray-900" dir="ltr">
                  {payslip.totalEarnings.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Deductions Section */}
          <div className="mb-8">
            <h4 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {isArabic ? 'الاستقطاعات' : 'Deductions'}
            </h4>
            <div className="space-y-3">
              {payslip.deductions.map((deduction, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">
                    {isArabic ? deduction.labelAr : deduction.label}
                    {deduction.percentage && (
                      <span className="text-xs text-gray-500 ms-1">
                        ({deduction.percentage}%)
                      </span>
                    )}
                  </span>
                  <span className="text-sm font-medium text-gray-900" dir="ltr">
                    {deduction.amount.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              ))}
              <div className="h-px bg-gray-200 my-2"></div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-900">
                  {isArabic ? 'إجمالي الاستقطاعات' : 'Total Deductions'}
                </span>
                <span className="text-sm font-bold text-gray-900" dir="ltr">
                  {payslip.totalDeductions.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="h-1 bg-gray-200 my-8"></div>

          {/* Net Salary */}
          <div className="bg-primary-bg rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">
                {isArabic ? 'صافي الراتب' : 'Net Salary'}
              </span>
              <div className="text-end">
                <p className="text-2xl font-bold text-primary" dir="ltr">
                  {payslip.netSalary.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{' '}
                  <span className="text-lg">{isArabic ? 'ر.س' : 'SAR'}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="h-1 bg-gray-200 my-8"></div>

          {/* Payment Information */}
          <div className="mb-8">
            <h4 className="text-base font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {isArabic ? 'معلومات الدفع' : 'Payment Information'}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {isArabic ? 'طريقة الدفع' : 'Payment Method'}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  {isArabic
                    ? payslip.paymentInfo.methodAr
                    : payslip.paymentInfo.method}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {isArabic ? 'البنك' : 'Bank'}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  {isArabic
                    ? payslip.paymentInfo.bankNameAr
                    : payslip.paymentInfo.bankName}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {isArabic ? 'رقم الحساب' : 'Account Number'}
                </p>
                <p className="text-sm font-medium text-gray-900" dir="ltr">
                  {payslip.paymentInfo.accountNumber}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {isArabic ? 'تاريخ الدفع' : 'Payment Date'}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  {paymentDate.toLocaleDateString(isArabic ? 'ar-SA' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* YTD Summary */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {isArabic ? 'الإجمالي السنوي حتى تاريخه' : 'Year to Date Summary'}
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">
                  {isArabic ? 'إجمالي الاستحقاقات' : 'Total Earnings'}
                </span>
                <span className="text-sm font-medium text-gray-900" dir="ltr">
                  {payslip.ytd.totalEarnings.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{' '}
                  {isArabic ? 'ر.س' : 'SAR'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">
                  {isArabic ? 'إجمالي الاستقطاعات' : 'Total Deductions'}
                </span>
                <span className="text-sm font-medium text-gray-900" dir="ltr">
                  {payslip.ytd.totalDeductions.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{' '}
                  {isArabic ? 'ر.س' : 'SAR'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
