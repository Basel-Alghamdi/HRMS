import { Payslip, PayslipSummary } from '@/types/payslip';

const ARABIC_MONTHS = [
  'يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
];

const ENGLISH_MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Mock employee data
const mockEmployee = {
  name: 'Mohammed Ahmed Al-Omari',
  nameAr: 'محمد أحمد العمري',
  employeeNumber: 'EMP-2024-0042',
  department: 'Information Technology',
  departmentAr: 'تقنية المعلومات',
  position: 'Senior Software Developer',
  positionAr: 'مطور برمجيات أول',
};

// Base salary components
const baseSalary = 10000;
const housingAllowance = 2500;
const transportAllowance = 1000;
const otherAllowances = 1500;

// Generate payslips for 2024
function generatePayslip(month: number, year: number): Payslip {
  // Random overtime (0-1000 SAR)
  const overtime = Math.floor(Math.random() * 5) * 200;

  // Calculate total earnings
  const totalEarnings = baseSalary + housingAllowance + transportAllowance + otherAllowances + overtime;

  // GOSI deduction (9.75% of basic salary only)
  const gosiDeduction = baseSalary * 0.0975;

  // Random loan deduction (0 or 500)
  const loanDeduction = month % 3 === 0 ? 500 : 0;

  // Total deductions
  const totalDeductions = gosiDeduction + loanDeduction;

  // Net salary
  const netSalary = totalEarnings - totalDeductions;

  // Calculate YTD (up to current month)
  const monthsCount = month;
  const ytdEarnings = (baseSalary + housingAllowance + transportAllowance + otherAllowances) * monthsCount;
  const ytdDeductions = gosiDeduction * monthsCount;

  // Payment date (28th of the month)
  const paymentDate = new Date(year, month - 1, 28);

  const payslip: Payslip = {
    id: `payslip-${year}-${String(month).padStart(2, '0')}`,
    employeeId: 'emp-001',
    employee: mockEmployee,
    month,
    year,
    monthNameAr: ARABIC_MONTHS[month - 1],
    monthNameEn: ENGLISH_MONTHS[month - 1],

    earnings: [
      {
        label: 'Basic Salary',
        labelAr: 'الراتب الأساسي',
        amount: baseSalary,
      },
      {
        label: 'Housing Allowance',
        labelAr: 'بدل السكن',
        amount: housingAllowance,
      },
      {
        label: 'Transport Allowance',
        labelAr: 'بدل المواصلات',
        amount: transportAllowance,
      },
      {
        label: 'Other Allowances',
        labelAr: 'بدلات أخرى',
        amount: otherAllowances,
      },
      ...(overtime > 0 ? [{
        label: 'Overtime',
        labelAr: 'العمل الإضافي',
        amount: overtime,
      }] : []),
    ],
    totalEarnings,

    deductions: [
      {
        label: 'GOSI (Social Insurance)',
        labelAr: 'التأمينات الاجتماعية',
        amount: gosiDeduction,
        percentage: 9.75,
      },
      ...(loanDeduction > 0 ? [{
        label: 'Loan Deduction',
        labelAr: 'سلفة',
        amount: loanDeduction,
      }] : []),
      {
        label: 'Other Deductions',
        labelAr: 'استقطاعات أخرى',
        amount: 0,
      },
    ],
    totalDeductions,

    netSalary,

    paymentInfo: {
      method: 'Bank Transfer',
      methodAr: 'تحويل بنكي',
      bankName: 'Al Rajhi Bank',
      bankNameAr: 'بنك الراجحي',
      accountNumber: '****1234',
      paymentDate: paymentDate.toISOString(),
    },

    status: month <= new Date().getMonth() + 1 ? 'paid' : 'processing',

    ytd: {
      totalEarnings: ytdEarnings,
      totalDeductions: ytdDeductions,
      totalNetSalary: ytdEarnings - ytdDeductions,
    },

    createdAt: new Date(year, month - 1, 25).toISOString(),
    updatedAt: new Date(year, month - 1, 28).toISOString(),
  };

  return payslip;
}

// Generate all payslips for a year
function generateYearPayslips(year: number): Payslip[] {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  let monthsToGenerate = 12;
  if (year === currentYear) {
    monthsToGenerate = currentMonth;
  }

  const payslips: Payslip[] = [];
  for (let month = 1; month <= monthsToGenerate; month++) {
    payslips.push(generatePayslip(month, year));
  }

  return payslips;
}

// Convert full payslip to summary
function toPayslipSummary(payslip: Payslip): PayslipSummary {
  return {
    id: payslip.id,
    month: payslip.month,
    year: payslip.year,
    monthNameAr: payslip.monthNameAr,
    monthNameEn: payslip.monthNameEn,
    netSalary: payslip.netSalary,
    status: payslip.status,
    paidDate: payslip.status === 'paid' ? payslip.paymentInfo.paymentDate : undefined,
  };
}

// Get all payslips for years 2022-2024
export const allPayslips = [
  ...generateYearPayslips(2024),
  ...generateYearPayslips(2023),
  ...generateYearPayslips(2022),
];

export const payslipSummaries = allPayslips.map(toPayslipSummary);

// Helper to get payslips by year
export function getPayslipsByYear(year: number): PayslipSummary[] {
  return payslipSummaries.filter(p => p.year === year);
}

// Helper to get single payslip
export function getPayslipById(id: string): Payslip | undefined {
  return allPayslips.find(p => p.id === id);
}

// Get available years
export function getAvailableYears(): number[] {
  return [2024, 2023, 2022];
}
