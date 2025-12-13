export interface Employee {
  id: string;
  employeeNumber: string;

  // Personal Information
  firstName: string;
  lastName: string;
  fullName: string;
  nationalId: string;
  dateOfBirth: string;
  gender: 'male' | 'female';
  nationality: string;
  maritalStatus: 'single' | 'married' | 'divorced' | 'widowed';

  // Employment Information
  jobTitle: string;
  department: string;
  manager: {
    id: string;
    name: string;
    avatar?: string;
  };
  hireDate: string;
  contractType: 'permanent' | 'contract' | 'temporary';
  employmentStatus: 'active' | 'inactive' | 'on_leave' | 'terminated';

  // Contact Information
  email: string;
  phone: string;
  address: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };

  // Profile
  avatar?: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  uploadedAt: string;
  expiryDate?: string;
  url: string;
  size?: string;
}

export interface UpdateProfileData {
  phone?: string;
  address?: string;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  avatar?: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
