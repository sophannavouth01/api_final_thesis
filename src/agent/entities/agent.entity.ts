import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { ApiProperty } from '@nestjs/swagger';
  import { Position } from 'src/positions/entities/position.entity'; // Assuming you have a Position entity
  import { User } from 'src/users/entities/user.entity'; // Assuming you have a User entity
import { Branch } from 'src/branch/entities/branch.entity';
  
  @Entity()
  export class Agent {
    @ApiProperty({ example: 1, description: 'The unique identifier of the agent' })
    @PrimaryGeneratedColumn()
    id: number;
  
    @ApiProperty({ example: 'John Doe', description: 'The name of the agent' })
    @Column()
    name: string;
  
    @ApiProperty({ description: 'The gender of the employee', example: 'Male' })
    @Column()
    gender: string;
    
    @ApiProperty({ example: '1990-01-01', description: 'The date of birth of the employee' })
    @Column()
    dateOfBirth: Date;
  
    @ApiProperty({ example: 5000, description: 'The commission percentage for the agent' })
    @Column('decimal', { precision: 10, scale: 2 })  // Increase precision, keep scale for decimal points
    commission: number;
  
    @ApiProperty({ example: '123456789', description: 'The primary phone number of the agent' })
    @Column()
    phone1: string;
  
    @ApiProperty({ example: '987654321', description: 'The secondary phone number of the agent (optional)' })
    @Column({ nullable: true })
    phone2: string;
  
    @ApiProperty({ example: '123123123', description: 'The tertiary phone number of the agent (optional)' })
    @Column({ nullable: true })
    phone3: string;
  
    @ApiProperty({ example: 'Manager', description: 'The position of the agent' })
    @ManyToOne(() => Position)
    @JoinColumn({ name: 'position_id' })
    position: Position;
  
    @ApiProperty({ example: 'Branch Name', description: 'The branch associated with the agent' })
    @ManyToOne(() => Branch)
    @JoinColumn({ name: 'branch_id' })
    branch: Branch;
  
    @ApiProperty({ example: 'Village A', description: 'The village name where the agent resides' })
    @Column()
    villageName: string;
  
    @ApiProperty({ example: 'Commune B', description: 'The commune name where the agent resides' })
    @Column()
    communeName: string;
  
    @ApiProperty({ example: 'District C', description: 'The district name where the agent resides' })
    @Column()
    districtName: string;
  
    @ApiProperty({ example: 'Province D', description: 'The province name where the agent resides' })
    @Column()
    provinceName: string;
  
    @ApiProperty({ example: true, description: 'The current status of the agent' })
    @Column({ type: 'boolean', default: true })  // Ensure status is stored as a boolean
    status: boolean;
  
    @ApiProperty({ description: 'The timestamp when the agent was created' })
    @CreateDateColumn()
    createdAt: Date;
  
    @ApiProperty({ description: 'The timestamp when the agent was last updated' })
    @UpdateDateColumn()
    updatedAt: Date;
  
    @ApiProperty({ description: 'The user who created the agent record' })
    @ManyToOne(() => User)
    @JoinColumn({ name: 'createdBy' })
    created_By: User;
  
    @ApiProperty({ description: 'The user who last updated the agent record' })
    @ManyToOne(() => User)
    @JoinColumn({ name: 'updatedBy' })
    updated_By: User;
  }
  