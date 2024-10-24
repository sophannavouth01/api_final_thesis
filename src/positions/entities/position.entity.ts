import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Employee } from 'src/employees/entities/employee.entity';

@Entity()
export class Position {
    @ApiProperty({ example: 1, description: 'The unique identifier of the Position' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Top User', description: 'The name of the Position' })
    @Column()
    name: string;

    @ApiProperty({ example: 'Has full access to the system', description: 'A brief description of the Position' })
    @Column()
    description: string;

    @ApiProperty({ example: true, description: 'The status of the Position (active/inactive)' })
    @Column()
    status: boolean;

    
    @OneToMany(() => Employee, (employee) => employee.position)
    employees: Employee[];
}
