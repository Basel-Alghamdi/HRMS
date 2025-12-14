export type PayslipStatus = 'draft' | 'processing' | 'paid' | 'pending';

export interface PayslipEarning {
  label: string;
  labelAr: string;
  amount: number;
}

export interface PayslipDeduction {
  label: string;
  labelAr: string;
  amount: number;
  percentage?: number;
}

export interface PayslipPaymentInfo {
  method: string;
  methodAr: string;
  bankName: string;
  bankNameAr: string;
  accountNumber: string; // Masked
  paymentDate: string;
}

export interface PayslipEmployee {
  name: string;
  nameAr: string;
  employeeNumber: string;
  department: string;
  departmentAr: string;
  position: string;
  positionAr: string;
}

export interface PayslipYTD {
  totalEarnings: number;
  totalDeductions: number;
  totalNetSalary: number;
}

export interface Payslip {
  id: string;
  employeeId: string;
  employee: PayslipEmployee;
  month: number; // 1-12
  year: number;
  monthNameAr: string;
  monthNameEn: string;

  // Earnings
  earnings: PayslipEarning[];
  totalEarnings: number;

  // Deductions
  deductions: PayslipDeduction[];
  totalDeductions: number;

  // Net
  netSalary: number;

  // Payment Info
  paymentInfo: PayslipPaymentInfo;

  // Status
  status: PayslipStatus;

  // YTD
  ytd: PayslipYTD;

  // Metadata
  createdAt: string;
  updatedAt: string;
}

export interface PayslipSummary {
  id: string;
  month: number;
  year: number;
  monthNameAr: string;
  monthNameEn: string;
  netSalary: number;
  status: PayslipStatus;
  paidDate?: string;
}
