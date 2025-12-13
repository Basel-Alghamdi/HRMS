import type {
  LeaveBalance,
  LeaveRequest,
  LeaveType,
  LeaveStatus,
  LeaveTypeOption,
} from '@/lib/types/leave';
import { addDays, parseISO } from 'date-fns';

// Leave type options with Arabic labels
export const leaveTypeOptions: LeaveTypeOption[] = [
  { value: 'annual', label: 'إجازة سنوية', icon: '🏖️' },
  { value: 'sick', label: 'إجازة مرضية', icon: '🏥', requiresAttachment: true },
  { value: 'unpaid', label: 'إجازة بدون راتب', icon: '💼' },
  { value: 'maternity', label: 'إجازة أمومة', icon: '👶', gender: 'female', maxDays: 70 },
  { value: 'paternity', label: 'إجازة أبوة', icon: '👨‍👶', gender: 'male', maxDays: 3 },
  { value: 'hajj', label: 'إجازة حج', icon: '🕋', maxDays: 15 },
  { value: 'emergency', label: 'إجازة طارئة', icon: '⚡', maxDays: 5 },
  { value: 'marriage', label: 'إجازة زواج', icon: '💒', maxDays: 5 },
  { value: 'bereavement', label: 'إجازة وفاة', icon: '🖤', maxDays: 3 },
];

// Get leave type label
export function getLeaveTypeLabel(type: LeaveType): string {
  return leaveTypeOptions.find((opt) => opt.value === type)?.label || type;
}

// Get leave type icon
export function getLeaveTypeIcon(type: LeaveType): string {
  return leaveTypeOptions.find((opt) => opt.value === type)?.icon || '📄';
}

// Get status color
export function getLeaveStatusColor(status: LeaveStatus): string {
  switch (status) {
    case 'pending':
      return 'bg-warning-light text-warning'; // Yellow
    case 'approved':
      return 'bg-success-light text-success'; // Green
    case 'rejected':
      return 'bg-error-light text-error'; // Red
    case 'cancelled':
      return 'bg-gray-100 text-gray-600'; // Gray
    default:
      return 'bg-gray-100 text-gray-600';
  }
}

// Get status label
export function getLeaveStatusLabel(status: LeaveStatus): string {
  switch (status) {
    case 'pending':
      return 'قيد الانتظار';
    case 'approved':
      return 'موافق عليها';
    case 'rejected':
      return 'مرفوضة';
    case 'cancelled':
      return 'ملغاة';
    default:
      return status;
  }
}

// Calculate working days (excluding weekends)
export function calculateWorkingDays(startDate: string, endDate: string): number {
  const start = parseISO(startDate);
  const end = parseISO(endDate);

  let workingDays = 0;
  let currentDate = start;

  while (currentDate <= end) {
    const dayOfWeek = currentDate.getDay();
    // Skip Friday (5) and Saturday (6)
    if (dayOfWeek !== 5 && dayOfWeek !== 6) {
      workingDays++;
    }
    currentDate = addDays(currentDate, 1);
  }

  return workingDays;
}

// Mock leave balances
export const mockLeaveBalances: LeaveBalance[] = [
  {
    type: 'annual',
    label: 'إجازة سنوية',
    icon: '🏖️',
    total: 21,
    used: 9,
    remaining: 12,
    color: '#22C55E', // Primary green
  },
  {
    type: 'sick',
    label: 'إجازة مرضية',
    icon: '🏥',
    total: 30,
    used: 2,
    remaining: 28,
    color: '#EF4444', // Red
  },
  {
    type: 'emergency',
    label: 'إجازة طارئة',
    icon: '⚡',
    total: 5,
    used: 1,
    remaining: 4,
    color: '#F59E0B', // Yellow
  },
];

