/**
 * Employee management types
 */

import { Address, BaseEntity, PaginatedResponse } from './common.types';

/**
 * Gender enum
 */
export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

/**
 * Marital status enum
 */
export enum MaritalStatus {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
  DIVORCED = 'DIVORCED',
  WIDOWED = 'WIDOWED',
}

/**
 * Contract type enum
 */
export enum ContractType {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT',
  PROBATION = 'PROBATION',
}

/**
 * Employment status enum
 */
export enum EmploymentStatus {
  ACTIVE = 'ACTIVE',
  ON_LEAVE = 'ON_LEAVE',
  TERMINATED = 'TERMINATED',
  RESIGNED = 'RESIGNED',
}

/**
 * Create employee DTO
 */
export interface CreateEmployeeDto {
  // Personal Information (Arabic - Required)
  /** First name in Arabic */
  firstNameAr: string;
  /** Last name in Arabic */
  lastNameAr: string;

  // Personal Information (English - Optional)
  /** First name in English */
  firstNameEn?: string;
  /** Last name in English */
  lastNameEn?: string;

  // Identification
  /** National ID (Saudi ID or Iqama) */
  nationalId: string;
  /** Date of birth */
  dateOfBirth: Date | string;
  /** Gender */
  gender: Gender;
  /** Nationality */
  nationality: string;
  /** Marital status */
  maritalStatus?: MaritalStatus;
  /** Religion */
  religion?: string;

  // Contact Information
  /** Work email */
  email: string;
  /** Personal email */
  personalEmail?: string;
  /** Phone number */
  phone: string;
  /** Emergency contact name */
  emergencyContactName: string;
  /** Emergency contact phone */
  emergencyContactPhone: string;
  /** Emergency contact relation */
  emergencyContactRelation: string;

  // Address
  /** Street address */
  street?: string;
  /** City */
  city?: string;
  /** Region */
  region?: string;
  /** Postal code */
  postalCode?: string;
  /** Country */
  country?: string;

  // Employment
  /** Department ID */
  departmentId: string;
  /** Position ID */
  positionId: string;
  /** Manager ID */
  managerId?: string;
  /** Hire date */
  hireDate: Date | string;
  /** Contract type */
  contractType: ContractType;
  /** Contract start date */
  contractStartDate?: Date | string;
  /** Contract end date */
  contractEndDate?: Date | string;
  /** Work location */
  workLocation?: string;

  // Compensation
  /** Basic salary (SAR) */
  basicSalary: number;
  /** Housing allowance (SAR) */
  housingAllowance?: number;
  /** Transportation allowance (SAR) */
  transportationAllowance?: number;
  /** Other allowances (SAR) */
  otherAllowances?: number;

  // Bank Information
  /** Bank name */
  bankName?: string;
  /** Bank account number */
  bankAccountNumber?: string;
  /** IBAN */
  iban?: string;

  // Additional
  /** Profile picture URL */
  profilePictureUrl?: string;
  /** Notes */
  notes?: string;
}

/**
 * Update employee DTO
 */
export interface UpdateEmployeeDto extends Partial<CreateEmployeeDto> {
  /** Employment status */
  employmentStatus?: EmploymentStatus;
  /** Termination date */
  terminationDate?: Date | string;
  /** Termination reason */
  terminationReason?: string;
}

/**
 * Employee response (full details)
 */
export interface EmployeeResponse extends BaseEntity {
  // Identification
  employeeNumber: string;

  // Personal Information
  firstNameAr: string;
  lastNameAr: string;
  firstNameEn?: string | null;
  lastNameEn?: string | null;
  fullNameAr: string;
  fullNameEn?: string | null;

  // Identification Documents
  nationalId: string;
  dateOfBirth: Date;
  gender: Gender;
  nationality: string;
  maritalStatus: MaritalStatus;
  religion?: string | null;

  // Contact Information
  email: string;
  personalEmail?: string | null;
  phone: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelation: string;

  // Address
  address: Address;

  // Employment
  department: DepartmentSummary;
  position: PositionSummary;
  manager?: EmployeeSummary | null;
  hireDate: Date;
  contractType: ContractType;
  contractStartDate: Date;
  contractEndDate?: Date | null;
  workLocation?: string | null;
  employmentStatus: EmploymentStatus;
  terminationDate?: Date | null;
  terminationReason?: string | null;

  // Compensation
  basicSalary: number;
  housingAllowance: number;
  transportationAllowance: number;
  otherAllowances: number;
  totalSalary: number;

