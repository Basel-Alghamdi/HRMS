/**
 * Authentication and authorization types
 */

/**
 * User roles in the system
 */
export enum UserRole {
  /** Super admin with full system access */
  SUPER_ADMIN = 'SUPER_ADMIN',
  /** HR administrator */
  HR_ADMIN = 'HR_ADMIN',
  /** HR manager */
  HR_MANAGER = 'HR_MANAGER',
  /** Department manager */
  DEPARTMENT_MANAGER = 'DEPARTMENT_MANAGER',
  /** Regular employee */
  EMPLOYEE = 'EMPLOYEE',
}

/**
 * User account status
 */
export enum UserStatus {
  /** Active account */
  ACTIVE = 'ACTIVE',
  /** Inactive account */
  INACTIVE = 'INACTIVE',
  /** Suspended account */
  SUSPENDED = 'SUSPENDED',
}

/**
 * System permissions
 */
export enum Permission {
  // User Management
  USER_CREATE = 'USER_CREATE',
  USER_READ = 'USER_READ',
  USER_UPDATE = 'USER_UPDATE',
  USER_DELETE = 'USER_DELETE',
  USER_ASSIGN_ROLE = 'USER_ASSIGN_ROLE',

  // Employee Management
  EMPLOYEE_CREATE = 'EMPLOYEE_CREATE',
  EMPLOYEE_READ = 'EMPLOYEE_READ',
  EMPLOYEE_READ_OWN = 'EMPLOYEE_READ_OWN',
  EMPLOYEE_UPDATE = 'EMPLOYEE_UPDATE',
  EMPLOYEE_UPDATE_OWN = 'EMPLOYEE_UPDATE_OWN',
  EMPLOYEE_DELETE = 'EMPLOYEE_DELETE',
  EMPLOYEE_EXPORT = 'EMPLOYEE_EXPORT',

  // Department Management
  DEPARTMENT_CREATE = 'DEPARTMENT_CREATE',
  DEPARTMENT_READ = 'DEPARTMENT_READ',
  DEPARTMENT_UPDATE = 'DEPARTMENT_UPDATE',
  DEPARTMENT_DELETE = 'DEPARTMENT_DELETE',

  // Position Management
  POSITION_CREATE = 'POSITION_CREATE',
  POSITION_READ = 'POSITION_READ',
  POSITION_UPDATE = 'POSITION_UPDATE',
  POSITION_DELETE = 'POSITION_DELETE',

  // Attendance Management
  ATTENDANCE_CREATE = 'ATTENDANCE_CREATE',
  ATTENDANCE_READ = 'ATTENDANCE_READ',
  ATTENDANCE_READ_OWN = 'ATTENDANCE_READ_OWN',
  ATTENDANCE_UPDATE = 'ATTENDANCE_UPDATE',
  ATTENDANCE_DELETE = 'ATTENDANCE_DELETE',
  ATTENDANCE_APPROVE = 'ATTENDANCE_APPROVE',

  // Leave Management
  LEAVE_CREATE = 'LEAVE_CREATE',
  LEAVE_READ = 'LEAVE_READ',
  LEAVE_READ_OWN = 'LEAVE_READ_OWN',
  LEAVE_UPDATE = 'LEAVE_UPDATE',
  LEAVE_DELETE = 'LEAVE_DELETE',
  LEAVE_APPROVE = 'LEAVE_APPROVE',
  LEAVE_REJECT = 'LEAVE_REJECT',

  // Payroll Management
  PAYROLL_CREATE = 'PAYROLL_CREATE',
  PAYROLL_READ = 'PAYROLL_READ',
  PAYROLL_READ_OWN = 'PAYROLL_READ_OWN',
  PAYROLL_UPDATE = 'PAYROLL_UPDATE',
  PAYROLL_DELETE = 'PAYROLL_DELETE',
  PAYROLL_APPROVE = 'PAYROLL_APPROVE',
  PAYROLL_PROCESS = 'PAYROLL_PROCESS',

