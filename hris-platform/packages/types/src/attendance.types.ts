/**
 * Attendance and leave management types
 */

import { BaseEntity, DateRange, PaginatedResponse } from './common.types';
import { EmployeeSummary } from './employee.types';

/**
 * Attendance status enum
 */
export enum AttendanceStatus {
  /** Employee is present */
  PRESENT = 'PRESENT',
  /** Employee is absent */
  ABSENT = 'ABSENT',
  /** Employee arrived late */
  LATE = 'LATE',
  /** Employee left early */
  EARLY_LEAVE = 'EARLY_LEAVE',
  /** Employee is on approved leave */
  ON_LEAVE = 'ON_LEAVE',
  /** Weekend */
  WEEKEND = 'WEEKEND',
  /** Public holiday */
  HOLIDAY = 'HOLIDAY',
}

/**
 * Leave type enum
 */
export enum LeaveType {
  /** Annual/vacation leave */
  ANNUAL = 'ANNUAL',
  /** Sick leave */
  SICK = 'SICK',
  /** Unpaid leave */
  UNPAID = 'UNPAID',
  /** Maternity leave */
  MATERNITY = 'MATERNITY',
  /** Paternity leave */
  PATERNITY = 'PATERNITY',
  /** Hajj leave */
  HAJJ = 'HAJJ',
  /** Emergency leave */
  EMERGENCY = 'EMERGENCY',
  /** Bereavement leave */
  BEREAVEMENT = 'BEREAVEMENT',
  /** Study leave */
  STUDY = 'STUDY',
}

/**
 * Leave status enum
 */
export enum LeaveStatus {
  /** Draft (not submitted) */
  DRAFT = 'DRAFT',
  /** Pending approval */
  PENDING = 'PENDING',
  /** Approved */
  APPROVED = 'APPROVED',
  /** Rejected */
  REJECTED = 'REJECTED',
  /** Cancelled */
  CANCELLED = 'CANCELLED',
}

/**
 * Check-in request
 */
export interface CheckInRequest {
  /** Employee ID */
  employeeId: string;
  /** Check-in timestamp */
  checkInTime?: Date | string;
  /** Check-in location (lat,lng) */
  location?: string;
  /** Check-in notes */
  notes?: string;
}

/**
 * Check-out request
 */
export interface CheckOutRequest {
  /** Employee ID */
  employeeId: string;
  /** Check-out timestamp */
  checkOutTime?: Date | string;
  /** Check-out location (lat,lng) */
  location?: string;
  /** Check-out notes */
  notes?: string;
}

/**
 * Attendance record
 */
export interface AttendanceRecord extends BaseEntity {
  /** Employee */
  employee: EmployeeSummary;
  /** Date of attendance */
  date: Date;
  /** Attendance status */
  status: AttendanceStatus;
  /** Check-in time */
  checkInTime?: Date | null;
  /** Check-out time */
  checkOutTime?: Date | null;
  /** Total work hours */
  workHours?: number | null;
  /** Is late */
  isLate: boolean;
  /** Late minutes */
  lateMinutes?: number | null;
  /** Left early */
  leftEarly: boolean;
  /** Early leave minutes */
  earlyLeaveMinutes?: number | null;
  /** Overtime hours */
  overtimeHours?: number | null;
  /** Check-in location */
  checkInLocation?: string | null;
  /** Check-out location */
  checkOutLocation?: string | null;
  /** Notes */
  notes?: string | null;
  /** Approved by */
  approvedBy?: string | null;
  /** Approval timestamp */
  approvedAt?: Date | null;
}

/**
 * Attendance summary for a period
 */
export interface AttendanceSummary {
  /** Employee */
  employee: EmployeeSummary;
  /** Period start date */
  periodStart: Date;
  /** Period end date */
  periodEnd: Date;
  /** Total working days in period */
  totalWorkingDays: number;
  /** Present days */
  presentDays: number;
  /** Absent days */
  absentDays: number;
  /** Late days */
  lateDays: number;
  /** Early leave days */
  earlyLeaveDays: number;
  /** Leave days */
  leaveDays: number;
  /** Total work hours */
  totalWorkHours: number;
  /** Total overtime hours */
  totalOvertimeHours: number;
  /** Attendance percentage */
  attendancePercentage: number;
}

/**
 * Leave request DTO
 */