  // Bank Information
  bankName?: string | null;
  bankAccountNumber?: string | null;
  iban?: string | null;

  // Computed
  age: number;
  yearsOfService: number;

  // Additional
  profilePictureUrl?: string | null;
  notes?: string | null;
}

/**
 * Employee summary (for lists and references)
 */
export interface EmployeeSummary {
  id: string;
  employeeNumber: string;
  fullNameAr: string;
  fullNameEn?: string | null;
  email: string;
  department: string;
  position: string;
  employmentStatus: EmploymentStatus;
  profilePictureUrl?: string | null;
}

/**
 * Department summary
 */
export interface DepartmentSummary {
  id: string;
  nameAr: string;
  nameEn?: string | null;
  code: string;
}

/**
 * Position summary
 */
export interface PositionSummary {
  id: string;
  titleAr: string;
  titleEn?: string | null;
  code: string;
  level: number;
}

/**
 * Employee filters for search
 */
export interface EmployeeFilters {
  /** Search query (name, email, employee number) */
  search?: string;
  /** Department ID */
  departmentId?: string;
  /** Position ID */
  positionId?: string;
  /** Manager ID */
  managerId?: string;
  /** Employment status */
  employmentStatus?: EmploymentStatus | EmploymentStatus[];
  /** Contract type */
  contractType?: ContractType | ContractType[];
  /** Gender */
  gender?: Gender;
  /** Nationality */
  nationality?: string;
  /** Hire date range */
  hireDateFrom?: Date | string;
  hireDateTo?: Date | string;
  /** Age range */
  ageFrom?: number;
  ageTo?: number;
}

/**
 * Employee list response
 */
export type EmployeeListResponse = PaginatedResponse<EmployeeSummary>;

/**
 * Create department DTO
 */
export interface CreateDepartmentDto {
  /** Department name in Arabic */
  nameAr: string;
  /** Department name in English */
  nameEn?: string;
  /** Department code */
  code: string;
  /** Description */
  description?: string;
  /** Manager ID */
  managerId?: string;
  /** Parent department ID */
  parentId?: string;
}

/**
 * Update department DTO
 */
export interface UpdateDepartmentDto extends Partial<CreateDepartmentDto> {
  /** Status */
  status?: 'ACTIVE' | 'INACTIVE';
}

/**
 * Department response
 */
export interface DepartmentResponse extends BaseEntity {
  nameAr: string;
  nameEn?: string | null;
  code: string;
  description?: string | null;
  status: 'ACTIVE' | 'INACTIVE';
  manager?: EmployeeSummary | null;
  parent?: DepartmentSummary | null;
  employeeCount: number;
}

/**
 * Create position DTO
 */
export interface CreatePositionDto {
  /** Position title in Arabic */
  titleAr: string;
  /** Position title in English */
  titleEn?: string;
  /** Position code */
  code: string;
  /** Description */
  description?: string;
  /** Department ID */
  departmentId: string;
  /** Position level (1-7) */
  level: number;
  /** Minimum salary (SAR) */
  minSalary?: number;
  /** Maximum salary (SAR) */
  maxSalary?: number;
  /** Required skills */
  requiredSkills?: string[];
  /** Responsibilities */
  responsibilities?: string[];
}

/**
 * Update position DTO
 */
export interface UpdatePositionDto extends Partial<CreatePositionDto> {
  /** Status */
  status?: 'ACTIVE' | 'INACTIVE';
}

/**
 * Position response
 */
export interface PositionResponse extends BaseEntity {
  titleAr: string;
  titleEn?: string | null;
  code: string;
  description?: string | null;
  department: DepartmentSummary;
  level: number;
  levelName: string;
  minSalary?: number | null;
  maxSalary?: number | null;
  status: 'ACTIVE' | 'INACTIVE';
  employeeCount: number;
  requiredSkills?: string[] | null;
  responsibilities?: string[] | null;
}

/**
 * Employee statistics
 */
export interface EmployeeStatistics {
  /** Total employees */
  total: number;
  /** Active employees */
  active: number;
  /** On leave */
  onLeave: number;
  /** Terminated */
  terminated: number;
  /** Resigned */
  resigned: number;
  /** By department */
  byDepartment: { departmentId: string; departmentName: string; count: number }[];
  /** By gender */
  byGender: { gender: Gender; count: number }[];
  /** By contract type */
  byContractType: { contractType: ContractType; count: number }[];
}
