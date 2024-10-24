import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
  @ApiProperty({
    description: 'The refresh token',
    example: 'your-refresh-token',
  })
  @IsString()
  @IsNotEmpty()
  refresh_token: string;
}
