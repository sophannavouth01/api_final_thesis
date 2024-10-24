import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RiceStockMillerService } from './rice-stock-miller.service';
import { CreateRiceStockMillerDto } from './dto/create-rice-stock-miller.dto';
import { RiceStockMiller } from './entities/rice-stock-miller.entity';

@ApiTags('rice-stock-miller')
@Controller('rice-stock-miller')
export class RiceStockMillerController {
  constructor(private readonly riceStockMillerService: RiceStockMillerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new rice stock record' })
  @ApiResponse({ status: 201, description: 'Rice stock created successfully.', type: RiceStockMiller })
  create(@Body() createRiceStockMillerDto: CreateRiceStockMillerDto): Promise<RiceStockMiller> {
    return this.riceStockMillerService.create(createRiceStockMillerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all rice stock records' })
  @ApiResponse({ status: 200, description: 'List of rice stock records', type: [RiceStockMiller] })
  findAll(): Promise<RiceStockMiller[]> {
    return this.riceStockMillerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a rice stock record by ID' })
  @ApiResponse({ status: 200, description: 'The rice stock record', type: RiceStockMiller })
  findOne(@Param('id') id: string): Promise<RiceStockMiller> {
    return this.riceStockMillerService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a rice stock record by ID' })
  @ApiResponse({ status: 200, description: 'Rice stock record updated successfully.', type: RiceStockMiller })
  update(
    @Param('id') id: string,
    @Body() updateRiceStockMillerDto: CreateRiceStockMillerDto,
  ): Promise<RiceStockMiller> {
    return this.riceStockMillerService.update(id, updateRiceStockMillerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a rice stock record by ID' })
  @ApiResponse({ status: 204, description: 'Rice stock record deleted successfully.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.riceStockMillerService.remove(id);
  }
}
