import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Role {
  @ApiProperty({ example: 1, description: 'The unique identifier of the role' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Admin', description: 'The name of the role' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Has full access to the system', description: 'A brief description of the role' })
  @Column()
  description: string;

  @ApiProperty({ example: true, description: 'The status of the role (active/inactive)' })
  @Column()
  status: boolean;
}
