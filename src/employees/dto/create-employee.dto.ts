import { IsString, IsEmail, IsNotEmpty, IsDate, IsOptional, IsNumber, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({ description: 'The first name of the employee', example: 'John' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ description: 'The last name of the employee', example: 'Doe' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ description: 'The email of the employee', example: 'johndoe@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'The primary phone number of the employee', example: '012345678' })
  @IsString()
  @IsNotEmpty()
  phone1: string;

  @ApiProperty({ description: 'The secondary phone number of the employee', example: '0987654321', required: false })
  @IsString()
  @IsOptional()
  phone2?: string;

  @ApiProperty({ description: 'The unique employee ID', example: '001' })
  @IsString()
  @IsNotEmpty()
  employeeId: string;

  @ApiProperty({ description: 'The base salary of the employee', example: 5000 })
  @IsNumber()
  @IsNotEmpty()
  baseSalary: number;

  @ApiProperty({ description: 'The date of birth of the employee', example: '1990-01-01' })
  @IsDate()
  @IsNotEmpty()
  dateOfBirth: Date;

  @ApiProperty({ description: 'The hire date of the employee', example: '2023-01-01' })
  @IsDate()
  @IsNotEmpty()
  hireDate: Date;

  @ApiProperty({ description: 'The gender of the employee', example: 'Male' })
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty({ description: 'The village name where the employee resides', example: 'Village A' })
  @IsString()
  @IsNotEmpty()
  villageName: string;

  @ApiProperty({ description: 'The commune name where the employee resides', example: 'Commune B' })
  @IsString()
  @IsNotEmpty()
  communeName: string;

  @ApiProperty({ description: 'The district name where the employee resides', example: 'District C' })
  @IsString()
  @IsNotEmpty()
  districtName: string;

  @ApiProperty({ description: 'The province name where the employee resides', example: 'Province D' })
  @IsString()
  @IsNotEmpty()
  provinceName: string;

  @ApiProperty({ description: 'The status of the employee', example: false })
  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @ApiProperty({ description: 'The blacklist status of the employee', example: false })
  @IsBoolean()
  @IsNotEmpty()
  blackList: boolean;

  @ApiProperty({ description: 'The position ID where the employee works', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  position_id: number;

  @ApiProperty({ description: 'The branch ID where the employee is assigned', example: 3 })
  @IsNumber()
  @IsNotEmpty()
  branch_id: number;

  @ApiProperty({ description: 'The user ID associated with the employee (optional)', example: 1})
  @IsNumber()
  @IsOptional()
  user_id?: number;

  @ApiProperty({ description: 'The ID of the user who created this record', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  created_By: number;

  @ApiProperty({ description: 'The ID of the user who update this record', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  updated_By: number;
}
