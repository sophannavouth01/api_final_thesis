import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Position } from 'src/positions/entities/position.entity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Branch } from 'src/branch/entities/branch.entity';
import { Agent } from 'src/agent/entities/agent.entity'; // Corrected import

@Entity()
export class Customer {
    @ApiProperty({ example: 1, description: 'The unique identifier of the customer' })
    @PrimaryGeneratedColumn()
    id: number;
  
    @ApiProperty({ example: 'John', description: 'The first name of the customer' })
    @Column()
    firstName: string;

    @ApiProperty({ example: 'Doe', description: 'The last name of the customer' })
    @Column()
    lastName: string;

    @ApiProperty({ example: 'Johnny', description: 'The English name of the customer' })
    @Column()
    enName: string;

    @ApiProperty({ description: 'The gender of the employee', example: 'Male' })
    @Column()
    gender: string;

    @ApiProperty({ example: '1990-01-01', description: 'The date of birth of the customer' })
    @Column()
    dateOfBirth: Date;

    @ApiProperty({ example: 'Single', description: 'Marital status of the customer' })
    @Column()
    marriedStatus: string;
  
    @ApiProperty({ example: '123456789', description: 'The primary phone number of the customer' })
    @Column()
    phone1: string;
  
    @ApiProperty({ example: '987654321', description: 'The secondary phone number of the customer (optional)' })
    @Column({ nullable: true })
    phone2: string;
  
    @ApiProperty({ example: 'Manager', description: 'The position of the customer' })
    @ManyToOne(() => Position)
    @JoinColumn({ name: 'position_id' })
    position: Position;

    @ApiProperty({ example: 'Branch Name', description: 'The branch associated with the customer' })
    @ManyToOne(() => Branch)
    @JoinColumn({ name: 'branch_id' })
    branch: Branch;
    
    @ApiProperty({ example: 'Agent Name', description: 'The agent associated with the customer' })
    @ManyToOne(() => Agent)
    @JoinColumn({ name: 'agent_id' })
    agent: Agent;

    @ApiProperty({ example: 'Village A', description: 'The village where the customer resides' })
    @Column()
    villageName: string;
  
    @ApiProperty({ example: 'Commune B', description: 'The commune where the customer resides' })
    @Column()
    communeName: string;
  
    @ApiProperty({ example: 'District C', description: 'The district where the customer resides' })
    @Column()
    districtName: string;
  
    @ApiProperty({ example: 'Province D', description: 'The province where the customer resides' })
    @Column()
    provinceName: string;
  
    @ApiProperty({ example: true, description: 'The current status of the customer' })
    @Column({ type: 'boolean', default: true })
    status: boolean;
  
    @ApiProperty({ description: 'Timestamp when the customer was created' })
    @CreateDateColumn()
    createdAt: Date;
  
    @ApiProperty({ description: 'Timestamp when the customer was last updated' })
    @UpdateDateColumn()
    updatedAt: Date;
  
    @ApiProperty({ description: 'User who created the customer record' })
    @ManyToOne(() => User)
    @JoinColumn({ name: 'createdBy' })
    created_By: User;
  
    @ApiProperty({ description: 'User who last updated the customer record' })
    @ManyToOne(() => User)
    @JoinColumn({ name: 'updatedBy' })
    updated_By: User;
}
