import { IsString, IsNotEmpty, IsBoolean, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMillerDto {
  @ApiProperty({
    description: 'The name of the miller',
    example: 'Miller HQ',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Primary phone number of the miller',
    example: '0123456789',
  })
  @IsString()
  @IsNotEmpty()
  phone1: string;

  @ApiProperty({
    description: 'Secondary phone number of the miller',
    example: '0987654321',
    required: false,
  })
  @IsString()
  @IsOptional()
  phone2?: string;

  @ApiProperty({
    description: 'Tertiary phone number of the miller',
    example: '0111234567',
    required: false,
  })
  @IsString()
  @IsOptional()
  phone3?: string;

  @ApiProperty({
    description: 'Village name where the miller is located',
    example: 'Baray Kert',
  })
  @IsString()
  @IsNotEmpty()
  villageName: string;

  @ApiProperty({
    description: 'Commune name where the miller is located',
    example: 'Baray',
  })
  @IsString()
  @IsNotEmpty()
  communeName: string;

  @ApiProperty({
    description: 'District name where the miller is located',
    example: 'Prey Veng',
  })
  @IsString()
  @IsNotEmpty()
  districtName: string;

  @ApiProperty({
    description: 'Province name where the miller is located',
    example: 'Prey Veng',
  })
  @IsString()
  @IsNotEmpty()
  provinceName: string;

  @ApiProperty({
    description: 'The status of the miller (active/inactive)',
    example: false,
  })
  @IsBoolean()
  @IsOptional()
  status?: boolean = false;  // Default to true (active)

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
