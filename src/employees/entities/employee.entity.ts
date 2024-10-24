import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Position } from 'src/positions/entities/position.entity';
import { User } from 'src/users/entities/user.entity';
import { Branch } from 'src/branch/entities/branch.entity';

@Entity()
export class Employee {
  @ApiProperty({ example: 1, description: 'The unique identifier of the employee' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'John', description: 'The first name of the employee' })
  @Column()
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'The last name of the employee' })
  @Column()
  lastName: string;

  @ApiProperty({ example: 'johndoe@example.com', description: 'The email of the employee' })
  @Column()
  email: string;

  @ApiProperty({ example: 5000, description: 'The base salary for the employee' })
  @Column('decimal', { precision: 10, scale: 2 }) 
  baseSalary: number;

  @ApiProperty({ example: '0123456789', description: 'The primary phone number of the employee' })
  @Column()
  phone1: string;

  @ApiProperty({ example: '0987654321', description: 'The secondary phone number of the employee (optional)' })
  @Column({ nullable: true })
  phone2: string;

  @ApiProperty({ example: 'EMP001', description: 'The unique employee ID' })
  @Column({ unique: true })
  employeeId: string;

  @ApiProperty({ example: '1990-01-01', description: 'The date of birth of the employee' })
  @Column()
  dateOfBirth: Date;

  @ApiProperty({ example: '2023-01-01', description: 'The hire date of the employee' })
  @Column()
  hireDate: Date;

  @ApiProperty({ example: 'Male', description: 'The gender of the employee' })
  @Column()
  gender: string;

  @ApiProperty({ example: 'Village A', description: 'The village name where the employee resides' })
  @Column()
  villageName: string;

  @ApiProperty({ example: 'Commune B', description: 'The commune name where the employee resides' })
  @Column()
  communeName: string;

  @ApiProperty({ example: 'District C', description: 'The district name where the employee resides' })
  @Column()
  districtName: string;

  @ApiProperty({ example: 'Province D', description: 'The province name where the employee resides' })
  @Column()
  provinceName: string;

  @ApiProperty({ example: true, description: 'The status of the employee' })
  @Column()
  status: boolean;

  
  @ApiProperty({ example: true, description: 'Blacklist status of the employee' })
  @Column()
  blackList: boolean;

  @ManyToOne(() => Branch)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;

  @ManyToOne(() => Position)
  @JoinColumn({ name: 'position_id' })
  position: Position;

  // Lazy-loaded relations to avoid circular dependency issues
  @ManyToOne(() => User, { lazy: true })
  @JoinColumn({ name: 'user_id' })
  user: Promise<User>;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, { lazy: true, nullable: false })
  @JoinColumn({ name: 'createdBy' })
  createBy: Promise<User>;

  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ description: 'The user who last updated the employee record' })
  @ManyToOne(() => User, { lazy: true })
  @JoinColumn({ name: 'updatedBy' })
  updated_By: Promise<User>;
}
