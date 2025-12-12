import {
  Entity,
  Column,
  Index,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Tree,
  TreeParent,
  TreeChildren,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { EmployeeEntity } from './employee.entity';
import { PositionEntity } from './position.entity';

export enum DepartmentStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

@Entity('departments')
@Tree('closure-table')
@Index(['code'], { unique: true })
@Index(['parentId'])
export class DepartmentEntity extends BaseEntity {
  @Column({ name: 'name_ar', type: 'varchar', length: 255 })
  nameAr!: string;

  @Column({ name: 'name_en', type: 'varchar', length: 255, nullable: true })
  nameEn!: string | null;

  @Column({ type: 'varchar', length: 50, unique: true })
  code!: string;

  @Column({ type: 'text', nullable: true })
  description!: string | null;

  @Column({
    type: 'enum',
    enum: DepartmentStatus,
    default: DepartmentStatus.ACTIVE,
  })
  status!: DepartmentStatus;

  // Manager relation
  @ManyToOne(() => EmployeeEntity, { nullable: true })
  @JoinColumn({ name: 'manager_id' })
  manager!: EmployeeEntity | null;

  @Column({ name: 'manager_id', type: 'uuid', nullable: true })
  managerId!: string | null;

  // Hierarchy relations using Tree pattern
  @TreeParent()
  parent!: DepartmentEntity | null;

  @Column({ name: 'parent_id', type: 'uuid', nullable: true })
  parentId!: string | null;

  @TreeChildren()
  children!: DepartmentEntity[];

  // Employees in this department
  @OneToMany(() => EmployeeEntity, (employee) => employee.department)
  employees!: EmployeeEntity[];

  // Positions in this department
  @OneToMany(() => PositionEntity, (position) => position.department)
  positions!: PositionEntity[];

  // Metadata
  @Column({ name: 'employee_count', type: 'int', default: 0 })
  employeeCount!: number;

  @Column({ type: 'jsonb', nullable: true })
  metadata!: Record<string, any> | null;
}
