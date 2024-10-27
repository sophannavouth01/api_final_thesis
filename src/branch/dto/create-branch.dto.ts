
import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBranchsDto {
  @ApiProperty({
    description: 'The name of the branch',
    example: 'Headquarters',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The address of the branch',
    example: '123 Main St',
  })
  @IsString()
  @IsNotEmpty()
  villageName: string;

  @ApiProperty({
    description: 'The address of the branch',
    example: '123 Main St',
  })
  @IsString()
  @IsNotEmpty()
  communeName: string;

  @ApiProperty({
    description: 'The address of the branch',
    example: '123 Main St',
  })
  @IsString()
  @IsNotEmpty()
  districtName: string;

  @ApiProperty({
    description: 'The address of the branch',
    example: '123 Main St',
  })
  @IsString()
  @IsNotEmpty()
  provinceName: string;

  @ApiProperty({ description: 'Indicates whether the user is active', example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @ApiProperty({
    description: 'The Branch  ID of the user who created this record',
    example: 9,
  })
  @IsNumber()
  @IsNotEmpty()
  branchManager: number;

  @ApiProperty({
    description: 'The ID of the user who created this record',
    example: 9,
  })
  @IsNumber()
  @IsNotEmpty()
  created_By: number;

  @ApiProperty({
    description: 'The ID of the user who created this record',
    example: 9,
  })
  @IsNumber()
  @IsNotEmpty()
  updated_By: number;
 
}
