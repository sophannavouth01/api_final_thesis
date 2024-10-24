import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Position } from 'src/positions/entities/position.entity';
import { User } from 'src/users/entities/user.entity';
import { Branch } from 'src/branch/entities/branch.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column('decimal', { precision: 10, scale: 2 }) 
  baseSalary: number;

  @Column()
  phone1: string;

  @Column({ nullable: true })
  phone2: string;

  @Column({ unique: true })
  employeeId: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  hireDate: Date;

  @Column()
  gender: string;

  @Column()
  villageName: string;

  @Column()
  communeName: string;

  @Column()
  districtName: string;

  @Column()
  provinceName: string;

  @Column()
  status: boolean;

  @Column()
  blackList: boolean;

  @ManyToOne(() => Branch, { eager: true })
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;

  @ManyToOne(() => Position, { eager: true })
  @JoinColumn({ name: 'position_id' })
  position: Position;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'created_By' })
  create_By: User;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'updated_By' })
  updated_By: User;
}
