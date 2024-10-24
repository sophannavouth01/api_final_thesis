import { IsString, IsEmail, IsNotEmpty, IsBoolean, IsOptional, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The username of the user',
    example: 'Super Admin',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'SuperAdmin@123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'The confirmation password of the user',
    example: 'SuperAdmin@123',
  })
  @IsString()
  @IsNotEmpty()
  confirmPassword: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'Superadmin@123@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'The ID of the role assigned to the user',
    example: 1,
  })
  @IsNotEmpty()
  role_id: number;

  @ApiProperty({
    description: 'The ID of the employee associated with the user',
    example: 1,
  })
  @IsNotEmpty()
  employee_id: number;

  @ApiProperty({
    description: 'The ID of the branch associated with the user',
    example: 1,
  })
  @IsNotEmpty()
  branch_id: number;

  @ApiProperty({
    description: 'Indicates whether the user is allowed to reset their password',
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  allowResetPassword: boolean;

  @ApiProperty({
    description: 'Indicates whether the user is active',
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  active: boolean;

  @ApiProperty({
    description: 'The date and time the user was created',
    example: '2024-10-24T08:01:14.489Z',
  })
  @IsDate()
  @IsOptional()
  created_At: Date;

  @ApiProperty({
    description: 'The user who created this account',
    example: 'Supper admin',
  })
  @IsString()
  @IsNotEmpty()
  created_By: string;
}
