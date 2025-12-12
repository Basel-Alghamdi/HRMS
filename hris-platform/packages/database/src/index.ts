// DataSource and helpers
export { AppDataSource, initializeDatabase, closeDatabase } from './data-source';

// Entities
export * from './entities';

// Enums - Re-export for convenience
export {
  UserRole,
  UserStatus,
} from './entities/user.entity';

export {
  Gender,
  MaritalStatus,
  ContractType,
  EmploymentStatus,
} from './entities/employee.entity';

export {
  DepartmentStatus,
} from './entities/department.entity';

export {
  PositionLevel,
  PositionStatus,
} from './entities/position.entity';
