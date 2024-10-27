import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseByRiceFromMillerDto } from './dto/create-purchase-by-rice-from-miller.dto';
import { UpdatePurchaseByRiceFromMillerDto } from './dto/update-purchase-by-rice-from-miller.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseByRiceFromMiller } from './entities/purchase-by-rice-from-miller.entity';
import { Miller } from 'src/miller/entities/miller.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class PurchaseByRiceFromMillerService {
  constructor(
    @InjectRepository(PurchaseByRiceFromMiller)
    private readonly purchaseByRiceFromMillerRepository: Repository<PurchaseByRiceFromMiller>,

    @InjectRepository(Miller)
    private readonly millerRepository: Repository<Miller>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createPurchaseByRiceFromMillerDto: CreatePurchaseByRiceFromMillerDto): Promise<PurchaseByRiceFromMiller> {
    const miller = await this.millerRepository.findOne({ where: { id: createPurchaseByRiceFromMillerDto.miller_id } });
    if (!miller) {
      throw new NotFoundException('Miller not found');
    }

    const createdBy = await this.userRepository.findOne({ where: { id: createPurchaseByRiceFromMillerDto.created_By } });
    if (!createdBy) {
      throw new NotFoundException('User for created_By not found');
    }

    const purchaseRecord = new PurchaseByRiceFromMiller();
    purchaseRecord.miller = miller;
    purchaseRecord.created_By = createdBy;
    purchaseRecord.updated_By = createdBy; // Setting updated_By as the creator initially
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
    
    const updatedBy = await this.userRepository.findOne({ where: { id: updatePurchaseByRiceFromMillerDto.updated_By } });
    if (!updatedBy) {
      throw new NotFoundException('User for updated_By not found');
    }

    Object.assign(purchaseRecord, updatePurchaseByRiceFromMillerDto);
    purchaseRecord.updated_By = updatedBy; // Set updated_By to the new user performing the update

    return this.purchaseByRiceFromMillerRepository.save(purchaseRecord);
}


  async findAll(): Promise<PurchaseByRiceFromMiller[]> {
    return this.purchaseByRiceFromMillerRepository.find({
      relations: ['created_By', 'updated_By', 'miller'],
    });
  }

  async findOne(id: number): Promise<PurchaseByRiceFromMiller> {
    const purchaseRecord = await this.purchaseByRiceFromMillerRepository.findOne({
      where: { id: id.toString() },
      relations: ['created_By', 'updated_By', 'miller'],
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
