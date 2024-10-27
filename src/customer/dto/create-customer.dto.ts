import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsOptional, IsString, IsBoolean, IsNumber, IsInt } from 'class-validator';

export class CreateCustomerDto {
    @ApiProperty({ example: 'John', description: 'The first name of the customer' })
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({ example: 'Doe', description: 'The last name of the customer' })
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({ example: 'Johnny', description: 'The English name of the customer' })
    @IsString()
    @IsOptional()
    enName: string;
    
    @ApiProperty({ description: 'The gender of the employee', example: 'Male' })
    @IsString()
    @IsNotEmpty()
    gender: string;
    @ApiProperty({ example: '1990-01-01', description: 'The date of birth of the customer' })
    @IsDateString()
    @IsNotEmpty()
    dateOfBirth: string;

    @ApiProperty({ example: 'Single', description: 'Marital status of the customer' })
    @IsString()
    @IsNotEmpty()
    marriedStatus: string;

    @ApiProperty({ example: '123456789', description: 'The primary phone number of the customer' })
    @IsString()
    @IsNotEmpty()
    phone1: string;

    @ApiProperty({ example: '987654321', description: 'The secondary phone number of the customer (optional)' })
    @IsString()
    @IsOptional()
    phone2: string;

    @ApiProperty({ example: 1, description: 'The ID of the position for the customer' })
    @IsNumber()
    @IsNotEmpty()
    positionId: number;

    @ApiProperty({ example: 1, description: 'The ID of the branch' })
    @IsInt()
    @IsNotEmpty()
    branchId: number;

    
    @ApiProperty({ example: 1, description: 'The ID of the agent' })
    @IsInt()
    @IsNotEmpty()
    agentId: number;
    
    @ApiProperty({ example: 'Village A', description: 'The village name of the customer' })
    @IsString()
    @IsNotEmpty()
    villageName: string;

    @ApiProperty({ example: 'Commune B', description: 'The commune name of the customer' })
    @IsString()
    @IsNotEmpty()
    communeName: string;

    @ApiProperty({ example: 'District C', description: 'The district name of the customer' })
    @IsString()
    @IsNotEmpty()
    districtName: string;

    @ApiProperty({ example: 'Province D', description: 'The province name of the customer' })
    @IsString()
    @IsNotEmpty()
    provinceName: string;

    @ApiProperty({ example: true, description: 'The status of the customer' })
    @IsBoolean()
    @IsOptional()
    status: boolean;

    @ApiProperty({ example: 1, description: 'ID of the user who created the record' })
    @IsNotEmpty()
    created_By: number;

    @ApiProperty({ example: 1, description: 'ID of the user who updated the record' })
    @IsNotEmpty()
    updated_By: number;
}
