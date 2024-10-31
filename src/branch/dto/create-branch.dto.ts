import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBranchsDto {
  @ApiProperty({
    description: 'The name of the branch',
    example: 'ជ្រៃផ្សារ',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The address of the branch',
    example: 'ជ្រៃផ្សារ',
  })
  @IsString()
  @IsNotEmpty()
  villageName: string;

  @ApiProperty({
    description: 'The address of the branch',
    example: 'ជ្រៃ',
  })
  @IsString()
  @IsNotEmpty()
  communeName: string;

  @ApiProperty({
    description: 'The address of the branch',
    example: 'ស្វាយអន្ទរ',
  })
  @IsString()
  @IsNotEmpty()
  districtName: string;

  @ApiProperty({
    description: 'The address of the branch',
    example: 'ព្រៃវែង',
  })
  @IsString()
  @IsNotEmpty()
  provinceName: string;

  @ApiProperty({ description: 'Indicates whether the branch is active', example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @ApiProperty({
    description: 'The ID of the employee managing the branch',
    example: 1,
    nullable: true,
  })
  @IsNumber()
  @IsOptional()
  branchManager?: number;

  @ApiProperty({
    description: 'The ID of the user who created this record',
    example: 4,
  })
  @IsNumber()
  @IsNotEmpty()
  created_By: number;

  @ApiProperty({
    description: 'The ID of the user who last updated this record',
    example: 4,
  })
  @IsNumber()
  @IsNotEmpty()
  updated_By: number;
}
