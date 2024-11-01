import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Branch } from 'src/branch/entities/branch.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

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
    private readonly branchesRepository: Repository<Branch>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      // Check if password and confirmPassword match
      if (createUserDto.password !== createUserDto.confirmPassword) {
        throw new BadRequestException('Passwords do not match');
      }

      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
      const hashedConfirmPassword = await bcrypt.hash(createUserDto.confirmPassword, salt);

      const user = new User();
      user.username = createUserDto.username;
      user.password = hashedPassword;
      user.confirmPassword = hashedConfirmPassword;  // Save the hashed confirm password
      user.email = createUserDto.email;
      user.allowResetPassword = createUserDto.allowResetPassword ?? true;
      user.active = createUserDto.active ?? true;
      user.createdAt = createUserDto.createdAt || new Date();

      // Only assign relationships if IDs are provided and valid
      if (createUserDto.role_id) {
        user.role = await this.findRoleById(createUserDto.role_id);
      }

      if (createUserDto.employee_id) {
        user.employee = await this.findEmployeeById(createUserDto.employee_id);
      }

      if (createUserDto.branch_id) {
        user.branch = await this.findBranchById(createUserDto.branch_id);
      }

      if (createUserDto.created_By) {
        user.created_By = await this.findOne(createUserDto.created_By);
      }

      if (createUserDto.updated_By) {
        user.updated_By = await this.findOne(createUserDto.updated_By);
      }

      // Save the new user to the database
      return await this.usersRepository.save(user);

    } catch (error) {
      console.error('Failed to create user:', error.message);
      
      // Handle specific errors
      if (error instanceof NotFoundException) {
        throw new BadRequestException(error.message); // Re-throw with a 400 error for better feedback
      }

      // General catch-all for other errors
      throw new BadRequestException('Failed to create user. Please check the input data.');
    }
  }


  async findAll(): Promise<User[]> {
    try {
      return await this.usersRepository.find({
        select: ['id', 'username', 'email', 'active', 'createdAt', 'allowResetPassword'],
        relations: ['role', 'branch', 'employee', 'created_By', 'updated_By'],
      });
    } catch (error) {
      console.error('Failed to find users:', error.message);
      throw new BadRequestException('Failed to retrieve users.');
    }
  }

  async findOne(id: number): Promise<User> {
    try {
      const user = await this.usersRepository.findOne({
        where: { id },
        select: ['id', 'username', 'email', 'active', 'createdAt', 'allowResetPassword'],
        relations: ['role', 'branch', 'employee', 'created_By', 'updated_By'],
      });
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found.`);
      }
      return user;
    } catch (error) {
      console.error('Failed to find user:', error.message);
      throw new BadRequestException(`Failed to retrieve user with ID ${id}.`);
    }
  }

  async findByUsername(username: string): Promise<User | undefined> {
    try {
      return await this.usersRepository.findOne({
        where: { username },
        relations: ['role', 'branch', 'employee', 'created_By', 'updated_By'],
      });
    } catch (error) {
      console.error('Failed to find user by username:', error.message);
      throw new BadRequestException('Failed to retrieve user by username.');
    }
  }

  async findByUsernameAndBranchName(username: string, branchName: string): Promise<User | undefined> {
    try {
      return await this.usersRepository.findOne({
        where: {
          username,
          branch: { name: branchName },  // Assuming `branch` is a relation with a `name` field
        },
        relations: ['branch'],  // Ensure the branch relation is loaded
      });
    } catch (error) {
      console.error('Failed to find user by username and branch name:', error.message);
      throw new BadRequestException('Failed to retrieve user by username and branch name.');
    }
  }
  

  async update(id: number, updateData: Partial<User>): Promise<User> {
    try {
      const user = await this.findOne(id);
      if (!user) throw new NotFoundException(`User with ID ${id} not found`);
  
      // Only hash the password if it’s provided in plain text
      if (updateData.password && !updateData.password.startsWith('$2b$')) {  // Check for bcrypt hash format
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(updateData.password, salt);
      } else if (updateData.password) {
        user.password = updateData.password;  // Save directly if already hashed
      }
  
      if (updateData.username) user.username = updateData.username;
      if (updateData.email) user.email = updateData.email;
      if (typeof updateData.allowResetPassword !== 'undefined') user.allowResetPassword = updateData.allowResetPassword;
      if (typeof updateData.active !== 'undefined') user.active = updateData.active;
  
      if (updateData.role) user.role = await this.findRoleById(updateData.role.id);
      if (updateData.employee) user.employee = await this.findEmployeeById(updateData.employee.id);
      if (updateData.branch) user.branch = await this.findBranchById(updateData.branch.id);
      if (updateData.created_By) user.created_By = await this.findOne(updateData.created_By.id);
      if (updateData.updated_By) user.updated_By = await this.findOne(updateData.updated_By.id);
  
      // Save updated user
      await this.usersRepository.save(user);
      return user;
    } catch (error) {
      console.error('Failed to update user:', error.message);
      throw new BadRequestException(`Failed to update user with ID ${id}.`);
    }
  }
  

  async remove(id: number): Promise<void> {
    try {
      await this.usersRepository.delete(id);
    } catch (error) {
      console.error('Failed to remove user:', error.message);
      throw new BadRequestException(`Failed to delete user with ID ${id}.`);
    }
  }

  async findRoleById(roleId: number): Promise<Role> {
    try {
      const role = await this.rolesRepository.findOne({ where: { id: roleId } });
      if (!role) {
        throw new NotFoundException(`Role with ID ${roleId} not found.`);
      }
      return role;
    } catch (error) {
      console.error('Failed to find role:', error.message);
      throw new BadRequestException(`Failed to retrieve role with ID ${roleId}.`);
    }
  }

  async findEmployeeById(employeeId: number): Promise<Employee> {
    try {
      const employee = await this.employeesRepository.findOne({ where: { id: employeeId } });
      if (!employee) {
        throw new NotFoundException(`Employee with ID ${employeeId} not found.`);
      }
      return employee;
    } catch (error) {
      console.error('Failed to find employee:', error.message);
      throw new BadRequestException(`Failed to retrieve employee with ID ${employeeId}.`);
    }
  }

  async findBranchById(branchId: number): Promise<Branch> {
    try {
      const branch = await this.branchesRepository.findOne({ where: { id: branchId } });
      if (!branch) {
        throw new NotFoundException(`Branch with ID ${branchId} not found.`);
      }
      return branch;
    } catch (error) {
      console.error('Failed to find branch:', error.message);
      throw new BadRequestException(`Failed to retrieve branch with ID ${branchId}.`);
    }
  }
}
