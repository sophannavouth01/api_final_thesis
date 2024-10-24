import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/roles/entities/role.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Branch } from 'src/branch/entities/branch.entity';

@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'The unique identifier of the user' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Supper Admin', description: 'The username of the user' })
  @Column({ unique: true })
  username: string;

  @ApiProperty({ example: 'SuperAdmin@123', description: 'The password of the user' })
  @Column()
  password: string;

  @ApiProperty({ example: 'Superadmin@example.com', description: 'The email of the user' })
  @Column()
  email: string;

  @ApiProperty({ example: 'SuperAdmin@123', description: 'The confirm password of the user' })
  @Column()
  confirmPassword: string;

  @ApiProperty({ example: true, description: 'Whether the user is allowed to reset their password' })
  @Column({ default: true })
  allowResetPassword: boolean;

  @ApiProperty({ example: true, description: 'Whether the user is active' })
  @Column({ default: true })
  active: boolean;

  @ApiProperty({ example: '2024-10-24T08:01:14.489Z', description: 'The date when the user was created' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_At: Date;

  @ApiProperty({ example: 'admin', description: 'The username who created the user' })
  @Column()
  created_By: string;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @ApiProperty({ example: 1, description: 'The ID of the branch associated with the user' })
  @ManyToOne(() => Branch)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch; // Assuming a Branch entity exists and is related to User
}
