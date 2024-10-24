import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { Position } from 'src/positions/entities/position.entity';
import { User } from 'src/users/entities/user.entity';
import { Branch } from 'src/branch/entities/branch.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeesRepository: Repository<Employee>,
    @InjectRepository(Position)
    private readonly positionsRepository: Repository<Position>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Branch)
    private readonly branchRepository: Repository<Branch>,
  ) {}

  // Create a new employee
  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee = new Employee();
    Object.assign(employee, createEmployeeDto);

    // Fetch and assign the position if provided
    if (createEmployeeDto.position_id) {
      const position = await this.positionsRepository.findOne({
        where: { id: createEmployeeDto.position_id },
      });
      if (position) {
        employee.position = position;
      }
    }

    // Fetch and assign the branch if provided
    if (createEmployeeDto.branch_id) {
      const branch = await this.branchRepository.findOne({
        where: { id: createEmployeeDto.branch_id },
      });
      if (branch) {
        employee.branch = branch;
      } else {
        throw new Error('Branch not found');
      }
    }

    // Fetch and assign the user if provided
    if (createEmployeeDto.user_id) {
      const user = await this.usersRepository.findOne({
        where: { id: createEmployeeDto.user_id },
      });
      if (user) {
        employee.user = user;
      }
    }

    // Fetch and assign the createdBy user
    if (createEmployeeDto.created_By) {
      const createdByUser = await this.usersRepository.findOne({
        where: { id: createEmployeeDto.created_By },
      });
      if (createdByUser) {
        employee.create_By = createdByUser;
      } else {
        throw new Error('User not found for createdBy');
      }
    } else {
      throw new Error('createdBy cannot be null');
    }

    return this.employeesRepository.save(employee);
  }

  // Update an existing employee
  async update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    const employee = await this.employeesRepository.findOne({ where: { id } });

    if (!employee) {
      throw new Error('Employee not found');
    }

    // Fetch and assign the branch if provided
    if (updateEmployeeDto.branch_id) {
      const branch = await this.branchRepository.findOne({ where: { id: updateEmployeeDto.branch_id } });
      if (branch) {
        employee.branch = branch;
      } else {
        throw new Error('Branch not found');
      }
    }

    // Fetch and assign the position if provided
    if (updateEmployeeDto.position_id) {
      const position = await this.positionsRepository.findOne({
        where: { id: updateEmployeeDto.position_id },
      });
      if (position) {
        employee.position = position;
      }
    }

    // Fetch and assign the user if provided
    if (updateEmployeeDto.user_id) {
      const user = await this.usersRepository.findOne({
        where: { id: updateEmployeeDto.user_id },
      });
      if (user) {
        employee.user = user;
      }
    }

    // Fetch and assign the updatedBy user if provided
    if (updateEmployeeDto.updated_By) {
      const updatedByUser = await this.usersRepository.findOne({
        where: { id: updateEmployeeDto.updated_By },
      });
      if (updatedByUser) {
        employee.updated_By = updatedByUser;
      } else {
        throw new Error('User not found for updatedBy');
      }
    }

    // Assign other fields from DTO
    Object.assign(employee, updateEmployeeDto);

    return this.employeesRepository.save(employee);
  }

  // Get all employees
  async findAll(): Promise<Employee[]> {
    return this.employeesRepository.find({
      relations: ['position', 'branch', 'user', 'create_By', 'updated_By'],
    });
  }

  // Get a specific employee by ID
  async findOne(id: number): Promise<Employee> {
    return this.employeesRepository.findOne({
      where: { id },
      relations: ['position', 'branch', 'user', 'create_By', 'updated_By'],
    });
  }

  // Delete an employee by ID
  async remove(id: number): Promise<void> {
    await this.employeesRepository.delete(id);
  }
}
