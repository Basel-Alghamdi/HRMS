import type {
  AttendanceRecord,
  TodayAttendance,
  AttendanceSummary,
  AttendanceStatus,
} from '@/lib/types/attendance';
import { format, addDays, startOfMonth, endOfMonth, getDay } from 'date-fns';

// Arabic day names
const arabicDayNames = [
  'الأحد',
  'الاثنين',
  'الثلاثاء',
  'الأربعاء',
  'الخميس',
  'الجمعة',
  'السبت',
];

// Helper: Check if day is weekend (Friday=5, Saturday=6)
function isWeekend(date: Date): boolean {
  const day = getDay(date);
  return day === 5 || day === 6; // Friday or Saturday
}

// Helper: Generate random time
function randomTime(minHour: number, maxHour: number, minMinute = 0, maxMinute = 59): string {
  const hour = Math.floor(Math.random() * (maxHour - minHour + 1)) + minHour;
  const minute = Math.floor(Math.random() * (maxMinute - minMinute + 1)) + minMinute;
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
}

// Helper: Calculate hours between two times
function calculateHours(checkIn: string, checkOut: string): number {
  const [inHour, inMinute] = checkIn.split(':').map(Number);
  const [outHour, outMinute] = checkOut.split(':').map(Number);

  const inTotalMinutes = inHour * 60 + inMinute;
  const outTotalMinutes = outHour * 60 + outMinute;

  const diffMinutes = outTotalMinutes - inTotalMinutes;
  return Math.round((diffMinutes / 60) * 100) / 100; // Round to 2 decimals
}

// Helper: Check if late (after 9:15)
function isLate(checkInTime: string): boolean {
  const [hour, minute] = checkInTime.split(':').map(Number);
  return hour > 9 || (hour === 9 && minute > 15);
}

// Generate attendance records for a month
export function generateMonthAttendance(year: number, month: number): AttendanceRecord[] {
  const records: AttendanceRecord[] = [];
  const firstDay = startOfMonth(new Date(year, month - 1, 1));
  const lastDay = endOfMonth(firstDay);

  let currentDate = firstDay;
  let id = 1;

  while (currentDate <= lastDay) {
    const dateStr = format(currentDate, 'yyyy-MM-dd');
    const dayOfWeek = getDay(currentDate);
    const dayName = arabicDayNames[dayOfWeek];

    let record: AttendanceRecord;

    if (isWeekend(currentDate)) {
      // Weekend
      record = {
        id: id.toString(),
        employeeId: '1',
        date: dateStr,
        dayName,
        checkInTime: null,
        checkOutTime: null,
        totalHours: null,
        status: 'weekend',
        notes: 'عطلة نهاية الأسبوع',
      };
    } else {
      // Working day - randomize attendance
      const random = Math.random();

      if (random < 0.05) {
        // 5% chance of absence
        record = {
          id: id.toString(),
          employeeId: '1',
          date: dateStr,
          dayName,
          checkInTime: null,
          checkOutTime: null,
          totalHours: null,
          status: 'absent',
          notes: 'غياب',
        };
      } else if (random < 0.15) {
        // 10% chance of leave
        record = {
          id: id.toString(),
          employeeId: '1',
          date: dateStr,
          dayName,
          checkInTime: null,
          checkOutTime: null,
          totalHours: null,
          status: 'leave',
          notes: 'إجازة',
        };
      } else {
        // Present - generate realistic times
        const checkIn = randomTime(8, 9, 0, 45); // 8:00 - 9:45
        const checkOut = randomTime(17, 18, 0, 30); // 17:00 - 18:30
        const hours = calculateHours(checkIn, checkOut);
        const late = isLate(checkIn);

        record = {
          id: id.toString(),
          employeeId: '1',
          date: dateStr,
          dayName,
          checkInTime: checkIn,
          checkOutTime: checkOut,
          totalHours: hours,
          status: late ? 'late' : 'present',
          isLate: late,
          notes: late ? 'تأخر عن موعد الحضور' : undefined,
        };
      }
    }

    records.push(record);
    currentDate = addDays(currentDate, 1);
    id++;
  }

  return records;
}

