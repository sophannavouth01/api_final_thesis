import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Branch } from './entities/branch.entity';
import { CreateBranchsDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { User } from 'src/users/entities/user.entity';
import { Employee } from 'src/employees/entities/employee.entity'; // Import Employee entity

@Injectable()
export class BranchsService {
  constructor(
    @InjectRepository(Branch)
    private readonly branchRepository: Repository<Branch>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    @InjectRepository(Employee) // Inject Employee repository
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  // Create a new branch
  async create(createBranchDto: CreateBranchsDto): Promise<Branch> {
    const createdBy = await this.usersRepository.findOne({
      where: { id: createBranchDto.created_By },
      select: ['id', 'username', 'email'],
      relations: ['role'],
    });
    if (!createdBy) {
      throw new NotFoundException('User (created_By) not found');
    }

    const updatedBy = await this.usersRepository.findOne({
      where: { id: createBranchDto.updated_By },
      select: ['id', 'username', 'email'],
      relations: ['role'],
    });
    if (!updatedBy) {
      throw new NotFoundException('User (updated_By) not found');
    }

    // Fetch branch manager (Employee)
    const branchManager = await this.employeeRepository.findOne({
      where: { id: createBranchDto.branchManager },
    });
    if (!branchManager) {
      throw new NotFoundException('Employee (branchManager) not found');
    }

    const branch = this.branchRepository.create({
      ...createBranchDto,
      branchManager, // Set the branchManager relation
      created_By: createdBy,
      updated_By: updatedBy,
    });

    return this.branchRepository.save(branch);
  }

  // Find all branches
  async findAll(): Promise<Branch[]> {
    return this.branchRepository.find({
      select: ['id', 'name', 'villageName', 'communeName', 'districtName', 'provinceName'],
      relations: [
        'branchManager', // Include branchManager
        'created_By', 'created_By.role', 
        'updated_By', 'updated_By.role', 
      ],
    });
  }

  // Find a branch by ID
  async findOne(id: number): Promise<Branch> {
    const branch = await this.branchRepository.findOne({
      where: { id },
      select: ['id', 'name', 'villageName', 'communeName', 'districtName', 'provinceName'],
      relations: [
        'branchManager', // Include branchManager
        'created_By', 'created_By.role', 
        'updated_By', 'updated_By.role', 
      ],
    });

    if (!branch) {
      throw new NotFoundException('Branch not found');
    }

    return branch;
  }

  // Update a branch by ID
  async update(id: number, updateBranchDto: UpdateBranchDto): Promise<Branch> {
    const branch = await this.findOne(id);
    if (!branch) {
      throw new NotFoundException('Branch not found');
    }

    if (updateBranchDto.updated_By) {
      const updatedBy = await this.usersRepository.findOne({ where: { id: updateBranchDto.updated_By } });
      if (!updatedBy) {
        throw new NotFoundException('User (updated_By) not found');
      }
      branch.updated_By = updatedBy;
    }

    if (updateBranchDto.created_By) {
      const createdBy = await this.usersRepository.findOne({ where: { id: updateBranchDto.created_By } });
      if (!createdBy) {
        throw new NotFoundException('User (created_By) not found');
      }
      branch.created_By = createdBy;
    }

    // Update the branchManager if provided
    if (updateBranchDto.branchManager) {
      const branchManager = await this.employeeRepository.findOne({ where: { id: updateBranchDto.branchManager } });
      if (!branchManager) {
        throw new NotFoundException('Employee (branchManager) not found');
      }
      branch.branchManager = branchManager;
    }

    Object.assign(branch, updateBranchDto);

    return this.branchRepository.save(branch);
  }

  // Remove a branch by ID
  async remove(id: number): Promise<void> {
    const branch = await this.findOne(id);
    if (!branch) {
      throw new NotFoundException('Branch not found');
    }

    await this.branchRepository.delete(id);
  }
}
