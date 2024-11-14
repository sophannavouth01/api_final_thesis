import { Controller, Get, Post, Body, Put, Param, Delete, HttpStatus, NotFoundException, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The user has been successfully created.', type: User })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request.' })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.usersService.create(createUserDto);
    } catch (error) {
      throw new BadRequestException('Failed to create user. Please check the input data.');
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: HttpStatus.OK, description: 'List of all users', type: [User] })
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'The found record', type: User })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found.' })
  async findOne(@Param('id') id: string): Promise<User> {
    const user = await this.usersService.findOne(+id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    return user;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'The user has been successfully updated.', type: User })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found.' })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    const existingUser = await this.usersService.findOne(+id);
    if (!existingUser) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }

    // Construct updateData with fields from updateUserDto that map to IDs as required in CreateUserDto
    const updateData: Partial<CreateUserDto> = {
      username: updateUserDto.username,
      email: updateUserDto.email,
      allowResetPassword: updateUserDto.allowResetPassword,
      active: updateUserDto.active,
      createdAt: updateUserDto.createdAt,
      updated_By: updateUserDto.updated_By,  // Use ID here as required by CreateUserDto
      role_id: updateUserDto.role_id,
      branch_id: updateUserDto.branch_id,
      employee_id: updateUserDto.employee_id,
    };

    return await this.usersService.update(+id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'The user has been successfully deleted.' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found.' })
  async remove(@Param('id') id: string): Promise<void> {
    const existingUser = await this.usersService.findOne(+id);
    if (!existingUser) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    await this.usersService.remove(+id);
  }
}
