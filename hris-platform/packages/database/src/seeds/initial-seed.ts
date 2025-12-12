import 'reflect-metadata';
import { AppDataSource, initializeDatabase, closeDatabase } from '../data-source';
import {
  UserEntity,
  UserRole,
  UserStatus,
} from '../entities/user.entity';
import {
  DepartmentEntity,
  DepartmentStatus,
} from '../entities/department.entity';
import {
  PositionEntity,
  PositionLevel,
  PositionStatus,
} from '../entities/position.entity';
import {
  EmployeeEntity,
  Gender,
  MaritalStatus,
  ContractType,
  EmploymentStatus,
} from '../entities/employee.entity';

async function seed() {
  console.log('🌱 Starting database seed...');

  try {
    // Initialize database connection
    await initializeDatabase();

    // Get repositories
    const userRepository = AppDataSource.getRepository(UserEntity);
    const departmentRepository = AppDataSource.getRepository(DepartmentEntity);
    const positionRepository = AppDataSource.getRepository(PositionEntity);
    const employeeRepository = AppDataSource.getRepository(EmployeeEntity);

    // ========================================================================
    // 1. Create Departments
    // ========================================================================
    console.log('📁 Creating departments...');

    const hrDept = departmentRepository.create({
      nameAr: 'الموارد البشرية',
      nameEn: 'Human Resources',
      code: 'HR',
      description: 'Manages recruitment, employee relations, and HR policies',
      status: DepartmentStatus.ACTIVE,
    });
    await departmentRepository.save(hrDept);

    const financeDept = departmentRepository.create({
      nameAr: 'المالية',
      nameEn: 'Finance',
      code: 'FIN',
      description: 'Handles financial operations, budgeting, and accounting',
      status: DepartmentStatus.ACTIVE,
    });
    await departmentRepository.save(financeDept);

    const itDept = departmentRepository.create({
      nameAr: 'تقنية المعلومات',
      nameEn: 'Information Technology',
      code: 'IT',
      description: 'Manages IT infrastructure, software development, and tech support',
      status: DepartmentStatus.ACTIVE,
    });
    await departmentRepository.save(itDept);

    const operationsDept = departmentRepository.create({
      nameAr: 'العمليات',
      nameEn: 'Operations',
      code: 'OPS',
      description: 'Oversees daily business operations and processes',
      status: DepartmentStatus.ACTIVE,
    });
    await departmentRepository.save(operationsDept);

    console.log('✅ Departments created successfully');

    // ========================================================================
    // 2. Create Positions
    // ========================================================================
    console.log('💼 Creating positions...');

    // HR Positions
    const hrDirector = positionRepository.create({
      titleAr: 'مدير الموارد البشرية',
      titleEn: 'HR Director',
      code: 'HR-DIR',
      departmentId: hrDept.id,
      level: PositionLevel.DIRECTOR,
      minSalary: 25000,
      maxSalary: 35000,
      status: PositionStatus.ACTIVE,
    });
    await positionRepository.save(hrDirector);

    const hrManager = positionRepository.create({
      titleAr: 'مدير موارد بشرية',
      titleEn: 'HR Manager',
      code: 'HR-MGR',
      departmentId: hrDept.id,
      level: PositionLevel.MANAGER,
      minSalary: 15000,
      maxSalary: 22000,
      status: PositionStatus.ACTIVE,
    });
    await positionRepository.save(hrManager);

    const hrSpecialist = positionRepository.create({
      titleAr: 'أخصائي موارد بشرية',
      titleEn: 'HR Specialist',
      code: 'HR-SPEC',
      departmentId: hrDept.id,
      level: PositionLevel.MID,
      minSalary: 8000,
      maxSalary: 12000,
      status: PositionStatus.ACTIVE,
    });
    await positionRepository.save(hrSpecialist);

    // Finance Positions
    const cfo = positionRepository.create({
      titleAr: 'المدير المالي',
      titleEn: 'Chief Financial Officer',
      code: 'FIN-CFO',
      departmentId: financeDept.id,
      level: PositionLevel.EXECUTIVE,
      minSalary: 35000,
      maxSalary: 50000,
      status: PositionStatus.ACTIVE,
    });
    await positionRepository.save(cfo);

    const accountant = positionRepository.create({
      titleAr: 'محاسب',
      titleEn: 'Accountant',
      code: 'FIN-ACC',
      departmentId: financeDept.id,
      level: PositionLevel.MID,
      minSalary: 7000,
      maxSalary: 11000,
      status: PositionStatus.ACTIVE,
    });
    await positionRepository.save(accountant);

    // IT Positions
    const cto = positionRepository.create({
      titleAr: 'مدير التقنية',
      titleEn: 'Chief Technology Officer',
      code: 'IT-CTO',
      departmentId: itDept.id,
      level: PositionLevel.EXECUTIVE,
      minSalary: 35000,
      maxSalary: 50000,
      status: PositionStatus.ACTIVE,
    });
    await positionRepository.save(cto);

    const seniorDev = positionRepository.create({
      titleAr: 'مطور برمجيات أول',
      titleEn: 'Senior Software Developer',
      code: 'IT-SR-DEV',
      departmentId: itDept.id,
      level: PositionLevel.SENIOR,
      minSalary: 15000,
      maxSalary: 22000,
      status: PositionStatus.ACTIVE,
    });
    await positionRepository.save(seniorDev);

    const developer = positionRepository.create({
      titleAr: 'مطور برمجيات',
      titleEn: 'Software Developer',
      code: 'IT-DEV',
      departmentId: itDept.id,
      level: PositionLevel.MID,
      minSalary: 9000,
      maxSalary: 14000,
      status: PositionStatus.ACTIVE,
    });
    await positionRepository.save(developer);

    // Operations Positions
    const opsManager = positionRepository.create({
      titleAr: 'مدير العمليات',
      titleEn: 'Operations Manager',
      code: 'OPS-MGR',
      departmentId: operationsDept.id,
      level: PositionLevel.MANAGER,
      minSalary: 15000,
      maxSalary: 22000,
      status: PositionStatus.ACTIVE,
    });
    await positionRepository.save(opsManager);

    console.log('✅ Positions created successfully');

    // ========================================================================
    // 3. Create Super Admin Employee
    // ========================================================================
    console.log('👤 Creating super admin employee...');

    const adminEmployee = employeeRepository.create({
      employeeNumber: 'EMP-2025-0001',
      firstNameAr: 'مدير',
      lastNameAr: 'النظام',
      firstNameEn: 'System',
      lastNameEn: 'Administrator',
      nationalId: '1234567890',
      dateOfBirth: new Date('1990-01-01'),
      gender: Gender.MALE,
      nationality: 'Saudi',
      maritalStatus: MaritalStatus.SINGLE,
      email: 'admin@hris.local',
      phone: '+966501234567',
      emergencyContactName: 'Emergency Contact',
      emergencyContactPhone: '+966501234568',
      emergencyContactRelation: 'Family',
      city: 'Riyadh',
      country: 'Saudi Arabia',
      departmentId: hrDept.id,
      positionId: hrDirector.id,
      hireDate: new Date('2025-01-01'),
      contractType: ContractType.FULL_TIME,
      contractStartDate: new Date('2025-01-01'),
      employmentStatus: EmploymentStatus.ACTIVE,
      basicSalary: 30000,
      housingAllowance: 5000,
      transportationAllowance: 2000,
      otherAllowances: 1000,
    });
    await employeeRepository.save(adminEmployee);

    console.log('✅ Super admin employee created successfully');

    // ========================================================================
    // 4. Create Super Admin User
    // ========================================================================
    console.log('🔐 Creating super admin user...');

    const adminUser = userRepository.create({
      email: 'admin@hris.local',
      passwordHash: 'Admin@123', // Will be hashed by the entity hook
      role: UserRole.SUPER_ADMIN,
      status: UserStatus.ACTIVE,
      employeeId: adminEmployee.id,
    });
    await userRepository.save(adminUser);

    console.log('✅ Super admin user created successfully');

    // ========================================================================
    // 5. Create Sample Employees
    // ========================================================================
    console.log('👥 Creating sample employees...');

    const hrEmployee = employeeRepository.create({
      firstNameAr: 'أحمد',
      lastNameAr: 'محمد',
      firstNameEn: 'Ahmed',
      lastNameEn: 'Mohammed',
      nationalId: '1234567891',
      dateOfBirth: new Date('1992-05-15'),
      gender: Gender.MALE,
      nationality: 'Saudi',
      maritalStatus: MaritalStatus.MARRIED,
      email: 'ahmed.mohammed@hris.local',
      phone: '+966502345678',
      emergencyContactName: 'Fatima Mohammed',
      emergencyContactPhone: '+966502345679',
      emergencyContactRelation: 'Spouse',
      city: 'Riyadh',
      country: 'Saudi Arabia',
      departmentId: hrDept.id,
      positionId: hrSpecialist.id,
      managerId: adminEmployee.id,
      hireDate: new Date('2024-03-15'),
      contractType: ContractType.FULL_TIME,
      contractStartDate: new Date('2024-03-15'),
      employmentStatus: EmploymentStatus.ACTIVE,
      basicSalary: 10000,
      housingAllowance: 2000,
      transportationAllowance: 1000,
      otherAllowances: 500,
    });
    await employeeRepository.save(hrEmployee);

    const itEmployee = employeeRepository.create({
      firstNameAr: 'فاطمة',
      lastNameAr: 'علي',
      firstNameEn: 'Fatima',
      lastNameEn: 'Ali',
      nationalId: '1234567892',
      dateOfBirth: new Date('1995-08-20'),
      gender: Gender.FEMALE,
      nationality: 'Saudi',
      maritalStatus: MaritalStatus.SINGLE,
      email: 'fatima.ali@hris.local',
      phone: '+966503456789',
      emergencyContactName: 'Ali Ahmed',
      emergencyContactPhone: '+966503456790',
      emergencyContactRelation: 'Father',
      city: 'Jeddah',
      country: 'Saudi Arabia',
      departmentId: itDept.id,
      positionId: developer.id,
      hireDate: new Date('2024-06-01'),
      contractType: ContractType.FULL_TIME,
      contractStartDate: new Date('2024-06-01'),
      employmentStatus: EmploymentStatus.ACTIVE,
      basicSalary: 12000,
      housingAllowance: 2500,
      transportationAllowance: 1200,
      otherAllowances: 300,
    });
    await employeeRepository.save(itEmployee);

    console.log('✅ Sample employees created successfully');

    // ========================================================================
    // 6. Update department employee counts
    // ========================================================================
    console.log('📊 Updating department statistics...');

    await departmentRepository.update(hrDept.id, { employeeCount: 2 });
    await departmentRepository.update(itDept.id, { employeeCount: 1 });

    console.log('✅ Department statistics updated');

    // ========================================================================
    // Summary
    // ========================================================================
    console.log('\n' + '='.repeat(60));
    console.log('✅ Database seeding completed successfully!');
    console.log('='.repeat(60));
    console.log('\n📋 Summary:');
    console.log(`   - Departments: 4`);
    console.log(`   - Positions: 10`);
    console.log(`   - Employees: 3`);
    console.log(`   - Users: 1`);
    console.log('\n🔐 Super Admin Credentials:');
    console.log(`   Email: admin@hris.local`);
    console.log(`   Password: Admin@123`);
    console.log('='.repeat(60) + '\n');

  } catch (error) {
    console.error('❌ Error during seeding:', error);
    throw error;
  } finally {
    await closeDatabase();
  }
}

// Export the seed function as default
export default seed;

// Run the seed if executed directly
if (require.main === module) {
  seed()
    .then(() => {
      console.log('✨ Seed process finished');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Seed process failed:', error);
      process.exit(1);
    });
}
