import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRiceStockMillerDto {
  @ApiProperty({ description: 'ID of the associated miller', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  miller_id: number;  // Use @IsNumber() if miller_id is a number

  @ApiProperty({ description: 'Quantity of rice stock', example: 500 })
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({ description: 'Total quantity of rice stock', example: 1000 })
  @IsNumber()
  @IsNotEmpty()
  totalQuantity: number;

  @ApiProperty({ description: 'Cost per unit', example: 1.5 })
  @IsNumber()
  @IsNotEmpty()
  cost: number;

  @ApiProperty({ description: 'Total cost of the rice stock', example: 1500 })
  @IsNumber()
  @IsNotEmpty()
  totalCost: number;

  @ApiProperty({ description: 'Payment status of the rice stock', example: 'Paid' })
  @IsString()
  @IsNotEmpty()
  paymentStatus: string;

  @ApiProperty({ description: 'Section where the rice stock is stored', example: 'A1' })
  @IsString()
  @IsNotEmpty()
  section: string;

  @ApiProperty({ description: 'Purchase date of the rice stock', example: '2023-10-25' })
  @IsDate()
  @IsNotEmpty()
  purchaseDate: Date;
  
  @ApiProperty({ description: 'The ID of the user who created this record', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  created_By: number;

  @ApiProperty({ description: 'The ID of the user who updated this record', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  updated_By: number;
}