export interface CreateLeaveRequestDto {
  /** Employee ID */
  employeeId: string;
  /** Leave type */
  leaveType: LeaveType;
  /** Start date */
  startDate: Date | string;
  /** End date */
  endDate: Date | string;
  /** Number of days */
  numberOfDays?: number;
  /** Reason for leave */
  reason: string;
  /** Supporting documents */
  attachments?: string[];
  /** Emergency contact during leave */
  emergencyContact?: string;
}

/**
 * Update leave request DTO
 */
export interface UpdateLeaveRequestDto extends Partial<CreateLeaveRequestDto> {
  /** Leave status */
  status?: LeaveStatus;
  /** Rejection reason */
  rejectionReason?: string;
}

/**
 * Leave request response
 */
export interface LeaveRequestResponse extends BaseEntity {
  /** Employee */
  employee: EmployeeSummary;
  /** Leave type */
  leaveType: LeaveType;
  /** Start date */
  startDate: Date;
  /** End date */
  endDate: Date;
  /** Number of days */
  numberOfDays: number;
  /** Reason */
  reason: string;
  /** Leave status */
  status: LeaveStatus;
  /** Attachments */
  attachments?: string[];
  /** Emergency contact */
  emergencyContact?: string | null;
  /** Approved/Rejected by */
  reviewedBy?: EmployeeSummary | null;
  /** Review timestamp */
  reviewedAt?: Date | null;
  /** Rejection reason */
  rejectionReason?: string | null;
}

/**
 * Leave balance
 */
export interface LeaveBalance {
  /** Employee */
  employee: EmployeeSummary;
  /** Year */
  year: number;
  /** Leave type */
  leaveType: LeaveType;
  /** Total entitlement */
  totalEntitlement: number;
  /** Used days */
  usedDays: number;
  /** Pending days (awaiting approval) */
  pendingDays: number;
  /** Available days */
  availableDays: number;
  /** Carried over from previous year */
  carriedOver: number;
}

/**
 * Leave filters
 */
export interface LeaveFilters {
  /** Employee ID */
  employeeId?: string;
  /** Leave type */
  leaveType?: LeaveType | LeaveType[];
  /** Leave status */
  status?: LeaveStatus | LeaveStatus[];
  /** Date range */
  dateRange?: DateRange;
  /** Department ID */
  departmentId?: string;
}

/**
 * Attendance filters
 */
export interface AttendanceFilters {
  /** Employee ID */
  employeeId?: string;
  /** Attendance status */
  status?: AttendanceStatus | AttendanceStatus[];
  /** Date range */
  dateRange?: DateRange;
  /** Department ID */
  departmentId?: string;
  /** Include late only */
  lateOnly?: boolean;
  /** Include early leave only */
  earlyLeaveOnly?: boolean;
}

/**
 * Approve leave request
 */
export interface ApproveLeaveRequest {
  /** Approver notes */
  notes?: string;
}

/**
 * Reject leave request
 */
export interface RejectLeaveRequest {
  /** Rejection reason */
  reason: string;
}

/**
 * Leave list response
 */
export type LeaveListResponse = PaginatedResponse<LeaveRequestResponse>;

/**
 * Attendance list response
 */
export type AttendanceListResponse = PaginatedResponse<AttendanceRecord>;

/**
 * Working hours configuration
 */
export interface WorkingHoursConfig {
  /** Start time (HH:mm format) */
  startTime: string;
  /** End time (HH:mm format) */
  endTime: string;
  /** Grace period for late (minutes) */
  lateGracePeriod: number;
  /** Grace period for early leave (minutes) */
  earlyLeaveGracePeriod: number;
  /** Minimum work hours */
  minimumWorkHours: number;
  /** Overtime threshold (hours) */
  overtimeThreshold: number;
}

/**
 * Holiday
 */
export interface Holiday {
  /** Holiday ID */
  id: string;
  /** Holiday name (Arabic) */
  nameAr: string;
  /** Holiday name (English) */
  nameEn?: string | null;
  /** Holiday date */
  date: Date;
  /** Is recurring (yearly) */
  isRecurring: boolean;
  /** Description */
  description?: string | null;
}

/**
 * Attendance statistics
 */
export interface AttendanceStatistics {
  /** Total employees */
  totalEmployees: number;
  /** Present today */
  presentToday: number;
  /** Absent today */
  absentToday: number;
  /** Late today */
  lateToday: number;
  /** On leave today */
  onLeaveToday: number;
  /** Average attendance rate (%) */
  averageAttendanceRate: number;
  /** Average late rate (%) */
  averageLateRate: number;
}
