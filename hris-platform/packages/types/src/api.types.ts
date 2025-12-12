/**
 * API-specific types and constants
 */

import { ApiResponse, PaginatedResponse } from './common.types';

/**
 * HTTP methods
 */
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

/**
 * HTTP status codes
 */
export enum HttpStatus {
  // Success
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,

  // Redirection
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  NOT_MODIFIED = 304,

  // Client Errors
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  TOO_MANY_REQUESTS = 429,

  // Server Errors
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

/**
 * API error response
 */
export interface ApiError {
  /** HTTP status code */
  statusCode: number;
  /** Error message */
  message: string;
  /** Error code (for programmatic handling) */
  code?: string;
  /** Detailed error information */
  details?: any;
  /** Stack trace (development only) */
  stack?: string;
  /** Timestamp */
  timestamp: Date;
  /** Request path */
  path?: string;
}

/**
 * API request options
 */
export interface ApiRequestOptions {
  /** Request headers */
  headers?: Record<string, string>;
  /** Request query parameters */
  params?: Record<string, any>;
  /** Request body */
  body?: any;
  /** Request timeout (ms) */
  timeout?: number;
  /** Retry attempts */
  retries?: number;
  /** Cache TTL (ms) */
  cacheTTL?: number;
}

/**
 * API endpoint definition
 */
export interface ApiEndpoint {
  /** HTTP method */
  method: HttpMethod;
  /** Endpoint path */
  path: string;
  /** Required permissions */
  permissions?: string[];
  /** Whether authentication is required */
  requiresAuth?: boolean;
  /** Rate limit (requests per minute) */
  rateLimit?: number;
}

/**
 * Batch operation request
 */
export interface BatchRequest<T> {
  /** Items to process */
  items: T[];
  /** Whether to stop on first error */
  stopOnError?: boolean;
}

/**
 * Batch operation response
 */
export interface BatchResponse<T> {
  /** Successfully processed items */
  succeeded: T[];
  /** Failed items */
  failed: {
    item: T;
    error: string;
  }[];
  /** Total items processed */
  total: number;
  /** Success count */
  successCount: number;
  /** Failure count */
  failureCount: number;
}

/**
 * File upload response
 */
export interface FileUploadResponse {
  /** File ID */
  id: string;
  /** Original filename */
  originalName: string;
  /** Stored filename */
  filename: string;
  /** File URL */
  url: string;
  /** File size (bytes) */
  size: number;
  /** MIME type */
  mimeType: string;
  /** Upload timestamp */
  uploadedAt: Date;
}

/**
 * Export request
 */
export interface ExportRequest {
  /** Export format */
  format: 'CSV' | 'XLSX' | 'PDF';
  /** Filters to apply */
  filters?: Record<string, any>;
  /** Fields to include */
  fields?: string[];
  /** Export options */
  options?: {
    /** Include headers */
    includeHeaders?: boolean;
    /** Date format */
    dateFormat?: string;
    /** File name */
    filename?: string;
  };
}

/**
 * Export response
 */
export interface ExportResponse {
  /** Export ID */
  id: string;
  /** File URL */
  url: string;
  /** File size (bytes) */
  size: number;
  /** Export format */
  format: string;
  /** Number of records */
  recordCount: number;
  /** Created at */
  createdAt: Date;
  /** Expires at */
  expiresAt: Date;
}

/**
 * Import request
 */
export interface ImportRequest {
  /** File URL or ID */
  fileId: string;
  /** Import options */
  options?: {
    /** Skip header row */
    skipHeader?: boolean;
    /** Update existing records */
    updateExisting?: boolean;
    /** Stop on error */
    stopOnError?: boolean;
  };
}

/**
 * Import response
 */
export interface ImportResponse {
  /** Import ID */
  id: string;
  /** Import status */
  status: 'PROCESSING' | 'COMPLETED' | 'FAILED';
  /** Total records */
  totalRecords: number;
  /** Imported successfully */
  successCount: number;
  /** Failed to import */
  failureCount: number;
  /** Errors */
  errors?: {
    row: number;
    error: string;
  }[];
  /** Started at */
  startedAt: Date;
  /** Completed at */
  completedAt?: Date;
}

/**
 * Search request
 */
export interface SearchRequest {
  /** Search query */
  query: string;
  /** Entity types to search */
  entityTypes?: string[];
  /** Filters */
  filters?: Record<string, any>;
  /** Maximum results */
  limit?: number;
}

/**
 * Search result
 */
export interface SearchResult<T = any> {
  /** Result entity type */
  entityType: string;
  /** Result ID */
  id: string;
  /** Result data */
  data: T;
  /** Relevance score */
  score: number;
  /** Highlighted fields */
  highlights?: Record<string, string[]>;
}

/**
 * Search response
 */
export interface SearchResponse<T = any> {
  /** Search results */
  results: SearchResult<T>[];
  /** Total matches */
  total: number;
  /** Query used */
  query: string;
  /** Time taken (ms) */
  took: number;
}

/**
 * Webhook event
 */
export interface WebhookEvent {
  /** Event ID */
  id: string;
  /** Event type */
  type: string;
  /** Event data */
  data: any;
  /** Timestamp */
  timestamp: Date;
  /** Retry count */
  retryCount?: number;
}

/**
 * Webhook delivery
 */
export interface WebhookDelivery {
  /** Delivery ID */
  id: string;
  /** Event */
  event: WebhookEvent;
  /** Target URL */
  url: string;
  /** HTTP status code */
  statusCode?: number;
  /** Response body */
  response?: string;
  /** Delivery status */
  status: 'PENDING' | 'DELIVERED' | 'FAILED';
  /** Attempts made */
  attempts: number;
  /** Last attempt at */
  lastAttemptAt?: Date;
  /** Next retry at */
  nextRetryAt?: Date;
}

/**
 * Health check response
 */
export interface HealthCheckResponse {
  /** Service status */
  status: 'healthy' | 'unhealthy' | 'degraded';
  /** Service version */
  version: string;
  /** Uptime (seconds) */
  uptime: number;
  /** Timestamp */
  timestamp: Date;
  /** Dependencies status */
  dependencies?: {
    name: string;
    status: 'up' | 'down';
    responseTime?: number;
  }[];
}

/**
 * API version info
 */
export interface ApiVersionInfo {
  /** API version */
  version: string;
  /** Build number */
  build: string;
  /** Release date */
  releaseDate: Date;
  /** Supported features */
  features: string[];
  /** Deprecated endpoints */
  deprecated?: string[];
}

/**
 * Rate limit info
 */
export interface RateLimitInfo {
  /** Rate limit (requests) */
  limit: number;
  /** Remaining requests */
  remaining: number;
  /** Reset time */
  reset: Date;
  /** Retry after (seconds) */
  retryAfter?: number;
}

/**
 * Audit log entry
 */
export interface AuditLogEntry {
  /** Log ID */
  id: string;
  /** Action performed */
  action: string;
  /** Entity type */
  entityType: string;
  /** Entity ID */
  entityId: string;
  /** User who performed the action */
  userId: string;
  /** User email */
  userEmail: string;
  /** IP address */
  ipAddress?: string;
  /** User agent */
  userAgent?: string;
  /** Changes made */
  changes?: {
    field: string;
    oldValue: any;
    newValue: any;
  }[];
  /** Timestamp */
  timestamp: Date;
  /** Additional metadata */
  metadata?: Record<string, any>;
}

/**
 * Generic success response
 */
export type SuccessResponse<T = any> = ApiResponse<T> & {
  success: true;
  data: T;
};

/**
 * Generic error response
 */
export type ErrorResponse = ApiResponse<never> & {
  success: false;
  error: string;
};

/**
 * Generic list response
 */
export type ListResponse<T> = SuccessResponse<PaginatedResponse<T>>;

/**
 * API endpoints registry
 */
export interface ApiEndpointsRegistry {
  auth: {
    login: ApiEndpoint;
    logout: ApiEndpoint;
    refresh: ApiEndpoint;
    forgotPassword: ApiEndpoint;
    resetPassword: ApiEndpoint;
  };
  employees: {
    list: ApiEndpoint;
    create: ApiEndpoint;
    read: ApiEndpoint;
    update: ApiEndpoint;
    delete: ApiEndpoint;
  };
  attendance: {
    checkIn: ApiEndpoint;
    checkOut: ApiEndpoint;
    list: ApiEndpoint;
  };
  leave: {
    list: ApiEndpoint;
    create: ApiEndpoint;
    approve: ApiEndpoint;
    reject: ApiEndpoint;
  };
  payroll: {
    list: ApiEndpoint;
    run: ApiEndpoint;
    approve: ApiEndpoint;
  };
}
