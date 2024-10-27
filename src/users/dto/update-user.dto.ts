import { IsString, IsEmail, IsBoolean, IsOptional, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UpdateUserDto {
  @ApiProperty({ description: 'The username of the user', example: 'Super Admin' })
  @IsString()
  @IsOptional()
  username?: string;

  @ApiProperty({ description: 'The email of the user', example: 'superadmin@example.com' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ description: 'The ID of the role assigned to the user', example: 1 })
  @IsNumber()
  @IsOptional()
  role_id?: number;

  @ApiProperty({ description: 'The ID of the employee associated with the user', example: 1 })
  @IsNumber()
  @IsOptional()
  employee_id?: number;

  @ApiProperty({ description: 'The ID of the branch associated with the user', example: 1 })
  @IsNumber()
  @IsOptional()
  branch_id?: number;

  @ApiProperty({ description: 'Indicates whether the user is allowed to reset their password', example: true })
  @IsBoolean()
  @IsOptional()
  allowResetPassword?: boolean;

  @ApiProperty({ description: 'Indicates whether the user is active', example: true })
  @IsBoolean()
  @IsOptional()
  active?: boolean;

  @ApiProperty({ description: 'The user who last updated this account', example: 1 })
  @IsNumber()
  @IsOptional()
  updated_By?: number;

  @ApiProperty({ description: 'The date the user was created', example: '2024-10-24T08:01:14.489Z' })
  @IsOptional()
  @Type(() => Date)
  createdAt?: Date;
}
