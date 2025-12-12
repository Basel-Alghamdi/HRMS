# @hris/database

Database package for HRIS Platform using TypeORM and PostgreSQL.

## Features

- ✅ TypeORM entities with proper relations
- ✅ Soft delete support
- ✅ Audit fields (createdBy, updatedBy, timestamps)
- ✅ Comprehensive employee management schema
- ✅ Department hierarchy support
- ✅ Position levels with salary bands
- ✅ User authentication and authorization
- ✅ Database migrations
- ✅ Seed data for development

## Entities

### BaseEntity

Abstract base entity that all entities extend:
- `id` - UUID primary key
- `createdAt` - Creation timestamp
- `updatedAt` - Update timestamp
- `deletedAt` - Soft delete timestamp
- `createdBy` - UUID of creator
- `updatedBy` - UUID of last updater

### UserEntity

User accounts for authentication:
- **Roles**: SUPER_ADMIN, HR_ADMIN, HR_MANAGER, DEPARTMENT_MANAGER, EMPLOYEE
- **Status**: ACTIVE, INACTIVE, SUSPENDED
- Password hashing with bcrypt
- Failed login attempt tracking
- Account locking after 5 failed attempts
- Password reset token support
- One-to-one relation with Employee

### EmployeeEntity

Comprehensive employee information:

**Personal Information**:
- Arabic name (required)
- English name (optional)
- National ID (Saudi ID or Iqama)
- Date of birth, gender, nationality
- Marital status, religion

**Contact Information**:
- Work email, personal email
- Phone number
- Emergency contact details

**Address**:
- Street, city, region, postal code
- Country (default: Saudi Arabia)

**Employment**:
- Employee number (auto-generated: EMP-YYYY-XXXX)
- Department and position
- Manager (self-reference)
- Hire date, contract details
- Employment status

**Compensation**:
- Basic salary
- Housing, transportation, and other allowances
- Bank details (IBAN)

**Computed Properties**:
- Full name (Arabic/English)
- Total salary
- Age
- Years of service

### DepartmentEntity

Department organization with hierarchy:
- Arabic and English names
- Department code (unique)
- Manager (reference to Employee)
- Parent department (for hierarchy)
- Tree structure using closure table
- Employee count

### PositionEntity

Job positions with salary bands:
- Arabic and English titles
- Position code (unique)
- Department reference
- Level (1=Entry to 7=Executive)
- Min/max salary ranges (SAR)
- Required skills and responsibilities

## Database Setup

### 1. Start Docker Services

```bash
# Start PostgreSQL
make up
# OR
pnpm docker:up
```

### 2. Run Seed Data

```bash
# From database package
pnpm seed

# OR from root
pnpm --filter @hris/database seed
```

This will create:
- 4 departments (HR, Finance, IT, Operations)
- 10 positions across departments
- 3 sample employees
- 1 super admin user

**Super Admin Credentials:**
- Email: `admin@hris.local`
- Password: `Admin@123`

## Migrations

### Generate Migration

```bash
# After making entity changes
pnpm --filter @hris/database migration:generate -- src/migrations/MigrationName
```

### Run Migrations

```bash
pnpm --filter @hris/database migration:run
```

### Revert Migration

```bash
pnpm --filter @hris/database migration:revert
```

## Usage in Services

```typescript
import {
  AppDataSource,
  initializeDatabase,
  UserEntity,
  EmployeeEntity,
  DepartmentEntity,
  PositionEntity,
} from '@hris/database';

// Initialize connection
await initializeDatabase();

// Get repository
const userRepo = AppDataSource.getRepository(UserEntity);

// Query
const users = await userRepo.find({
  where: { status: UserStatus.ACTIVE },
  relations: ['employee'],
});

// Create
const user = userRepo.create({
  email: 'user@example.com',
  passwordHash: 'password123', // Will be auto-hashed
  role: UserRole.EMPLOYEE,
});
await userRepo.save(user);
```

## Entity Relationships

```
User (1:1) Employee
Employee (N:1) Department
Employee (N:1) Position
Employee (N:1) Employee (Manager)
Department (N:1) Department (Parent)
Department (1:N) Position
Position (1:N) Employee
```

## Indexes

Optimized indexes for common queries:

**Employee**:
- `employee_number` (unique)
- `national_id` (unique)
- `email` (unique)
- `department_id`
- `position_id`
- `manager_id`

**User**:
- `email` (unique)

**Department**:
- `code` (unique)
- `parent_id`

## Enums

### UserRole
- `SUPER_ADMIN` - Full system access
- `HR_ADMIN` - HR administration
- `HR_MANAGER` - HR management
- `DEPARTMENT_MANAGER` - Department management
- `EMPLOYEE` - Regular employee

### EmploymentStatus
- `ACTIVE` - Currently employed
- `ON_LEAVE` - On leave
- `TERMINATED` - Terminated
- `RESIGNED` - Resigned

### ContractType
- `FULL_TIME` - Full-time contract
- `PART_TIME` - Part-time contract
- `CONTRACT` - Fixed-term contract
- `PROBATION` - Probation period

### PositionLevel
- `1` - Entry Level
- `2` - Mid Level
- `3` - Senior Level
- `4` - Lead
- `5` - Manager
- `6` - Director
- `7` - Executive

## Best Practices

1. **Always use repositories**: Don't use entity managers directly
2. **Use transactions**: For operations affecting multiple entities
3. **Soft delete**: Use `softRemove()` instead of `remove()`
4. **Eager loading**: Be careful with relations to avoid N+1 queries
5. **Indexes**: Query performance is optimized for common operations
6. **Validation**: Use class-validator in DTOs, not in entities

## Security Notes

1. **Passwords**: Automatically hashed using bcrypt
2. **Bank accounts**: Should be encrypted in production
3. **Soft delete**: Deleted records remain in database
4. **Audit fields**: Track who created/updated records

## Environment Variables

Required environment variables:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=hris_user
DATABASE_PASSWORD=your_password
DATABASE_NAME=hris_db
NODE_ENV=development
DB_SYNC=false  # Set to true to auto-sync schema (dev only)
```

## Troubleshooting

### Connection Issues

```bash
# Check if PostgreSQL is running
make ps

# View PostgreSQL logs
docker compose logs postgres
```

### Migration Errors

```bash
# Revert last migration
pnpm --filter @hris/database migration:revert

# Drop schema (CAREFUL - deletes all data)
# In PostgreSQL:
# DROP SCHEMA public CASCADE;
# CREATE SCHEMA public;
```

### Seed Data Issues

```bash
# Reset database
make db-reset

# Run seed again
pnpm --filter @hris/database seed
```

## Contributing

When adding new entities:

1. Extend `BaseEntity`
2. Add proper indexes
3. Define relations clearly
4. Add computed properties if needed
5. Update this README
6. Generate and run migration
7. Update seed data if needed
