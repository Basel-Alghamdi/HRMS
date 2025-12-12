# @hris/types

Shared TypeScript types, interfaces, and enums for the HRIS Platform.

## Overview

This package provides comprehensive type definitions for all modules in the HRIS platform, ensuring type safety and consistency across frontend and backend applications.

## Installation

```bash
# Already available as workspace dependency
import { EmployeeResponse, UserRole } from '@hris/types';
```

## Type Categories

### 1. Common Types (`common.types.ts`)

General-purpose types used across the platform:

**Pagination**:
- `PaginationParams` - Query parameters for paginated lists
- `PaginatedResponse<T>` - Standard paginated response wrapper

**API Responses**:
- `ApiResponse<T>` - Standard API response format
- `ValidationError` - Validation error details

**Utilities**:
- `DateRange` - Date range filter
- `Address` - Address information
- `ContactInfo` - Contact details
- `BaseEntity` - Base entity with ID and audit fields
- `Metadata` - Key-value metadata
- `FileUpload` - File upload information

### 2. Auth Types (`auth.types.ts`)

Authentication and authorization types:

**Enums**:
- `UserRole` - SUPER_ADMIN, HR_ADMIN, HR_MANAGER, DEPARTMENT_MANAGER, EMPLOYEE
- `UserStatus` - ACTIVE, INACTIVE, SUSPENDED
- `Permission` - Comprehensive permission list (50+ permissions)

**Login**:
- `LoginRequest` / `LoginResponse`
- `TokenPayload` - JWT token structure
- `RefreshTokenRequest` / `RefreshTokenResponse`

**Password Management**:
- `ChangePasswordRequest`
- `ForgotPasswordRequest`
- `ResetPasswordRequest`

**Session**:
- `SessionInfo` - User session details
- `AuthContext` - Request authentication context

### 3. Employee Types (`employee.types.ts`)

Employee management types:

**Enums**:
- `Gender` - MALE, FEMALE
- `MaritalStatus` - SINGLE, MARRIED, DIVORCED, WIDOWED
- `ContractType` - FULL_TIME, PART_TIME, CONTRACT, PROBATION
- `EmploymentStatus` - ACTIVE, ON_LEAVE, TERMINATED, RESIGNED

**DTOs**:
- `CreateEmployeeDto` - Create employee request
- `UpdateEmployeeDto` - Update employee request
- `EmployeeResponse` - Full employee details (50+ fields)
- `EmployeeSummary` - Brief employee info

**Department & Position**:
- `CreateDepartmentDto` / `UpdateDepartmentDto`
- `DepartmentResponse` / `DepartmentSummary`
- `CreatePositionDto` / `UpdatePositionDto`
- `PositionResponse` / `PositionSummary`

**Filtering**:
- `EmployeeFilters` - Search and filter criteria
- `EmployeeStatistics` - Employee analytics

### 4. Attendance Types (`attendance.types.ts`)

Attendance and leave management:

**Enums**:
- `AttendanceStatus` - PRESENT, ABSENT, LATE, EARLY_LEAVE, ON_LEAVE, WEEKEND, HOLIDAY
- `LeaveType` - ANNUAL, SICK, UNPAID, MATERNITY, PATERNITY, HAJJ, EMERGENCY, BEREAVEMENT, STUDY
- `LeaveStatus` - DRAFT, PENDING, APPROVED, REJECTED, CANCELLED

**Attendance**:
- `CheckInRequest` / `CheckOutRequest`
- `AttendanceRecord` - Daily attendance record
- `AttendanceSummary` - Period summary
- `AttendanceFilters` - Search filters

**Leave**:
- `CreateLeaveRequestDto` / `UpdateLeaveRequestDto`
- `LeaveRequestResponse` - Leave request details
- `LeaveBalance` - Employee leave balance
- `ApproveLeaveRequest` / `RejectLeaveRequest`

**Configuration**:
- `WorkingHoursConfig` - Working hours setup
- `Holiday` - Public holidays

### 5. Payroll Types (`payroll.types.ts`)

Payroll and salary management:

**Enums**:
- `SalaryComponent` - BASIC, HOUSING, TRANSPORT, FOOD, COMMUNICATION, PERFORMANCE_BONUS, OVERTIME, OTHER_ALLOWANCE
- `DeductionType` - GOSI_EMPLOYEE, GOSI_EMPLOYER, INCOME_TAX, LOAN, ADVANCE, ABSENCE, LATE, OTHER
- `PayrollStatus` - DRAFT, PENDING_APPROVAL, APPROVED, PAID, REJECTED
- `PaymentMethod` - BANK_TRANSFER, CASH, CHEQUE

**Salary**:
- `SalaryComponentDetail` - Individual salary component
- `DeductionDetail` - Individual deduction
- `SalaryStructure` - Employee salary structure

**Payroll**:
- `PayslipResponse` - Detailed payslip (40+ fields)
- `PayrollRunRequest` / `PayrollRunResponse`
- `CreatePayslipDto` / `UpdatePayslipDto`
- `PayrollFilters` - Search filters

**Financial**:
- `Loan` - Employee loan details
- `SalaryAdvance` - Salary advance tracking
- `GOSICalculation` - GOSI contribution calculation
- `TaxCalculation` - Tax calculation

**Analytics**:
- `PayrollSummary` - Period payroll summary
- `PayrollStatistics` - Payroll analytics

