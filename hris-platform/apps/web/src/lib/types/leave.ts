export type LeaveType =
  | 'annual'
  | 'sick'
  | 'unpaid'
  | 'maternity'
  | 'paternity'
  | 'hajj'
  | 'emergency'
  | 'marriage'
  | 'bereavement';

export type LeaveStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';

export interface LeaveBalance {
  type: LeaveType;
  label: string;
  icon: string; // emoji
  total: number;
  used: number;
  remaining: number;
  color: string; // for progress bar
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  type: LeaveType;
  typeLabel: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  days: number;
  reason: string;
  status: LeaveStatus;
  requestedAt: string; // ISO date
  approvedBy?: string;
  approvedAt?: string;
  rejectedBy?: string;
  rejectedAt?: string;
  rejectionReason?: string;
  cancelledAt?: string;
  attachmentUrl?: string;
}

export interface CreateLeaveRequest {
  type: LeaveType;
  startDate: string;
  endDate: string;
  reason: string;
  attachment?: File;
}

export interface LeaveTimeline {
  id: string;
  action: string;
  timestamp: string;
  user?: string;
  note?: string;
}

export interface LeaveTypeOption {
  value: LeaveType;
  label: string;
  icon: string;
  requiresAttachment?: boolean;
  maxDays?: number;
  gender?: 'male' | 'female';
}
