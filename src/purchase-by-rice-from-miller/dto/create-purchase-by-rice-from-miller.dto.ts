import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePurchaseByRiceFromMillerDto {
    @ApiProperty({ description: 'ID of the associated miller', example: 2, required: false })
    @IsNumber()
    @IsOptional()
    miller_id: number | null;
  
    @ApiProperty({ description: 'Quantity of rice stock', example: 1 })
    @IsNumber()
    @IsNotEmpty()
    quantity: number;
  
    @ApiProperty({ description: 'Total quantity of rice stock', example: 50 })
    @IsNumber()
    @IsNotEmpty()
    totalQuantity: number;
  
    @ApiProperty({ description: 'Cost per unit', example: 2100 })
    @IsNumber()
    @IsNotEmpty()
    cost: number;
  
    @ApiProperty({ description: 'Total cost of the rice stock', example: 105000 })
    @IsNumber()
    @IsNotEmpty()
    totalCost: number;
  
    @ApiProperty({ description: 'Payment status of the rice stock', example: 'Paid' })
    @IsString()
    @IsNotEmpty()
    paymentStatus: string;
  
    @ApiProperty({ description: 'Section where the rice stock is stored', example: 'Order1' })
    @IsString()
    @IsNotEmpty()
    section: string;
  
    @ApiProperty({ description: 'Status like Purchase or Transfer', example: 'Purchase' })
    @IsString()
    @IsNotEmpty()
    status: string;

    @ApiProperty({ description: 'Purchase date of the rice stock', example: '2023-10-25' })
    @IsDate()
    @IsNotEmpty()
    purchaseDate: Date;
    
    @ApiProperty({ description: 'ID of the associated branch', example: 3, required: false })
    @IsNumber()
    @IsOptional()
    branch_id: number | null;

    @ApiProperty({ description: 'ID of the associated agent', example: 1, required: false })
    @IsNumber()
    @IsOptional()
    agent_id: number | null;

    @ApiProperty({ description: 'The ID of the user who created this record', example: 1 })
    @IsNumber()
    @IsNotEmpty()
    created_By: number;
  
    @ApiProperty({ description: 'The ID of the user who updated this record', example: 1 })
    @IsNumber()
    @IsNotEmpty()
    updated_By: number;
}
