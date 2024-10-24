import { IsString, IsEmail, IsOptional, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeDto {
  @ApiProperty({ description: 'The first name of the employee', example: 'John', required: false })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({ description: 'The last name of the employee', example: 'Doe', required: false })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({ description: 'The email of the employee', example: 'john.doe@example.com', required: false })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ description: 'The phone number of the employee', example: '012345678', required: false })
  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @ApiProperty({ description: 'The unique employee ID', example: 'EMP001', required: false })
  @IsString()
  @IsOptional()
  employeeId?: string;

  @ApiProperty({ description: 'The date of birth of the employee', example: '1990-01-01', required: false })
  @IsDate()
  @IsOptional()
  dateOfBirth?: Date;

  @ApiProperty({ description: 'The hire date of the employee', example: '2023-01-01', required: false })
  @IsDate()
  @IsOptional()
  hireDate?: Date;

  @ApiProperty({ description: 'The gender of the employee', example: 'Male', required: false })
  @IsString()
  @IsOptional()
  gender?: string;

  @ApiProperty({ description: 'The position ID where the employee works', example: 3, required: false })
  @IsNumber()
  @IsOptional()
  position_id?: number;

  @ApiProperty({ description: 'The user ID associated with the employee', example: 4, required: false })
  @IsNumber()
  @IsOptional()
  user_id?: number;

  @ApiProperty({ description: 'The ID of the user who last updated this record', example: 9, required: false })
  @IsNumber()
  @IsOptional()
  updatedBy?: number;  // <-- Add this field to fix the issue
}
