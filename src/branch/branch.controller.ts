import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BranchsService } from './branch.service';
import { CreateBranchsDto  } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Branch } from './entities/branch.entity';

@ApiTags('branch')
@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchsService) {}

   @Post()
  @ApiOperation({ summary: 'Create a new Branch' })
  @ApiResponse({ status: 201, description: 'The Branch has been successfully created.', type: Branch })
  create(@Body() createBranchDto: CreateBranchsDto): Promise<Branch> {
    return this.branchService.create(createBranchDto);
  }


  @Get()
  @ApiOperation({ summary: 'Get all Branchs' })
  @ApiResponse({ status: 200, description: 'List of all Branchs', type: [Branch] })
  findAll(): Promise<Branch[]> {
    return this.branchService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Branch by ID' })
  @ApiResponse({ status: 200, description: 'The found record', type: Branch })
  @ApiResponse({ status: 404, description: 'Branch not found.' })
  findOne(@Param('id') id: string): Promise<Branch> {
    return this.branchService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a Branch by ID' })
  @ApiResponse({ status: 200, description: 'The Branch has been successfully updated.', type: Branch })
  @ApiResponse({ status: 404, description: 'Branch not found.' })
  update(@Param('id') id: string, @Body() updateBranchDto: UpdateBranchDto): Promise<Branch> {
    return this.branchService.update(+id, updateBranchDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Branch by ID' })
  @ApiResponse({ status: 204, description: 'The Branch has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Branch not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.branchService.remove(+id);
  }
}
