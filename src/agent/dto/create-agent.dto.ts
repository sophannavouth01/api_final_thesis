import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsNumber, IsOptional, IsNotEmpty, IsInt, IsDateString, IsBoolean } from 'class-validator';

export class CreateAgentDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the agent' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'The date of birth of the employee', example: '1990-01-01',
  })
  @IsDate()
  @IsNotEmpty()
  dateOfBirth: Date;


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

  @ApiProperty({ example: '123123123', description: 'The tertiary phone number of the agent (optional)' })
  @IsString()
  @IsOptional()
  phone3?: string;

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
