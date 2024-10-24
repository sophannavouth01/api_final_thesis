import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Position } from './entities/position.entity';

@ApiTags('positions')
@Controller('positions')
export class PositionsController {
  constructor(private readonly positionsService: PositionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Position' })
  @ApiResponse({ status: 201, description: 'The Position has been successfully created.', type: Position })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createPositionDto: CreatePositionDto): Promise<Position> {
    return this.positionsService.create(createPositionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all positions' })
  @ApiResponse({ status: 200, description: 'List of all positions', type: [Position] })
  findAll(): Promise<Position[]> {
    return this.positionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Position by ID' })
  @ApiResponse({ status: 200, description: 'The found record', type: Position })
  @ApiResponse({ status: 404, description: 'Position not found.' })
  findOne(@Param('id') id: string): Promise<Position> {
    return this.positionsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a Position by ID' })
  @ApiResponse({ status: 200, description: 'The Position has been successfully updated.', type: Position })
  @ApiResponse({ status: 404, description: 'Position not found.' })
  update(@Param('id') id: string, @Body() updatePositionDto: UpdatePositionDto): Promise<Position> {
    return this.positionsService.update(+id, updatePositionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Position by ID' })
  @ApiResponse({ status: 204, description: 'The Position has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Position not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.positionsService.remove(+id);
  }
}
