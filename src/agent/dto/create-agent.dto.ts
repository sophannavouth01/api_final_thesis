import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsNumber, IsOptional, IsNotEmpty, IsInt, IsDateString, IsBoolean, IsEmail } from 'class-validator';

export class CreateAgentDto {
  @ApiProperty({ description: 'The first name of the agent', example: 'John' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ description: 'The last name of the agent', example: 'Doe' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ description: 'The English name of the agent', example: 'Doe' })
  @IsString()
  @IsOptional()
  enName: string;

  @ApiProperty({ description: 'The email of the agent', example: 'johndoe@gmail.com' })
  @IsEmail()
  @IsOptional()
  email: string;


  @ApiProperty({ example: 'Single', description: 'Marital status of the customer' })
  @IsString()
  @IsNotEmpty()
  marriedStatus: string;
  
  @ApiProperty({ description: 'The date of birth of the agent', example: '1990-01-01',
  })
  @IsDate()
  @IsNotEmpty()
  dateOfBirth: Date;

  @ApiProperty({ description: 'The gender of the agent', example: 'ប្រុស' })
  @IsString()
  @IsNotEmpty()
  gender: string;
  
  @ApiProperty({ example: 5000, description: 'The commission percentage for the agent' })
  @IsNumber()
  @IsNotEmpty()
  commission: number;

  @ApiProperty({ example: '123456789', description: 'The primary phone number of the agent' })
  @IsString()
  @IsNotEmpty()
  phone1: string;

  @ApiProperty({ example: '987654321', description: 'The secondary phone number of the agent (optional)' })
  @IsString()
  @IsOptional()
  phone2?: string;

  @ApiProperty({ example: 1, description: 'The ID of the position' })
  @IsInt()
  @IsNotEmpty()
  positionId: number;

  @ApiProperty({ example: 1, description: 'The ID of the branch' })
  @IsInt()
  @IsNotEmpty()
  branchId: number;

  @ApiProperty({ example: 'Village A', description: 'The village name where the agent resides' })
  @IsString()
  @IsNotEmpty()
  villageName: string;

  @ApiProperty({ example: 'Commune B', description: 'The commune name where the agent resides' })
  @IsString()
  @IsNotEmpty()
  communeName: string;

  @ApiProperty({ example: 'District C', description: 'The district name where the agent resides' })
  @IsString()
  @IsNotEmpty()
  districtName: string;

  @ApiProperty({ example: 'Province D', description: 'The province name where the agent resides' })
  @IsString()
  @IsNotEmpty()
  provinceName: string;

  @ApiProperty({ example: true, description: 'The current status of the agent' })
  @IsBoolean()  // Use boolean validator
  @IsNotEmpty()
  status: boolean;  // Change type to boolean

  @ApiProperty({
    description: 'ID of the user who created this miller',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  created_By: number;

  @ApiProperty({
    description: 'ID of the user who last updated this miller',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  updated_By: number;
}
