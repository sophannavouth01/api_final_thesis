import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/roles/entities/role.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'The unique identifier of the user' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'johndoe', description: 'The username of the user' })
  @Column({ unique: true })
  username: string;

  @ApiProperty({ example: 'strongPassword123', description: 'The password of the user' })
  @Column()
  password: string;

  @ApiProperty({ example: 'johndoe@example.com', description: 'The email of the user' })
  @Column()
  email: string;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;
}
