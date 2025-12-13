import { Calendar, Stethoscope, AlertCircle, Plane, Baby, Heart } from 'lucide-react';

// Mock leave balances based on Saudi labor law
export const mockLeaveBalances = [
  {
    id: '1',
    type: 'الإجازة السنوية',
    icon: Calendar,
    color: 'blue',
    used: 8,
    total: 21, // Saudi labor law: 21 days after 1 year
  },
  {
    id: '2',
    type: 'الإجازة المرضية',
    icon: Stethoscope,
    color: 'red',
    used: 5,
    total: 30, // Saudi labor law: 30 days with full pay
  },
  {
    id: '3',
    type: 'إجازة طارئة',
    icon: AlertCircle,
    color: 'orange',
    used: 2,
    total: 5,
  },
  {
    id: '4',
    type: 'إجازة الحج',
    icon: Plane,
    color: 'green',
    used: 0,
    total: 10, // Saudi labor law: once in employment
  },
  {
    id: '5',
    type: 'إجازة الأمومة',
    icon: Baby,
    color: 'pink',
    used: 0,
    total: 70, // Saudi labor law: 10 weeks
  },
  {
    id: '6',
    type: 'إجازة الزواج',
    icon: Heart,
    color: 'purple',
    used: 0,
    total: 5, // Typically granted
  },
];

// Mock payslips
export const mockPayslips = [
  {
    id: '1',
    month: 'ديسمبر',
    year: 2024,
    netSalary: 15000,
    status: 'paid' as const,
  },
  {
    id: '2',
    month: 'نوفمبر',
    year: 2024,
    netSalary: 15000,
    status: 'paid' as const,
  },
  {
    id: '3',
    month: 'أكتوبر',
    year: 2024,
    netSalary: 15500,
    status: 'paid' as const,
  },
];

// Mock leave requests
export const mockLeaveRequests = [
  {
    id: '1',
    type: 'إجازة سنوية',
    startDate: new Date(2025, 0, 15),
    endDate: new Date(2025, 0, 19),
    days: 5,
    status: 'pending' as const,
  },
  {
    id: '2',
    type: 'إجازة مرضية',
    startDate: new Date(2025, 0, 8),
    endDate: new Date(2025, 0, 10),
    days: 3,
    status: 'approved' as const,
  },
];

// Mock attendance data
export const mockAttendanceData = {
  status: 'not_checked_in' as 'not_checked_in' | 'checked_in' | 'checked_out',
  checkInTime: undefined as Date | undefined,
  checkOutTime: undefined as Date | undefined,
};
