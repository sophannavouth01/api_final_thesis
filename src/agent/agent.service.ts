import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agent } from './entities/agent.entity';
import { Position } from '../positions/entities/position.entity';
import { Branch } from 'src/branch/entities/branch.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AgentService {
  constructor(
    @InjectRepository(Agent)
    private readonly agentRepository: Repository<Agent>,
    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>,
    @InjectRepository(Branch)
    private readonly branchRepository: Repository<Branch>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Create a new agent
  async create(createAgentDto: CreateAgentDto): Promise<Agent> {
    const { positionId, branchId, created_By, updated_By, dateOfBirth, ...agentData } = createAgentDto;

    // Fetch the Position entity by its ID
    const position = await this.positionRepository.findOne({
      where: { id: positionId },
    });
    if (!position) {
      throw new NotFoundException(`Position with ID ${positionId} not found`);
    }

    // Fetch the Branch entity by its ID
    const branch = await this.branchRepository.findOne({
      where: { id: branchId },
    });
    if (!branch) {
      throw new NotFoundException(`Branch with ID ${branchId} not found`);
    }

    // Fetch the User entity for created_By
    const createdBy = await this.userRepository.findOne({ where: { id: created_By } });
    if (!createdBy) {
      throw new NotFoundException(`User with ID ${created_By} not found`);
    }

    // Fetch the User entity for updated_By
    const updatedBy = await this.userRepository.findOne({ where: { id: updated_By } });
    if (!updatedBy) {
      throw new NotFoundException(`User with ID ${updated_By} not found`);
    }

    // Convert the dateOfBirth from string to Date
    const dob = new Date(dateOfBirth);

    // Create and assign relationships to the Agent entity
    const agent = this.agentRepository.create({
      ...agentData,
      position,         // Assign the fetched Position entity
      branch,           // Assign the fetched Branch entity
      created_By: createdBy,  // Assign created_By user
      updated_By: updatedBy,  // Assign updated_By user
      dateOfBirth: dob,       // Assign the formatted Date object
    });

    // Save and return the newly created agent
    return await this.agentRepository.save(agent);
  }

  // Fetch all agents
  async findAll(): Promise<Agent[]> {
    return await this.agentRepository.find({ relations: ['position', 'branch', 'created_By', 'updated_By'] });
  }

  // Fetch a single agent by ID
  async findOne(id: number): Promise<Agent> {
    const agent = await this.agentRepository.findOne({
      where: { id },
      relations: ['position', 'branch', 'created_By', 'updated_By'],
    });
    if (!agent) {
      throw new NotFoundException(`Agent with ID ${id} not found`);
    }
    return agent;
  }

  // Update an existing agent
  async update(id: number, updateAgentDto: UpdateAgentDto): Promise<Agent> {
    const { positionId, branchId, created_By, updated_By, dateOfBirth, ...updateData } = updateAgentDto;

    // Fetch the existing Agent entity by ID
    const agent = await this.agentRepository.findOne({
      where: { id },
      relations: ['position', 'branch'],
    });
    if (!agent) {
      throw new NotFoundException(`Agent with ID ${id} not found`);
    }

    // Update Position if positionId is provided
    if (positionId) {
      const position = await this.positionRepository.findOne({
        where: { id: positionId },
      });
      if (!position) {
        throw new NotFoundException(`Position with ID ${positionId} not found`);
      }
      agent.position = position; // Update the agent's position
    }

    // Update Branch if branchId is provided
    if (branchId) {
      const branch = await this.branchRepository.findOne({
        where: { id: branchId },
      });
      if (!branch) {
        throw new NotFoundException(`Branch with ID ${branchId} not found`);
      }
      agent.branch = branch; // Update the agent's branch
    }

    // Update created_By if provided
    if (created_By) {
      const createdBy = await this.userRepository.findOne({ where: { id: created_By } });
      if (!createdBy) {
        throw new NotFoundException(`User with ID ${created_By} not found`);
      }
      agent.created_By = createdBy;
    }

    // Update updated_By if provided
    if (updated_By) {
      const updatedBy = await this.userRepository.findOne({ where: { id: updated_By } });
      if (!updatedBy) {
        throw new NotFoundException(`User with ID ${updated_By} not found`);
      }
      agent.updated_By = updatedBy;
    }

    // Update dateOfBirth if provided
    if (dateOfBirth) {
      agent.dateOfBirth = new Date(dateOfBirth);
    }

    // Apply other updates to the agent
    Object.assign(agent, updateData);

    // Save and return the updated agent
    return this.agentRepository.save(agent);
  }

  // Remove an agent by ID
  async remove(id: number): Promise<void> {
    const result = await this.agentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Agent with ID ${id} not found`);
    }
  }
}
