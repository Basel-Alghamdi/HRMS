export type AttendanceStatus = 'present' | 'absent' | 'late' | 'leave' | 'weekend' | 'holiday';

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  date: string; // YYYY-MM-DD
  dayName: string; // e.g., "الأحد"
  checkInTime: string | null; // HH:mm format
  checkOutTime: string | null; // HH:mm format
  totalHours: number | null; // in decimal (e.g., 8.5)
  status: AttendanceStatus;
  notes?: string;
  isLate?: boolean;
}

export interface TodayAttendance {
  id: string | null;
  date: string;
  dayName: string;
  checkInTime: string | null;
  checkOutTime: string | null;
  totalHours: number | null;
  status: AttendanceStatus | null;
  shiftStartTime: string; // e.g., "09:00"
  shiftEndTime: string; // e.g., "17:00"
  canCheckIn: boolean;
  canCheckOut: boolean;
}

export interface AttendanceSummary {
  month: string; // YYYY-MM
  totalDays: number;
  presentDays: number;
  absentDays: number;
  lateDays: number;
  leaveDays: number;
  workingDays: number;
  weekendDays: number;
  totalHours: number;
}

export interface MonthOption {
  value: string; // YYYY-MM
  label: string; // "ديسمبر 2024"
}

export interface AttendanceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  record: AttendanceRecord | null;
}
