import { Entity, Column, Index, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { DepartmentEntity } from './department.entity';
import { EmployeeEntity } from './employee.entity';

export enum PositionLevel {
  ENTRY = 1,
  MID = 2,
  SENIOR = 3,
  LEAD = 4,
  MANAGER = 5,
  DIRECTOR = 6,
  EXECUTIVE = 7,
}

export enum PositionStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

@Entity('positions')
@Index(['departmentId'])
export class PositionEntity extends BaseEntity {
  @Column({ name: 'title_ar', type: 'varchar', length: 255 })
  titleAr!: string;

  @Column({ name: 'title_en', type: 'varchar', length: 255, nullable: true })
  titleEn!: string | null;

  @Column({ type: 'varchar', length: 50, unique: true })
  code!: string;

  @Column({ type: 'text', nullable: true })
  description!: string | null;

  // Department relation
  @ManyToOne(() => DepartmentEntity, (department) => department.positions)
  @JoinColumn({ name: 'department_id' })
  department!: DepartmentEntity;

  @Column({ name: 'department_id', type: 'uuid' })
  departmentId!: string;

  // Hierarchy level
  @Column({
    type: 'int',
    comment: '1=Entry, 2=Mid, 3=Senior, 4=Lead, 5=Manager, 6=Director, 7=Executive',
  })
  level!: PositionLevel;

  // Salary bands (in SAR - Saudi Riyal)
  @Column({ name: 'min_salary', type: 'decimal', precision: 10, scale: 2, nullable: true })
  minSalary!: number | null;

  @Column({ name: 'max_salary', type: 'decimal', precision: 10, scale: 2, nullable: true })
  maxSalary!: number | null;

  @Column({
    type: 'enum',
    enum: PositionStatus,
    default: PositionStatus.ACTIVE,
  })
  status!: PositionStatus;

  // Employees in this position
  @OneToMany(() => EmployeeEntity, (employee) => employee.position)
  employees!: EmployeeEntity[];

  // Metadata
  @Column({ name: 'employee_count', type: 'int', default: 0 })
  employeeCount!: number;

  @Column({ name: 'required_skills', type: 'jsonb', nullable: true })
  requiredSkills!: string[] | null;

  @Column({ name: 'responsibilities', type: 'jsonb', nullable: true })
  responsibilities!: string[] | null;

  @Column({ type: 'jsonb', nullable: true })
  metadata!: Record<string, any> | null;

  // Helper method to check if salary is within range
  isWithinSalaryRange(salary: number): boolean {
    if (!this.minSalary || !this.maxSalary) return true;
    return salary >= this.minSalary && salary <= this.maxSalary;
  }

  // Get position level name
  getLevelName(): string {
    const levelNames = {
      [PositionLevel.ENTRY]: 'Entry Level',
      [PositionLevel.MID]: 'Mid Level',
      [PositionLevel.SENIOR]: 'Senior Level',
      [PositionLevel.LEAD]: 'Lead',
      [PositionLevel.MANAGER]: 'Manager',
      [PositionLevel.DIRECTOR]: 'Director',
      [PositionLevel.EXECUTIVE]: 'Executive',
    };
    return levelNames[this.level] || 'Unknown';
  }
}
