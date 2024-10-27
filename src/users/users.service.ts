import { Injectable, NotFoundException } from '@nestjs/common';
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

  // Existing methods...

  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const user = new User();
    user.username = createUserDto.username;
    user.password = hashedPassword;
    user.email = createUserDto.email;
    user.allowResetPassword = createUserDto.allowResetPassword ?? true;
    user.active = createUserDto.active ?? true;

    user.role = await this.findRoleById(createUserDto.role_id);
    user.employee = await this.findEmployeeById(createUserDto.employee_id);
    user.branch = await this.findBranchById(createUserDto.branch_id);

    if (createUserDto.created_By) {
      user.created_By = await this.findOne(createUserDto.created_By);
    }
    if (createUserDto.updated_By) {
      user.updated_By = await this.findOne(createUserDto.updated_By);
    }

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({
      select: ['id', 'username', 'email', 'active', 'createdAt', 'allowResetPassword'],
      relations: ['role', 'branch', 'employee', 'created_By', 'updated_By'],
    });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id },
      select: ['id', 'username', 'email', 'active', 'createdAt', 'allowResetPassword'],
      relations: ['role', 'branch', 'employee', 'created_By', 'updated_By'],
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    return user;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: { username },
      relations: ['role', 'branch', 'employee', 'created_By', 'updated_By'],
    });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: { email },
      relations: ['role', 'branch', 'employee', 'created_By', 'updated_By'],
    });
  }

  async update(id: number, updateData: Partial<User>): Promise<User> {
    if (updateData.password) {
      const salt = await bcrypt.genSalt();
      updateData.password = await bcrypt.hash(updateData.password, salt);
    }

    await this.usersRepository.update(id, updateData);

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async findRoleById(roleId: number): Promise<Role> {
    const role = await this.rolesRepository.findOne({ where: { id: roleId } });
    if (!role) {
      throw new NotFoundException(`Role with ID ${roleId} not found.`);
    }
    return role;
  }

  async findEmployeeById(employeeId: number): Promise<Employee> {
    const employee = await this.employeesRepository.findOne({ where: { id: employeeId } });
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${employeeId} not found.`);
    }
    return employee;
  }

  async findBranchById(branchId: number): Promise<Branch> {
    const branch = await this.branchesRepository.findOne({ where: { id: branchId } });
    if (!branch) {
      throw new NotFoundException(`Branch with ID ${branchId} not found.`);
    }
    return branch;
  }
}
