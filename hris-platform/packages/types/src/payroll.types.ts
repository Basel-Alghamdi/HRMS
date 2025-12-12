/**
 * Payroll and salary management types
 */

import { BaseEntity, DateRange, PaginatedResponse } from './common.types';
import { EmployeeSummary } from './employee.types';

/**
 * Salary component enum
 */
export enum SalaryComponent {
  /** Basic salary */
  BASIC = 'BASIC',
  /** Housing allowance */
  HOUSING = 'HOUSING',
  /** Transportation allowance */
  TRANSPORT = 'TRANSPORT',
  /** Food allowance */
  FOOD = 'FOOD',
  /** Communication allowance */
  COMMUNICATION = 'COMMUNICATION',
  /** Performance bonus */
  PERFORMANCE_BONUS = 'PERFORMANCE_BONUS',
  /** Overtime payment */
  OVERTIME = 'OVERTIME',
  /** Other allowance */
  OTHER_ALLOWANCE = 'OTHER_ALLOWANCE',
}

/**
 * Deduction type enum
 */
export enum DeductionType {
  /** GOSI (General Organization for Social Insurance) - Employee contribution */
  GOSI_EMPLOYEE = 'GOSI_EMPLOYEE',
  /** GOSI - Employer contribution */
  GOSI_EMPLOYER = 'GOSI_EMPLOYER',
  /** Income tax */
  INCOME_TAX = 'INCOME_TAX',
  /** Loan repayment */
  LOAN = 'LOAN',
  /** Salary advance repayment */
  ADVANCE = 'ADVANCE',
  /** Absence deduction */
  ABSENCE = 'ABSENCE',
  /** Late deduction */
  LATE = 'LATE',
  /** Other deduction */
  OTHER = 'OTHER',
}

/**
 * Payroll status enum
 */
export enum PayrollStatus {
  /** Draft (not finalized) */
  DRAFT = 'DRAFT',
  /** Pending approval */
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  /** Approved */
  APPROVED = 'APPROVED',
  /** Paid */
  PAID = 'PAID',
  /** Rejected */
  REJECTED = 'REJECTED',
}

/**
 * Payment method enum
 */
export enum PaymentMethod {
  /** Bank transfer */
  BANK_TRANSFER = 'BANK_TRANSFER',
  /** Cash */
  CASH = 'CASH',
  /** Cheque */
  CHEQUE = 'CHEQUE',
}

/**
 * Salary component detail
 */
export interface SalaryComponentDetail {
  /** Component type */
  type: SalaryComponent;
  /** Component name */
  name: string;
  /** Amount (SAR) */
  amount: number;
  /** Is taxable */
  isTaxable: boolean;
  /** Notes */
  notes?: string;
}

/**
 * Deduction detail
 */
export interface DeductionDetail {
  /** Deduction type */
  type: DeductionType;
  /** Deduction name */
  name: string;
  /** Amount (SAR) */
  amount: number;
  /** Notes */
  notes?: string;
}

/**
 * Salary structure
 */
export interface SalaryStructure {
  /** Employee */
  employee: EmployeeSummary;
  /** Effective from date */
  effectiveFrom: Date;
  /** Salary components */
  components: SalaryComponentDetail[];
  /** Gross salary (total of all components) */
  grossSalary: number;
  /** Standard deductions */
  deductions: DeductionDetail[];
  /** Net salary (after deductions) */
  netSalary: number;
}

/**
 * Payslip response
 */
export interface PayslipResponse extends BaseEntity {
  /** Employee */
  employee: EmployeeSummary;
  /** Pay period (month/year) */
  payPeriod: string;
  /** Pay period start date */
  periodStart: Date;
  /** Pay period end date */
  periodEnd: Date;
  /** Payment date */
  paymentDate: Date;
  /** Payment method */
  paymentMethod: PaymentMethod;

  // Earnings
  /** Salary components */
  earnings: SalaryComponentDetail[];
  /** Total earnings */
  totalEarnings: number;

  // Deductions
  /** Deductions */
  deductions: DeductionDetail[];
  /** Total deductions */
  totalDeductions: number;

  // Attendance
  /** Working days in period */
  workingDays: number;
  /** Days worked */
  daysWorked: number;
  /** Days absent */
  daysAbsent: number;
  /** Overtime hours */
  overtimeHours: number;

  // Net salary
  /** Net salary */
  netSalary: number;
  /** Net salary in words (Arabic) */
  netSalaryInWordsAr?: string;
  /** Net salary in words (English) */
  netSalaryInWordsEn?: string;

  // Status
  /** Payroll status */
  status: PayrollStatus;

  // Bank transfer details
  /** Bank name */
  bankName?: string | null;
  /** IBAN */
  iban?: string | null;

  // Notes
  /** Notes */
  notes?: string | null;

  // Approval
  /** Approved by */
  approvedBy?: EmployeeSummary | null;
  /** Approval timestamp */
  approvedAt?: Date | null;
}

/**
 * Payroll run request
 */
export interface PayrollRunRequest {
  /** Pay period (YYYY-MM) */
  payPeriod: string;
  /** Period start date */
  periodStart: Date | string;
  /** Period end date */
  periodEnd: Date | string;
  /** Payment date */
  paymentDate: Date | string;
  /** Payment method */
  paymentMethod: PaymentMethod;
  /** Employee IDs (if empty, process all active employees) */
  employeeIds?: string[];
  /** Include draft */
  includeDraft?: boolean;
}

/**
 * Payroll run response
 */
