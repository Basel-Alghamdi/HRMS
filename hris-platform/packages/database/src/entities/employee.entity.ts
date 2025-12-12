import {
  Entity,
  Column,
  Index,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
  BeforeInsert,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { DepartmentEntity } from './department.entity';
import { PositionEntity } from './position.entity';
import { UserEntity } from './user.entity';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum MaritalStatus {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
  DIVORCED = 'DIVORCED',
  WIDOWED = 'WIDOWED',
}

export enum ContractType {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT',
  PROBATION = 'PROBATION',
}

export enum EmploymentStatus {
  ACTIVE = 'ACTIVE',
  ON_LEAVE = 'ON_LEAVE',
  TERMINATED = 'TERMINATED',
  RESIGNED = 'RESIGNED',
}

@Entity('employees')
@Index(['employeeNumber'], { unique: true })
@Index(['nationalId'], { unique: true })
@Index(['email'], { unique: true })
@Index(['departmentId'])
@Index(['positionId'])
@Index(['managerId'])
export class EmployeeEntity extends BaseEntity {
  // ============================================================================
  // Employee Identification
  // ============================================================================
  @Column({
    name: 'employee_number',
    type: 'varchar',
    length: 50,
    unique: true,
  })
  employeeNumber!: string;

  // ============================================================================
  // Personal Information (Arabic - Required)
  // ============================================================================
  @Column({ name: 'first_name_ar', type: 'varchar', length: 100 })
  firstNameAr!: string;

  @Column({ name: 'last_name_ar', type: 'varchar', length: 100 })
  lastNameAr!: string;

  // ============================================================================
  // Personal Information (English - Optional)
  // ============================================================================
  @Column({ name: 'first_name_en', type: 'varchar', length: 100, nullable: true })
  firstNameEn!: string | null;

  @Column({ name: 'last_name_en', type: 'varchar', length: 100, nullable: true })
  lastNameEn!: string | null;

  // ============================================================================
  // Identification Documents
  // ============================================================================
  @Column({
    name: 'national_id',
    type: 'varchar',
    length: 20,
    unique: true,
    comment: 'Saudi ID or Iqama number',
  })
  nationalId!: string;

  @Column({ name: 'date_of_birth', type: 'date' })
  dateOfBirth!: Date;

  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender!: Gender;

  @Column({ type: 'varchar', length: 100 })
  nationality!: string;

  @Column({
    name: 'marital_status',
    type: 'enum',
    enum: MaritalStatus,
    default: MaritalStatus.SINGLE,
  })
  maritalStatus!: MaritalStatus;

  @Column({ type: 'varchar', length: 100, nullable: true })
  religion!: string | null;

  // ============================================================================
  // Contact Information
  // ============================================================================
  @Column({ type: 'varchar', length: 255, unique: true, comment: 'Work email' })
  email!: string;

  @Column({ name: 'personal_email', type: 'varchar', length: 255, nullable: true })
  personalEmail!: string | null;

  @Column({ type: 'varchar', length: 20 })
  phone!: string;

  @Column({ name: 'emergency_contact_name', type: 'varchar', length: 200 })
  emergencyContactName!: string;

  @Column({ name: 'emergency_contact_phone', type: 'varchar', length: 20 })
  emergencyContactPhone!: string;

  @Column({ name: 'emergency_contact_relation', type: 'varchar', length: 100 })
  emergencyContactRelation!: string;

  // ============================================================================
  // Address Information
  // ============================================================================
  @Column({ type: 'varchar', length: 255, nullable: true })
  street!: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  city!: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  region!: string | null;

  @Column({ name: 'postal_code', type: 'varchar', length: 20, nullable: true })
  postalCode!: string | null;

  @Column({ type: 'varchar', length: 100, default: 'Saudi Arabia' })
  country!: string;

  // ============================================================================
  // Employment Information
  // ============================================================================
  @ManyToOne(() => DepartmentEntity, (department) => department.employees)
  @JoinColumn({ name: 'department_id' })
  department!: DepartmentEntity;

  @Column({ name: 'department_id', type: 'uuid' })
  departmentId!: string;

  @ManyToOne(() => PositionEntity, (position) => position.employees)
  @JoinColumn({ name: 'position_id' })
  position!: PositionEntity;

  @Column({ name: 'position_id', type: 'uuid' })
  positionId!: string;

  // Manager (self-reference)
  @ManyToOne(() => EmployeeEntity, (employee) => employee.subordinates, { nullable: true })
  @JoinColumn({ name: 'manager_id' })
  manager!: EmployeeEntity | null;

  @Column({ name: 'manager_id', type: 'uuid', nullable: true })
  managerId!: string | null;

  @OneToMany(() => EmployeeEntity, (employee) => employee.manager)
  subordinates!: EmployeeEntity[];

  @Column({ name: 'hire_date', type: 'date' })
  hireDate!: Date;

  @Column({
    name: 'contract_type',
    type: 'enum',
    enum: ContractType,
    default: ContractType.FULL_TIME,
  })
  contractType!: ContractType;

  @Column({ name: 'contract_start_date', type: 'date' })
  contractStartDate!: Date;

  @Column({ name: 'contract_end_date', type: 'date', nullable: true })
  contractEndDate!: Date | null;

  @Column({ name: 'work_location', type: 'varchar', length: 255, nullable: true })
  workLocation!: string | null;

  @Column({
    name: 'employment_status',
    type: 'enum',
    enum: EmploymentStatus,
    default: EmploymentStatus.ACTIVE,
  })
  employmentStatus!: EmploymentStatus;

  @Column({ name: 'termination_date', type: 'date', nullable: true })
  terminationDate!: Date | null;

  @Column({ name: 'termination_reason', type: 'text', nullable: true })
  terminationReason!: string | null;

  // ============================================================================
  // Compensation
  // ============================================================================
  @Column({
    name: 'basic_salary',
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'Monthly salary in SAR',
  })
  basicSalary!: number;

  @Column({
    name: 'housing_allowance',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  housingAllowance!: number;

  @Column({
    name: 'transportation_allowance',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  transportationAllowance!: number;

  @Column({
    name: 'other_allowances',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  otherAllowances!: number;

  // ============================================================================
  // Bank Information (Encrypted in production)
  // ============================================================================
  @Column({ name: 'bank_name', type: 'varchar', length: 255, nullable: true })
  bankName!: string | null;

  @Column({
    name: 'bank_account_number',
    type: 'varchar',
    length: 255,
    nullable: true,
    comment: 'Should be encrypted in production',
  })
  bankAccountNumber!: string | null;

  @Column({ type: 'varchar', length: 34, nullable: true, comment: 'IBAN format' })
  iban!: string | null;

  // ============================================================================
  // User Account Relation
  // ============================================================================
  @OneToOne(() => UserEntity, (user) => user.employee, { nullable: true })
  user!: UserEntity | null;

  // ============================================================================
  // Additional Information
  // ============================================================================
  @Column({ name: 'profile_picture_url', type: 'varchar', length: 500, nullable: true })
  profilePictureUrl!: string | null;

  @Column({ type: 'jsonb', nullable: true, comment: 'Additional custom fields' })
  metadata!: Record<string, any> | null;

  @Column({ type: 'text', nullable: true })
  notes!: string | null;

  // ============================================================================
  // Computed Properties
  // ============================================================================
  get fullNameAr(): string {
    return `${this.firstNameAr} ${this.lastNameAr}`;
  }

  get fullNameEn(): string | null {
    if (!this.firstNameEn || !this.lastNameEn) return null;
    return `${this.firstNameEn} ${this.lastNameEn}`;
  }

  get totalSalary(): number {
    return (
      Number(this.basicSalary) +
      Number(this.housingAllowance) +
      Number(this.transportationAllowance) +
      Number(this.otherAllowances)
    );
  }

  get age(): number {
    const today = new Date();
    const birthDate = new Date(this.dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  get yearsOfService(): number {
    const today = new Date();
    const hire = new Date(this.hireDate);
    let years = today.getFullYear() - hire.getFullYear();
    const monthDiff = today.getMonth() - hire.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < hire.getDate())) {
      years--;
    }
    return years;
  }

  // ============================================================================
  // Lifecycle Hooks
  // ============================================================================
  @BeforeInsert()
  async generateEmployeeNumber() {
    if (!this.employeeNumber) {
      const year = new Date().getFullYear();
      const random = Math.floor(Math.random() * 9000) + 1000;
      this.employeeNumber = `EMP-${year}-${random}`;
    }
  }

  @BeforeInsert()
  setContractStartDate() {
    if (!this.contractStartDate) {
      this.contractStartDate = this.hireDate;
    }
  }
}
