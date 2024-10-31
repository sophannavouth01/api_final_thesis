import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Entity()
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  villageName: string;

  @Column()
  communeName: string;

  @Column()
  districtName: string;

  @Column()
  provinceName: string;

  @Column({ default: true })
  status: boolean;

  // Nullable relationship with Employee for branchManager
  @ManyToOne(() => Employee, { nullable: true })
  @JoinColumn({ name: 'branch_manager' })
  branchManager: Employee | null;

  // Relationship with User for created_By
  @ManyToOne(() => User)
  @JoinColumn({ name: 'created_By' })
  created_By: User;

  // Relationship with User for updated_By
  @ManyToOne(() => User)
  @JoinColumn({ name: 'updated_By' })
  updated_By: User;
}
