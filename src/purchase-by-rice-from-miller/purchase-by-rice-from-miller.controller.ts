import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseByRiceFromMillerService } from './purchase-by-rice-from-miller.service';
import { CreatePurchaseByRiceFromMillerDto } from './dto/create-purchase-by-rice-from-miller.dto';
import { UpdatePurchaseByRiceFromMillerDto } from './dto/update-purchase-by-rice-from-miller.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PurchaseByRiceFromMiller } from './entities/purchase-by-rice-from-miller.entity';

@ApiTags('purchase-by-rice-from-miller')
@Controller('purchase-by-rice-from-miller')
export class PurchaseByRiceFromMillerController {
  constructor(private readonly purchaseByRiceFromMillerService: PurchaseByRiceFromMillerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new purchase record by rice from miller' })
  @ApiResponse({ status: 201, description: 'Purchase record created successfully.', type: PurchaseByRiceFromMiller })
  create(@Body() createPurchaseByRiceFromMillerDto: CreatePurchaseByRiceFromMillerDto): Promise<PurchaseByRiceFromMiller> {
    return this.purchaseByRiceFromMillerService.create(createPurchaseByRiceFromMillerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all purchase records by rice from miller' })
  @ApiResponse({ status: 200, description: 'List of purchase records by rice from millers', type: [PurchaseByRiceFromMiller] })
  findAll(): Promise<PurchaseByRiceFromMiller[]> {
    return this.purchaseByRiceFromMillerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific purchase record by ID' })
  @ApiResponse({ status: 200, description: 'Specific purchase record retrieved successfully.', type: PurchaseByRiceFromMiller })
  findOne(@Param('id') id: string): Promise<PurchaseByRiceFromMiller> {
    return this.purchaseByRiceFromMillerService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a purchase record by ID' })
  @ApiResponse({ status: 200, description: 'Purchase record updated successfully.', type: PurchaseByRiceFromMiller })
  update(@Param('id') id: string, @Body() updatePurchaseByRiceFromMillerDto: UpdatePurchaseByRiceFromMillerDto): Promise<PurchaseByRiceFromMiller> {
    return this.purchaseByRiceFromMillerService.update(+id, updatePurchaseByRiceFromMillerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a purchase record by ID' })
  @ApiResponse({ status: 204, description: 'Purchase record deleted successfully.' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.purchaseByRiceFromMillerService.remove(+id);
  }
}
