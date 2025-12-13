import type { Employee, Document } from '@/lib/types/profile';

export const mockEmployee: Employee = {
  id: '1',
  employeeNumber: 'EMP-2024-001',

  // Personal Information
  firstName: 'محمد',
  lastName: 'أحمد العمري',
  fullName: 'محمد أحمد العمري',
  nationalId: '1234567890',
  dateOfBirth: '1990-03-15',
  gender: 'male',
  nationality: 'سعودي',
  maritalStatus: 'married',

  // Employment Information
  jobTitle: 'مطور برمجيات أول',
  department: 'قسم تقنية المعلومات',
  manager: {
    id: '2',
    name: 'خالد بن سعد',
    avatar: undefined,
  },
  hireDate: '2020-01-10',
  contractType: 'permanent',
  employmentStatus: 'active',

  // Contact Information
  email: 'admin@hris.sa',
  phone: '+966501234567',
  address: 'الرياض، حي النخيل، شارع الملك فهد',
  emergencyContact: {
    name: 'أحمد محمد العمري',
    phone: '+966509876543',
    relationship: 'أب',
  },

  avatar: undefined,
};

export const mockDocuments: Document[] = [
  {
    id: '1',
    name: 'صورة الهوية الوطنية',
    type: 'national_id',
    uploadedAt: '2024-01-15',
    url: '/documents/national-id.pdf',
    size: '2.3 MB',
  },
  {
    id: '2',
    name: 'العقد الوظيفي',
    type: 'contract',
    uploadedAt: '2024-01-10',
    url: '/documents/contract.pdf',
    size: '1.5 MB',
  },
  {
    id: '3',
    name: 'جواز السفر',
    type: 'passport',
    uploadedAt: '2023-06-20',
    expiryDate: '2025-02-15',
    url: '/documents/passport.pdf',
    size: '3.1 MB',
  },
  {
    id: '4',
    name: 'الشهادة الجامعية',
    type: 'degree',
    uploadedAt: '2024-01-05',
    url: '/documents/degree.pdf',
    size: '4.2 MB',
  },
];

// Calculate days until expiry
export function getDaysUntilExpiry(expiryDate: string): number {
  const today = new Date();
  const expiry = new Date(expiryDate);
  const diffTime = expiry.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Calculate service duration
export function calculateServiceDuration(hireDate: string): string {
  const hire = new Date(hireDate);
  const today = new Date();

  const years = today.getFullYear() - hire.getFullYear();
  const months = today.getMonth() - hire.getMonth();

  const totalMonths = years * 12 + months;
  const displayYears = Math.floor(totalMonths / 12);
  const displayMonths = totalMonths % 12;

  if (displayYears > 0 && displayMonths > 0) {
    return `${displayYears} سنة و ${displayMonths} شهر`;
  } else if (displayYears > 0) {
    return `${displayYears} سنة`;
  } else {
    return `${displayMonths} شهر`;
  }
}
