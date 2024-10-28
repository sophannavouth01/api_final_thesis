import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseByRiceFromMillerDto } from './dto/create-purchase-by-rice-from-miller.dto';
import { UpdatePurchaseByRiceFromMillerDto } from './dto/update-purchase-by-rice-from-miller.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseByRiceFromMiller } from './entities/purchase-by-rice-from-miller.entity';
import { Miller } from 'src/miller/entities/miller.entity';
import { Branch } from 'src/branch/entities/branch.entity';
import { Agent } from 'src/agent/entities/agent.entity';
import { User } from 'src/users/entities/user.entity';
import { Customer } from 'src/customer/entities/customer.entity';

@Injectable()
export class PurchaseByRiceFromMillerService {
  constructor(
    @InjectRepository(PurchaseByRiceFromMiller)
    private readonly purchaseByRiceFromMillerRepository: Repository<PurchaseByRiceFromMiller>,

    @InjectRepository(Miller)
    private readonly millerRepository: Repository<Miller>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Branch)
    private readonly branchRepository: Repository<Branch>,

    @InjectRepository(Agent)
    private readonly agentRepository: Repository<Agent>,

    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,

  ) {}

  async create(createPurchaseByRiceFromMillerDto: CreatePurchaseByRiceFromMillerDto): Promise<PurchaseByRiceFromMiller> {
    const purchaseRecord = new PurchaseByRiceFromMiller();

    if (createPurchaseByRiceFromMillerDto.miller_id) {
      const miller = await this.millerRepository.findOne({ where: { id: createPurchaseByRiceFromMillerDto.miller_id } });
      if (!miller) throw new NotFoundException('Miller not found');
      purchaseRecord.miller = miller;
    } else {
      purchaseRecord.miller = null;
    }

    if (createPurchaseByRiceFromMillerDto.branch_id) {
      const branch = await this.branchRepository.findOne({ where: { id: createPurchaseByRiceFromMillerDto.branch_id } });
      purchaseRecord.branch = branch || null;
    } else {
      purchaseRecord.branch = null;
    }

    if (createPurchaseByRiceFromMillerDto.agent_id) {
      const agent = await this.agentRepository.findOne({ where: { id: createPurchaseByRiceFromMillerDto.agent_id } });
      purchaseRecord.agent = agent || null;
    } else {
      purchaseRecord.agent = null;
    }
    if (createPurchaseByRiceFromMillerDto.customer_id) {
      const customer = await this.customerRepository.findOne({ where: { id: createPurchaseByRiceFromMillerDto.customer_id } });
      purchaseRecord.customer = customer || null;
    } else {
      purchaseRecord.customer = null;
    }

    const createdBy = await this.userRepository.findOne({ where: { id: createPurchaseByRiceFromMillerDto.created_By } });
    if (!createdBy) throw new NotFoundException('User for created_By not found');
    
    purchaseRecord.created_By = createdBy;
    purchaseRecord.updated_By = createdBy;
    purchaseRecord.quantity = createPurchaseByRiceFromMillerDto.quantity;
    purchaseRecord.totalQuantity = createPurchaseByRiceFromMillerDto.totalQuantity;
    purchaseRecord.cost = createPurchaseByRiceFromMillerDto.cost;
    purchaseRecord.totalCost = purchaseRecord.cost * purchaseRecord.totalQuantity;
    purchaseRecord.paymentStatus = createPurchaseByRiceFromMillerDto.paymentStatus;
    purchaseRecord.section = createPurchaseByRiceFromMillerDto.section;
    purchaseRecord.status = createPurchaseByRiceFromMillerDto.status;
    purchaseRecord.purchaseDate = createPurchaseByRiceFromMillerDto.purchaseDate;

    return await this.purchaseByRiceFromMillerRepository.save(purchaseRecord);
  }

  async update(id: number, updatePurchaseByRiceFromMillerDto: UpdatePurchaseByRiceFromMillerDto): Promise<PurchaseByRiceFromMiller> {
    const purchaseRecord = await this.findOne(id);
  
    if (updatePurchaseByRiceFromMillerDto.miller_id !== undefined) {
      const miller = await this.millerRepository.findOne({ where: { id: updatePurchaseByRiceFromMillerDto.miller_id } });
      if (!miller) throw new NotFoundException('Miller not found');
      purchaseRecord.miller = miller;
    }
  
    if (updatePurchaseByRiceFromMillerDto.branch_id !== undefined) {
      const branch = await this.branchRepository.findOne({ where: { id: updatePurchaseByRiceFromMillerDto.branch_id } });
      purchaseRecord.branch = branch || null;
    }
  
    if (updatePurchaseByRiceFromMillerDto.agent_id !== undefined) {
      const agent = await this.agentRepository.findOne({ where: { id: updatePurchaseByRiceFromMillerDto.agent_id } });
      purchaseRecord.agent = agent || null;
    }
  
    if (updatePurchaseByRiceFromMillerDto.customer_id !== undefined) {
      const customer = await this.customerRepository.findOne({ where: { id: updatePurchaseByRiceFromMillerDto.customer_id } });
      purchaseRecord.customer = customer || null;
    }
  
    if (updatePurchaseByRiceFromMillerDto.updated_By !== undefined) {
      const updatedBy = await this.userRepository.findOne({ where: { id: updatePurchaseByRiceFromMillerDto.updated_By } });
      if (!updatedBy) throw new NotFoundException('User for updated_By not found');
      purchaseRecord.updated_By = updatedBy;
    }
  
    if (updatePurchaseByRiceFromMillerDto.paymentStatus !== undefined) {
      purchaseRecord.paymentStatus = updatePurchaseByRiceFromMillerDto.paymentStatus;
    }
  
    if (updatePurchaseByRiceFromMillerDto.quantity !== undefined) {
      purchaseRecord.quantity = updatePurchaseByRiceFromMillerDto.quantity;
    }
  
    if (updatePurchaseByRiceFromMillerDto.totalQuantity !== undefined) {
      purchaseRecord.totalQuantity = updatePurchaseByRiceFromMillerDto.totalQuantity;
    }
  
    if (updatePurchaseByRiceFromMillerDto.cost !== undefined) {
      purchaseRecord.cost = updatePurchaseByRiceFromMillerDto.cost;
      purchaseRecord.totalCost = purchaseRecord.cost * (purchaseRecord.totalQuantity || 1); // Update totalCost if cost or totalQuantity are provided
    }
  
    if (updatePurchaseByRiceFromMillerDto.section !== undefined) {
      purchaseRecord.section = updatePurchaseByRiceFromMillerDto.section;
    }
  
    if (updatePurchaseByRiceFromMillerDto.status !== undefined) {
      purchaseRecord.status = updatePurchaseByRiceFromMillerDto.status;
    }
  
    if (updatePurchaseByRiceFromMillerDto.purchaseDate !== undefined) {
      purchaseRecord.purchaseDate = updatePurchaseByRiceFromMillerDto.purchaseDate;
    }
  
    return await this.purchaseByRiceFromMillerRepository.save(purchaseRecord);
  }
  

  async findAll(): Promise<PurchaseByRiceFromMiller[]> {
    return this.purchaseByRiceFromMillerRepository.find({
      relations: ['created_By', 'updated_By', 'miller', 'branch', 'agent','customer'],
    });
  }

  async findOne(id: number): Promise<PurchaseByRiceFromMiller> {
    const purchaseRecord = await this.purchaseByRiceFromMillerRepository.findOne({
      where: { id: id.toString() },
      relations: ['created_By', 'updated_By', 'miller', 'branch', 'agent','customer'],
    });

    if (!purchaseRecord) {
      throw new NotFoundException(`PurchaseByRiceFromMiller with ID ${id} not found`);
    }
    return purchaseRecord;
  }

  async remove(id: number): Promise<void> {
    const purchaseRecord = await this.findOne(id);
    await this.purchaseByRiceFromMillerRepository.remove(purchaseRecord);
  }
}
