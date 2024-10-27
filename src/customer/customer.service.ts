import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Position } from 'src/positions/entities/position.entity';
import { User } from 'src/users/entities/user.entity';
import { Branch } from 'src/branch/entities/branch.entity';
import { Agent } from 'src/agent/entities/agent.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    
    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>,
    
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Branch)
    private readonly branchRepository: Repository<Branch>,

    @InjectRepository(Agent)  // Injecting Agent repository
    private readonly agentRepository: Repository<Agent>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const { positionId, branchId, agentId, created_By, updated_By, dateOfBirth, ...customerData } = createCustomerDto;

    // Fetch Position
    const position = await this.positionRepository.findOne({ where: { id: positionId } });
    if (!position) throw new NotFoundException(`Position with ID ${positionId} not found`);

    // Fetch Branch
    const branch = await this.branchRepository.findOne({ where: { id: branchId } });
    if (!branch) throw new NotFoundException(`Branch with ID ${branchId} not found`);

    // Fetch Agent
    const agent = await this.agentRepository.findOne({ where: { id: agentId } });
    if (!agent) throw new NotFoundException(`Agent with ID ${agentId} not found`);

    // Fetch User entities for created_By and updated_By
    const createdBy = await this.userRepository.findOne({ where: { id: created_By } });
    if (!createdBy) throw new NotFoundException(`User with ID ${created_By} not found`);

    const updatedBy = await this.userRepository.findOne({ where: { id: updated_By } });
    if (!updatedBy) throw new NotFoundException(`User with ID ${updated_By} not found`);

    // Create Customer
    const customer = this.customerRepository.create({
      ...customerData,
      dateOfBirth: new Date(dateOfBirth),
      position,
      branch,
      agent,
      created_By: createdBy,
      updated_By: updatedBy,
    });

    return await this.customerRepository.save(customer);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find({ relations: ['position', 'branch', 'agent', 'created_By', 'updated_By'] });
  }

  async findOne(id: number): Promise<Customer> {
    const customer = await this.customerRepository.findOne({
      where: { id },
      relations: ['position', 'branch', 'agent', 'created_By', 'updated_By'],
    });
    if (!customer) throw new NotFoundException(`Customer with ID ${id} not found`);
    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    const customer = await this.findOne(id);
    const { positionId, branchId, agentId, updated_By, dateOfBirth, ...updateData } = updateCustomerDto;

    // Update Position if positionId is provided
    if (positionId) {
      const position = await this.positionRepository.findOne({ where: { id: positionId } });
      if (!position) throw new NotFoundException(`Position with ID ${positionId} not found`);
      customer.position = position;
    }

    // Update Branch if branchId is provided
    if (branchId) {
      const branch = await this.branchRepository.findOne({ where: { id: branchId } });
      if (!branch) throw new NotFoundException(`Branch with ID ${branchId} not found`);
      customer.branch = branch;
    }

    // Update Agent if agentId is provided
    if (agentId) {
      const agent = await this.agentRepository.findOne({ where: { id: agentId } });
      if (!agent) throw new NotFoundException(`Agent with ID ${agentId} not found`);
      customer.agent = agent;
    }

    // Update updated_By if provided
    if (updated_By) {
      const updatedBy = await this.userRepository.findOne({ where: { id: updated_By } });
      if (!updatedBy) throw new NotFoundException(`User with ID ${updated_By} not found`);
      customer.updated_By = updatedBy;
    }

    // Update dateOfBirth if provided
    if (dateOfBirth) customer.dateOfBirth = new Date(dateOfBirth);

    // Apply other updates to the customer
    Object.assign(customer, updateData);
    return await this.customerRepository.save(customer);
  }

  async remove(id: number): Promise<void> {
    const result = await this.customerRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Customer with ID ${id} not found`);
  }
}