### 6. API Types (`api.types.ts`)

API infrastructure types:

**HTTP**:
- `HttpMethod` - GET, POST, PUT, PATCH, DELETE
- `HttpStatus` - Standard HTTP status codes
- `ApiError` - Error response structure
- `ApiRequestOptions` - Request configuration

**Operations**:
- `BatchRequest` / `BatchResponse` - Batch operations
- `ExportRequest` / `ExportResponse` - Data export
- `ImportRequest` / `ImportResponse` - Data import
- `SearchRequest` / `SearchResponse` - Search functionality

**Infrastructure**:
- `WebhookEvent` / `WebhookDelivery` - Webhook handling
- `HealthCheckResponse` - Service health
- `RateLimitInfo` - Rate limiting
- `AuditLogEntry` - Audit trail

## Usage Examples

### Employee Management

```typescript
import {
  CreateEmployeeDto,
  EmployeeResponse,
  Gender,
  ContractType,
  EmploymentStatus
} from '@hris/types';

// Create employee
const newEmployee: CreateEmployeeDto = {
  firstNameAr: 'أحمد',
  lastNameAr: 'محمد',
  nationalId: '1234567890',
  dateOfBirth: new Date('1990-01-01'),
  gender: Gender.MALE,
  email: 'ahmed@example.com',
  phone: '+966501234567',
  departmentId: 'dept-id',
  positionId: 'pos-id',
  hireDate: new Date(),
  contractType: ContractType.FULL_TIME,
  basicSalary: 10000,
  // ... other fields
};

// Response
const employee: EmployeeResponse = {
  id: 'emp-id',
  employeeNumber: 'EMP-2025-0001',
  fullNameAr: 'أحمد محمد',
  employmentStatus: EmploymentStatus.ACTIVE,
  totalSalary: 13500,
  age: 35,
  yearsOfService: 5,
  // ... other fields
};
```

### Authentication

```typescript
import {
  LoginRequest,
  LoginResponse,
  UserRole,
  Permission
} from '@hris/types';

// Login
const loginData: LoginRequest = {
  email: 'admin@hris.local',
  password: 'password',
};

// Response
const authResponse: LoginResponse = {
  accessToken: 'jwt-token',
  refreshToken: 'refresh-token',
  tokenType: 'Bearer',
  expiresIn: 3600,
  user: {
    id: 'user-id',
    email: 'admin@hris.local',
    role: UserRole.SUPER_ADMIN,
    permissions: [Permission.EMPLOYEE_CREATE, Permission.EMPLOYEE_READ],
  },
};
```

### Pagination

```typescript
import {
  PaginationParams,
  PaginatedResponse,
  EmployeeSummary
} from '@hris/types';

// Request params
const params: PaginationParams = {
  page: 1,
  limit: 20,
  sortBy: 'createdAt',
  sortOrder: 'DESC',
};

// Response
const response: PaginatedResponse<EmployeeSummary> = {
  data: [...employees],
  total: 100,
  page: 1,
  limit: 20,
  totalPages: 5,
  hasNext: true,
  hasPrevious: false,
};
```

### Leave Management

```typescript
import {
  CreateLeaveRequestDto,
  LeaveType,
  LeaveStatus,
  LeaveRequestResponse
} from '@hris/types';

// Create leave request
const leaveRequest: CreateLeaveRequestDto = {
  employeeId: 'emp-id',
  leaveType: LeaveType.ANNUAL,
  startDate: new Date('2025-01-15'),
  endDate: new Date('2025-01-20'),
  numberOfDays: 5,
  reason: 'Family vacation',
};

// Response
const leave: LeaveRequestResponse = {
  id: 'leave-id',
  status: LeaveStatus.PENDING,
  // ... other fields
};
```

### Payroll Processing

```typescript
import {
  PayrollRunRequest,
  PayrollStatus,
  PaymentMethod,
  SalaryComponent,
  DeductionType
} from '@hris/types';

// Run payroll
const payrollRun: PayrollRunRequest = {
  payPeriod: '2025-01',
  periodStart: new Date('2025-01-01'),
  periodEnd: new Date('2025-01-31'),
  paymentDate: new Date('2025-02-01'),
  paymentMethod: PaymentMethod.BANK_TRANSFER,
};
```

## Type Safety

All types are strictly typed with comprehensive JSDoc documentation:

```typescript
/**
 * Employee response (full details)
 */
export interface EmployeeResponse extends BaseEntity {
  /** Employee number (auto-generated: EMP-YYYY-XXXX) */
  employeeNumber: string;

  /** Full name in Arabic */
  fullNameAr: string;

  /** Computed: Age calculated from date of birth */
  age: number;

  // ... more documented fields
}
```

## Best Practices

1. **Always use types from this package** - Don't define types inline
2. **Leverage type inference** - Let TypeScript infer types when possible
3. **Use discriminated unions** - For status-based types
4. **Prefer interfaces over types** - For object shapes
5. **Document complex types** - Add JSDoc comments

## Development

```bash
# Type check
pnpm --filter @hris/types typecheck

# Lint
pnpm --filter @hris/types lint
```

## Versioning

This package follows semantic versioning:
- **Major**: Breaking changes to existing types
- **Minor**: New types or optional fields added
- **Patch**: Documentation or non-breaking changes

## License

Private - All rights reserved
