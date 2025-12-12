import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { EmployeeEntity } from './entities/employee.entity';
import { DepartmentEntity } from './entities/department.entity';
import { PositionEntity } from './entities/position.entity';

// Load environment variables
const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432', 10),
  username: process.env.DATABASE_USERNAME || 'hris_user',
  password: process.env.DATABASE_PASSWORD || 'hris_password',
  database: process.env.DATABASE_NAME || 'hris_db',

  // Entity loading
  entities: [UserEntity, EmployeeEntity, DepartmentEntity, PositionEntity],

  // Migration settings
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: false, // Don't auto-run migrations

  // Subscriber settings
  subscribers: [],

  // Logging
  logging: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  logger: 'advanced-console',

  // Schema sync (ONLY for development)
  synchronize: process.env.NODE_ENV === 'development' && process.env.DB_SYNC === 'true',
  dropSchema: false,

  // Connection pool settings
  extra: {
    max: 20, // Maximum number of clients in the pool
    min: 2, // Minimum number of clients in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection can't be established
  },

  // Cache settings (optional - for query result caching)
  cache: {
    type: 'database',
    tableName: 'query_result_cache',
    duration: 60000, // 1 minute
  },
};

// Create and export the DataSource
export const AppDataSource = new DataSource(config);

// Helper function to initialize the database connection
export async function initializeDatabase(): Promise<DataSource> {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log('✅ Database connection established successfully');
    }
    return AppDataSource;
  } catch (error) {
    console.error('❌ Error during database initialization:', error);
    throw error;
  }
}

// Helper function to close the database connection
export async function closeDatabase(): Promise<void> {
  try {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
      console.log('✅ Database connection closed successfully');
    }
  } catch (error) {
    console.error('❌ Error closing database connection:', error);
    throw error;
  }
}

// Export configuration for CLI tools
export default config;
