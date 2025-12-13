/**
 * @hris/ui - Shared UI components for HRIS Platform
 *
 * Comprehensive component library built with:
 * - Radix UI primitives
 * - Tailwind CSS with RTL support
 * - React Hook Form & Zod validation
 * - TanStack Table for data tables
 * - Arabic-first design
 *
 * @packageDocumentation
 */

// ============================================================================
// Utilities & Translations
// ============================================================================
export * from './lib/utils';
export * from './lib/translations';

// ============================================================================
// Basic Components
// ============================================================================
export * from './components/button';
export * from './components/input';
export * from './components/textarea';
export * from './components/label';
export * from './components/badge';
export * from './components/avatar';
export * from './components/select';
export * from './components/dialog';
export * from './components/toast';
export * from './components/table';
export * from './components/card';
export * from './components/form';
export * from './components/date-picker';
export * from './components/time-picker';
export * from './components/loading-spinner';
export * from './components/empty-state';
export * from './components/progress';
export * from './components/dropdown-menu';

// ============================================================================
// Form Components
// ============================================================================
export * from './components/checkbox';
export * from './components/radio-group';
export * from './components/switch';
export * from './components/file-upload';

// ============================================================================
// Data Display Components
// ============================================================================
export * from './components/stat-card';

// ============================================================================
// Feedback Components
// ============================================================================
export * from './components/alert-dialog';
export * from './components/sheet';
export * from './components/tooltip';
export * from './components/popover';

// ============================================================================
// Navigation Components
// ============================================================================
export * from './components/tabs';

// ============================================================================
// Data Table Components
// ============================================================================
export { DataTable } from './components/data-table/data-table';
export { DataTablePagination } from './components/data-table/data-table-pagination';
export { DataTableToolbar } from './components/data-table/data-table-toolbar';
export { DataTableViewOptions } from './components/data-table/data-table-view-options';
export { DataTableColumnHeader } from './components/data-table/data-table-column-header';

// ============================================================================
// Layout Components
// ============================================================================
export * from './components/layout/sidebar';
export * from './components/layout/header';
export * from './components/layout/breadcrumb';
export * from './components/layout/page-layout';
export * from './components/container';
export * from './components/divider';

// ============================================================================
// Utility Components
// ============================================================================
export * from './components/skeleton';
export * from './components/scroll-area';
export * from './components/error-boundary';