export interface PayrollRunResponse {
  /** Run ID */
  runId: string;
  /** Pay period */
  payPeriod: string;
  /** Total employees processed */
  totalEmployees: number;
  /** Successful */
  successful: number;
  /** Failed */
  failed: number;
  /** Total gross amount */
  totalGrossAmount: number;
  /** Total deductions */
  totalDeductions: number;
  /** Total net amount */
  totalNetAmount: number;
  /** Created at */
  createdAt: Date;
  /** Status */
  status: PayrollStatus;
  /** Errors (if any) */
  errors?: { employeeId: string; error: string }[];
}

/**
 * Create payslip DTO
 */
export interface CreatePayslipDto {
  /** Employee ID */
  employeeId: string;
  /** Pay period */
  payPeriod: string;
  /** Period start date */
  periodStart: Date | string;
  /** Period end date */
  periodEnd: Date | string;
  /** Payment date */
  paymentDate: Date | string;
  /** Payment method */
  paymentMethod: PaymentMethod;
  /** Earnings */
  earnings: SalaryComponentDetail[];
  /** Deductions */
  deductions: DeductionDetail[];
  /** Working days */
  workingDays: number;
  /** Days worked */
  daysWorked: number;
  /** Overtime hours */
  overtimeHours?: number;
  /** Notes */
  notes?: string;
}

/**
 * Update payslip DTO
 */
export interface UpdatePayslipDto extends Partial<CreatePayslipDto> {
  /** Status */
  status?: PayrollStatus;
}

/**
 * Payroll filters
 */
export interface PayrollFilters {
  /** Employee ID */
  employeeId?: string;
  /** Department ID */
  departmentId?: string;
  /** Pay period */
  payPeriod?: string;
  /** Date range */
  dateRange?: DateRange;
  /** Status */
  status?: PayrollStatus | PayrollStatus[];
  /** Payment method */
  paymentMethod?: PaymentMethod;
}

/**
 * Payroll list response
 */
export type PayrollListResponse = PaginatedResponse<PayslipResponse>;

/**
 * Salary adjustment
 */
export interface SalaryAdjustment {
  /** Employee */
  employee: EmployeeSummary;
  /** Adjustment type */
  type: 'INCREASE' | 'DECREASE' | 'BONUS' | 'DEDUCTION';
  /** Amount */
  amount: number;
  /** Reason */
  reason: string;
  /** Effective from */
  effectiveFrom: Date;
  /** Approved by */
  approvedBy?: EmployeeSummary | null;
  /** Created at */
  createdAt: Date;
}

/**
 * Loan
 */
export interface Loan {
  /** Loan ID */
  id: string;
  /** Employee */
  employee: EmployeeSummary;
  /** Loan amount */
  amount: number;
  /** Monthly installment */
  monthlyInstallment: number;
  /** Number of installments */
  numberOfInstallments: number;
  /** Remaining installments */
  remainingInstallments: number;
  /** Start date */
  startDate: Date;
  /** End date */
  endDate: Date;
  /** Status */
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  /** Approved by */
  approvedBy?: EmployeeSummary | null;
  /** Notes */
  notes?: string;
}

/**
 * Salary advance
 */
export interface SalaryAdvance {
  /** Advance ID */
  id: string;
  /** Employee */
  employee: EmployeeSummary;
  /** Advance amount */
  amount: number;
  /** Deduction per month */
  monthlyDeduction: number;
  /** Number of months */
  numberOfMonths: number;
  /** Remaining months */
  remainingMonths: number;
  /** Request date */
  requestDate: Date;
  /** Approval date */
  approvalDate?: Date | null;
  /** Status */
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'COMPLETED';
  /** Reason */
  reason: string;
  /** Approved by */
  approvedBy?: EmployeeSummary | null;
}

/**
 * Payroll summary
 */
export interface PayrollSummary {
  /** Pay period */
  payPeriod: string;
  /** Total employees */
  totalEmployees: number;
  /** Total gross amount */
  totalGrossAmount: number;
  /** Total deductions */
  totalDeductions: number;
  /** Total net amount */
  totalNetAmount: number;
  /** By department */
  byDepartment: {
    departmentId: string;
    departmentName: string;
    employeeCount: number;
    totalAmount: number;
  }[];
  /** By payment method */
  byPaymentMethod: {
    method: PaymentMethod;
    employeeCount: number;
    totalAmount: number;
  }[];
}

/**
 * GOSI calculation
 */
export interface GOSICalculation {
  /** Employee contribution rate (%) */
  employeeRate: number;
  /** Employer contribution rate (%) */
  employerRate: number;
  /** Contribution base (salary) */
  contributionBase: number;
  /** Employee contribution amount */
  employeeContribution: number;
  /** Employer contribution amount */
  employerContribution: number;
  /** Total contribution */
  totalContribution: number;
}

/**
 * Tax calculation
 */
export interface TaxCalculation {
  /** Taxable income */
  taxableIncome: number;
  /** Tax rate (%) */
  taxRate: number;
  /** Tax amount */
  taxAmount: number;
  /** Tax exemptions */
  exemptions: number;
  /** Net tax */
  netTax: number;
}

/**
 * Payroll statistics
 */
export interface PayrollStatistics {
  /** Total monthly payroll cost */
  totalMonthlyPayroll: number;
  /** Average salary */
  averageSalary: number;
  /** Highest salary */
  highestSalary: number;
  /** Lowest salary */
  lowestSalary: number;
  /** Total GOSI employee */
  totalGOSIEmployee: number;
  /** Total GOSI employer */
  totalGOSIEmployer: number;
  /** Payroll cost by department */
  byDepartment: {
    departmentId: string;
    departmentName: string;
    totalCost: number;
    averageSalary: number;
  }[];
}