  // Reports
  REPORT_VIEW_HR = 'REPORT_VIEW_HR',
  REPORT_VIEW_PAYROLL = 'REPORT_VIEW_PAYROLL',
  REPORT_VIEW_ATTENDANCE = 'REPORT_VIEW_ATTENDANCE',
  REPORT_EXPORT = 'REPORT_EXPORT',

  // System Settings
  SETTINGS_VIEW = 'SETTINGS_VIEW',
  SETTINGS_UPDATE = 'SETTINGS_UPDATE',
}

/**
 * Login request payload
 */
export interface LoginRequest {
  /** User email */
  email: string;
  /** User password */
  password: string;
  /** Remember me flag */
  rememberMe?: boolean;
}

/**
 * Login response payload
 */
export interface LoginResponse {
  /** Access token */
  accessToken: string;
  /** Refresh token */
  refreshToken: string;
  /** Token type (usually 'Bearer') */
  tokenType: string;
  /** Token expiration in seconds */
  expiresIn: number;
  /** User information */
  user: UserInfo;
}

/**
 * User information
 */
export interface UserInfo {
  /** User ID */
  id: string;
  /** User email */
  email: string;
  /** User role */
  role: UserRole;
  /** User status */
  status: UserStatus;
  /** Associated employee ID */
  employeeId?: string | null;
  /** User permissions */
  permissions?: Permission[];
}

/**
 * JWT token payload
 */
export interface TokenPayload {
  /** Subject (user ID) */
  sub: string;
  /** User email */
  email: string;
  /** User role */
  role: UserRole;
  /** Employee ID */
  employeeId?: string | null;
  /** Token issued at timestamp */
  iat: number;
  /** Token expiration timestamp */
  exp: number;
}

/**
 * Refresh token request
 */
export interface RefreshTokenRequest {
  /** Refresh token */
  refreshToken: string;
}

/**
 * Refresh token response
 */
export interface RefreshTokenResponse {
  /** New access token */
  accessToken: string;
  /** Token type (usually 'Bearer') */
  tokenType: string;
  /** Token expiration in seconds */
  expiresIn: number;
}

/**
 * Session information
 */
export interface SessionInfo {
  /** Session ID */
  sessionId: string;
  /** User ID */
  userId: string;
  /** User email */
  email: string;
  /** User role */
  role: UserRole;
  /** IP address */
  ipAddress?: string;
  /** User agent */
  userAgent?: string;
  /** Session created at */
  createdAt: Date;
  /** Last activity timestamp */
  lastActivity: Date;
  /** Session expires at */
  expiresAt: Date;
}

/**
 * Password change request
 */
export interface ChangePasswordRequest {
  /** Current password */
  currentPassword: string;
  /** New password */
  newPassword: string;
  /** Confirm new password */
  confirmPassword: string;
}

/**
 * Password reset request
 */
export interface ForgotPasswordRequest {
  /** User email */
  email: string;
}

/**
 * Reset password request
 */
export interface ResetPasswordRequest {
  /** Reset token */
  token: string;
  /** New password */
  newPassword: string;
  /** Confirm new password */
  confirmPassword: string;
}

/**
 * Logout request
 */
export interface LogoutRequest {
  /** Refresh token to invalidate */
  refreshToken?: string;
}

/**
 * Role permissions mapping
 */
export type RolePermissions = {
  [key in UserRole]: Permission[];
};

/**
 * Authentication error codes
 */
export enum AuthErrorCode {
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  ACCOUNT_LOCKED = 'ACCOUNT_LOCKED',
  ACCOUNT_SUSPENDED = 'ACCOUNT_SUSPENDED',
  ACCOUNT_INACTIVE = 'ACCOUNT_INACTIVE',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  TOKEN_INVALID = 'TOKEN_INVALID',
  INSUFFICIENT_PERMISSIONS = 'INSUFFICIENT_PERMISSIONS',
  PASSWORD_WEAK = 'PASSWORD_WEAK',
  PASSWORD_MISMATCH = 'PASSWORD_MISMATCH',
}

/**
 * Authentication context (for requests)
 */
export interface AuthContext {
  /** Authenticated user */
  user: UserInfo;
  /** User permissions */
  permissions: Permission[];
  /** Request session ID */
  sessionId?: string;
}
