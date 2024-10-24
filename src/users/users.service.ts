import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import * as bcrypt from 'bcrypt';
import { Branch } from 'src/branch/entities/branch.entity';
import { ResetPasswordDto } from 'src/auth/dto/reset-password.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>,
    @InjectRepository(Employee)
    private readonly employeesRepository: Repository<Employee>,
    @InjectRepository(Branch)
    private readonly branchesRepository: Repository<Branch>, // Added for branch
  ) {}

  // Create a new user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const user = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
      allowResetPassword: createUserDto.allowResetPassword || true, // Default to true if not provided
      active: createUserDto.active || true, // Default to true if not provided
      created_At: createUserDto.created_At || new Date(), // Default to current date if not provided
    });

    if (createUserDto.role_id) {
      user.role = await this.rolesRepository.findOne({ where: { id: createUserDto.role_id } });
    }

    if (createUserDto.employee_id) {
      user.employee = await this.employeesRepository.findOne({ where: { id: createUserDto.employee_id } });
    }

    if (createUserDto.branch_id) {
      user.branch = await this.branchesRepository.findOne({ where: { id: createUserDto.branch_id } });
    }

    user.created_By = createUserDto.created_By;

    return this.usersRepository.save(user);
  }

  // Get all users
  findAll(): Promise<User[]> {
    return this.usersRepository.find({
      select: ['id', 'username', 'email', 'active', 'created_At'], 
      relations: ['role', 'branch', 'employee'], 
    });
  }

  // Find a specific user by ID
  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({
      where: { id },
      select: ['id', 'username', 'email', 'active', 'created_At'], 
      relations: ['role', 'branch', 'employee'],
    });
  }

  // Update a user with partial data (like password update, etc.)
  async update(userId: number, updateData: Partial<User>): Promise<User> {
    await this.usersRepository.update(userId, updateData);
    return this.usersRepository.findOne({ where: { id: userId } });  // Return updated user
  }

  // Remove a user by ID
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  // Find a user by username
  async findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: { username },
      relations: ['role', 'employee', 'branch'],
    });
  }

  // Find a user by email
  async findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }

  // Find a user by ID with relations
  async findByIdWithRelations(userId: number): Promise<any> {
    return this.usersRepository.findOne({
      where: { id: userId },
      relations: ['role', 'employee', 'branch'],
    });
  }

  // Reset password method
  async resetPassword(email: string, resetPasswordDto: ResetPasswordDto) {
    const { newPassword, confirmPassword } = resetPasswordDto;

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      throw new BadRequestException('Passwords do not match.');
    }

    // Find the user by email
    const user = await this.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }

    // Check if the user is allowed to reset password
    if (!user.allowResetPassword) {
      throw new BadRequestException('Password reset is not allowed for this user.');
    }

    // Hash the new password and update the user's password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await this.update(user.id, { password: hashedPassword });

    return { message: 'Password reset successfully.' };
  }
}
