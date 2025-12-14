export interface Employee {
  id: string;
  employeeNumber: string;

  // Personal Info
  name: string;
  nameAr: string;
  email: string;
  phone: string;
  avatar?: string;

  // Job Info
  position: string;
  positionAr: string;
  department: string;
  departmentAr: string;
  managerId?: string;
  managerName?: string;
  managerNameAr?: string;

  // Employment Info
  joinDate: string;
  employmentStatus: 'active' | 'inactive' | 'on_leave';

  // Additional Info
  location?: string;
  locationAr?: string;
}

export interface EmployeeCardData extends Employee {
  // Additional fields for card view
  workEmail?: string;
  extension?: string;
}

export interface Department {
  id: string;
  name: string;
  nameAr: string;
  employeeCount: number;
}

export interface TeamDirectoryFilters {
  search?: string;
  department?: string;
  status?: string;
}

export interface TeamDirectoryResponse {
  success: boolean;
  data: Employee[];
  total: number;
  page: number;
  pageSize: number;
  departments: Department[];
}
