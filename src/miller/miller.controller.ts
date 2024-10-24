import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MillerService } from './miller.service';
import { CreateMillerDto } from './dto/create-miller.dto';
import { UpdateMillerDto } from './dto/update-miller.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Miller } from './entities/miller.entity';

@ApiTags('miller')
@Controller('miller')
export class MillerController {
  constructor(private readonly millerService: MillerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Miller' })
  @ApiResponse({ status: 201, description: 'The Miller has been successfully created.', type: Miller })
  create(@Body() createMillerDto: CreateMillerDto): Promise<Miller> {
    return this.millerService.create(createMillerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Millers' })
  @ApiResponse({ status: 200, description: 'List of all Millers', type: [Miller] })
  findAll(): Promise<Miller[]> {
    return this.millerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Miller by ID' })
  @ApiResponse({ status: 200, description: 'The found Miller', type: Miller })
  @ApiResponse({ status: 404, description: 'Miller not found.' })
  findOne(@Param('id') id: string): Promise<Miller> {
    return this.millerService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a Miller by ID' })
  @ApiResponse({ status: 200, description: 'The Miller has been successfully updated.', type: Miller })
  @ApiResponse({ status: 404, description: 'Miller not found.' })
  update(@Param('id') id: string, @Body() updateMillerDto: UpdateMillerDto): Promise<Miller> {
    return this.millerService.update(+id, updateMillerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Miller by ID' })
  @ApiResponse({ status: 204, description: 'The Miller has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Miller not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.millerService.remove(+id);
  }
}