// Mock leave requests
export const mockLeaveRequests: LeaveRequest[] = [
  {
    id: '1',
    employeeId: '1',
    employeeName: 'محمد أحمد العمري',
    type: 'annual',
    typeLabel: 'إجازة سنوية',
    startDate: '2024-12-20',
    endDate: '2024-12-25',
    days: 4, // excluding weekends
    reason: 'إجازة عائلية للسفر',
    status: 'pending',
    requestedAt: '2024-12-10T08:30:00Z',
  },
  {
    id: '2',
    employeeId: '1',
    employeeName: 'محمد أحمد العمري',
    type: 'sick',
    typeLabel: 'إجازة مرضية',
    startDate: '2024-11-15',
    endDate: '2024-11-16',
    days: 2,
    reason: 'إنفلونزا',
    status: 'approved',
    requestedAt: '2024-11-14T09:00:00Z',
    approvedBy: 'خالد بن سعد',
    approvedAt: '2024-11-14T10:30:00Z',
  },
  {
    id: '3',
    employeeId: '1',
    employeeName: 'محمد أحمد العمري',
    type: 'annual',
    typeLabel: 'إجازة سنوية',
    startDate: '2024-10-01',
    endDate: '2024-10-07',
    days: 5,
    reason: 'إجازة سنوية',
    status: 'approved',
    requestedAt: '2024-09-20T11:00:00Z',
    approvedBy: 'خالد بن سعد',
    approvedAt: '2024-09-21T09:15:00Z',
  },
  {
    id: '4',
    employeeId: '1',
    employeeName: 'محمد أحمد العمري',
    type: 'emergency',
    typeLabel: 'إجازة طارئة',
    startDate: '2024-09-10',
    endDate: '2024-09-10',
    days: 1,
    reason: 'ظرف طارئ',
    status: 'approved',
    requestedAt: '2024-09-09T14:00:00Z',
    approvedBy: 'خالد بن سعد',
    approvedAt: '2024-09-09T15:00:00Z',
  },
  {
    id: '5',
    employeeId: '1',
    employeeName: 'محمد أحمد العمري',
    type: 'annual',
    typeLabel: 'إجازة سنوية',
    startDate: '2024-08-05',
    endDate: '2024-08-06',
    days: 2,
    reason: 'إجازة شخصية',
    status: 'rejected',
    requestedAt: '2024-08-01T10:00:00Z',
    rejectedBy: 'خالد بن سعد',
    rejectedAt: '2024-08-02T09:00:00Z',
    rejectionReason: 'تعارض مع جدول العمل',
  },
  {
    id: '6',
    employeeId: '1',
    employeeName: 'محمد أحمد العمري',
    type: 'annual',
    typeLabel: 'إجازة سنوية',
    startDate: '2024-07-15',
    endDate: '2024-07-17',
    days: 3,
    reason: 'إجازة',
    status: 'cancelled',
    requestedAt: '2024-07-10T08:00:00Z',
    cancelledAt: '2024-07-12T10:00:00Z',
  },
];

// Mock create leave request
export const mockCreateLeaveRequest = async (
  data: {
    type: LeaveType;
    startDate: string;
    endDate: string;
    reason: string;
  }
): Promise<LeaveRequest> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const days = calculateWorkingDays(data.startDate, data.endDate);

  const newRequest: LeaveRequest = {
    id: Math.random().toString(36).substr(2, 9),
    employeeId: '1',
    employeeName: 'محمد أحمد العمري',
    type: data.type,
    typeLabel: getLeaveTypeLabel(data.type),
    startDate: data.startDate,
    endDate: data.endDate,
    days,
    reason: data.reason,
    status: 'pending',
    requestedAt: new Date().toISOString(),
  };

  return newRequest;
};

// Mock cancel leave request
export const mockCancelLeaveRequest = async (_id: string): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  // In real app, this would update the request status to cancelled
};

// Validate leave request
export function validateLeaveRequest(
  _type: LeaveType,
  startDate: string,
  endDate: string,
  balance: LeaveBalance | undefined
): { valid: boolean; error?: string } {
  // Check if balance exists
  if (!balance) {
    return { valid: false, error: 'نوع الإجازة غير صحيح' };
  }

  // Check if start date is in the past
  const start = parseISO(startDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (start < today) {
    return { valid: false, error: 'لا يمكن طلب إجازة بتاريخ سابق' };
  }

  // Check if end date is before start date
  const end = parseISO(endDate);
  if (end < start) {
    return { valid: false, error: 'تاريخ النهاية يجب أن يكون بعد تاريخ البداية' };
  }

  // Calculate days
  const days = calculateWorkingDays(startDate, endDate);

  // Check if sufficient balance
  if (days > balance.remaining) {
    return { valid: false, error: 'رصيد الإجازات غير كافي' };
  }

  return { valid: true };
}
