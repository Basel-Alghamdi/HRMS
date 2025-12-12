/**
 * Common types used across the HRIS platform
 */

/**
 * Pagination parameters for list queries
 */
export interface PaginationParams {
  /** Page number (1-indexed) */
  page: number;
  /** Number of items per page */
  limit: number;
  /** Field to sort by */
  sortBy?: string;
  /** Sort order */
  sortOrder?: 'ASC' | 'DESC';
}

/**
 * Paginated response wrapper
 * @template T - Type of data items
 */
export interface PaginatedResponse<T> {
  /** Array of data items */
  data: T[];
  /** Total number of items available */
  total: number;
  /** Current page number */
  page: number;
  /** Number of items per page */
  limit: number;
  /** Total number of pages */
  totalPages: number;
  /** Whether there is a next page */
  hasNext: boolean;
  /** Whether there is a previous page */
  hasPrevious: boolean;
}

/**
 * Standard API response wrapper
 * @template T - Type of response data
 */
export interface ApiResponse<T = any> {
  /** Whether the request was successful */
  success: boolean;
  /** Response data */
  data?: T;
  /** Success or info message */
  message?: string;
  /** Error message if request failed */
  error?: string;
  /** Array of validation errors */
  errors?: ValidationError[];
  /** Timestamp of the response */
  timestamp?: Date;
}

/**
 * Validation error details
 */
export interface ValidationError {
  /** Field that failed validation */
  field: string;
  /** Validation error message */
  message: string;
  /** Validation constraint that failed */
  constraint?: string;
}

/**
 * Date range filter
 */
export interface DateRange {
  /** Start date (inclusive) */
  startDate: Date | string;
  /** End date (inclusive) */
  endDate: Date | string;
}

/**
 * Sort order enum
 */
export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

/**
 * Generic filter interface
 */
export interface BaseFilter {
  /** Search query */
  search?: string;
  /** Date range filter */
  dateRange?: DateRange;
  /** Generic status filter */
  status?: string;
}

/**
 * File upload information
 */
export interface FileUpload {
  /** Original filename */
  originalName: string;
  /** Stored filename */
  filename: string;
  /** File MIME type */
  mimeType: string;
  /** File size in bytes */
  size: number;
  /** File URL or path */
  url: string;
  /** Upload timestamp */
  uploadedAt: Date;
}

/**
 * Address information
 */
export interface Address {
  /** Street address */
  street?: string;
  /** City */
  city?: string;
  /** Region/State/Province */
  region?: string;
  /** Postal/ZIP code */
  postalCode?: string;
  /** Country */
  country: string;
}

/**
 * Contact information
 */
export interface ContactInfo {
  /** Email address */
  email?: string;
  /** Phone number */
  phone?: string;
  /** Mobile number */
  mobile?: string;
  /** Fax number */
  fax?: string;
}

/**
 * Metadata key-value pairs
 */
export type Metadata = Record<string, any>;

/**
 * Action log entry
 */
export interface ActionLog {
  /** Action performed */
  action: string;
  /** User who performed the action */
  userId: string;
  /** Timestamp of action */
  timestamp: Date;
  /** Additional details */
  details?: Metadata;
}

/**
 * Entity timestamps
 */
export interface Timestamps {
  /** Creation timestamp */
  createdAt: Date;
  /** Last update timestamp */
  updatedAt: Date;
  /** Soft delete timestamp */
  deletedAt?: Date | null;
}

/**
 * Audit fields
 */
export interface AuditFields extends Timestamps {
  /** ID of user who created the record */
  createdBy?: string | null;
  /** ID of user who last updated the record */
  updatedBy?: string | null;
}

/**
 * Entity with ID
 */
export interface WithId {
  /** Unique identifier */
  id: string;
}

/**
 * Base entity with common fields
 */
export interface BaseEntity extends WithId, AuditFields {}

/**
 * Status enum for generic use
 */
export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}