// Generate summary from records
export function calculateSummary(records: AttendanceRecord[], month: string): AttendanceSummary {
  const presentDays = records.filter(r => r.status === 'present').length;
  const absentDays = records.filter(r => r.status === 'absent').length;
  const lateDays = records.filter(r => r.status === 'late').length;
  const leaveDays = records.filter(r => r.status === 'leave').length;
  const weekendDays = records.filter(r => r.status === 'weekend').length;
  const workingDays = records.length - weekendDays;

  const totalHours = records
    .filter(r => r.totalHours !== null)
    .reduce((sum, r) => sum + (r.totalHours || 0), 0);

  return {
    month,
    totalDays: records.length,
    presentDays: presentDays + lateDays, // Late is still present
    absentDays,
    lateDays,
    leaveDays,
    workingDays,
    weekendDays,
    totalHours: Math.round(totalHours * 100) / 100,
  };
}

// Mock today's attendance
export function getMockTodayAttendance(): TodayAttendance {
  const now = new Date();
  const dateStr = format(now, 'yyyy-MM-dd');
  const dayOfWeek = getDay(now);
  const dayName = arabicDayNames[dayOfWeek];
  const currentHour = now.getHours();

  // Check if today is weekend
  if (isWeekend(now)) {
    return {
      id: null,
      date: dateStr,
      dayName,
      checkInTime: null,
      checkOutTime: null,
      totalHours: null,
      status: 'weekend',
      shiftStartTime: '09:00',
      shiftEndTime: '17:00',
      canCheckIn: false,
      canCheckOut: false,
    };
  }

  // Simulate different states based on current time
  // For demo purposes, let's allow check-in if before 12:00, check-out if after check-in

  // State 1: Not checked in (before 12:00)
  if (currentHour < 12) {
    return {
      id: null,
      date: dateStr,
      dayName,
      checkInTime: null,
      checkOutTime: null,
      totalHours: null,
      status: null,
      shiftStartTime: '09:00',
      shiftEndTime: '17:00',
      canCheckIn: true,
      canCheckOut: false,
    };
  }

  // State 2: Checked in (12:00 - 17:00)
  if (currentHour < 17) {
    return {
      id: 'today-1',
      date: dateStr,
      dayName,
      checkInTime: '08:55',
      checkOutTime: null,
      totalHours: null,
      status: 'present',
      shiftStartTime: '09:00',
      shiftEndTime: '17:00',
      canCheckIn: false,
      canCheckOut: true,
    };
  }

  // State 3: Checked out (after 17:00)
  return {
    id: 'today-1',
    date: dateStr,
    dayName,
    checkInTime: '08:55',
    checkOutTime: '17:30',
    totalHours: 8.58,
    status: 'present',
    shiftStartTime: '09:00',
    shiftEndTime: '17:00',
    canCheckIn: false,
    canCheckOut: false,
  };
}

// Format hours for display
export function formatHours(hours: number | null): string {
  if (hours === null) return '-';

  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);

  if (m === 0) {
    return `${h} ساعة`;
  }

  return `${h} ساعة و ${m} دقيقة`;
}

// Format time for display (convert 24h to 12h with AM/PM in Arabic)
export function formatTime(time: string | null): string {
  if (!time) return '-';

  const [hourStr, minute] = time.split(':');
  const hour = parseInt(hourStr, 10);

  if (hour === 0) {
    return `12:${minute} ص`; // Midnight
  } else if (hour < 12) {
    return `${hour}:${minute} ص`; // AM
  } else if (hour === 12) {
    return `12:${minute} م`; // Noon
  } else {
    return `${hour - 12}:${minute} م`; // PM
  }
}

// Get status badge color
export function getStatusColor(status: AttendanceStatus): string {
  switch (status) {
    case 'present':
      return 'bg-success-light text-success'; // Green
    case 'absent':
      return 'bg-error-light text-error'; // Red
    case 'late':
      return 'bg-warning-light text-warning'; // Yellow
    case 'leave':
      return 'bg-info-light text-info'; // Blue
    case 'weekend':
    case 'holiday':
      return 'bg-gray-100 text-gray-600'; // Gray
    default:
      return 'bg-gray-100 text-gray-600';
  }
}

// Get status label in Arabic
export function getStatusLabel(status: AttendanceStatus): string {
  switch (status) {
    case 'present':
      return 'حاضر';
    case 'absent':
      return 'غائب';
    case 'late':
      return 'متأخر';
    case 'leave':
      return 'إجازة';
    case 'weekend':
      return 'عطلة';
    case 'holiday':
      return 'عطلة رسمية';
    default:
      return '-';
  }
}
