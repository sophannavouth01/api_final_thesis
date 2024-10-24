import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePositionDto {
    @ApiProperty({
        description: 'The name of the position',
        example: 'Trainee',
      })
      @IsString()
      @IsNotEmpty()
      name: string;
    
      @ApiProperty({
        description: 'A brief description of the position',
        example: 'Has full access to the system',
      })
      @IsString()
      @IsNotEmpty()
      description: string;
    
      @ApiProperty({
        description: 'The status of the position (active/inactive)',
        example: true,
      })
      @IsBoolean()
      @IsNotEmpty()
      status: boolean;
}
