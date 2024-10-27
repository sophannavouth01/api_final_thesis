import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRiceStockMillerDto } from './dto/create-rice-stock-miller.dto';
import { RiceStockMiller } from './entities/rice-stock-miller.entity';
import { Miller } from 'src/miller/entities/miller.entity';
import { User } from 'src/users/entities/user.entity';
import { TotalStock } from './entities/total-stock.entity';

@Injectable()
export class RiceStockMillerService {
  constructor(
    @InjectRepository(RiceStockMiller)
    private readonly riceStockMillerRepository: Repository<RiceStockMiller>,

    @InjectRepository(Miller)
    private readonly millerRepository: Repository<Miller>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(TotalStock)
    private readonly totalStockRepository: Repository<TotalStock>,
  ) {}

  // Create a new rice stock record
  async create(createRiceStockMillerDto: CreateRiceStockMillerDto): Promise<RiceStockMiller> {
    // Retrieve Miller
    const miller = await this.millerRepository.findOne({ where: { id: createRiceStockMillerDto.miller_id } });
    if (!miller) {
      throw new NotFoundException('Miller not found');
    }

    // Retrieve Created By User
    const createdBy = await this.userRepository.findOne({ where: { id: createRiceStockMillerDto.created_By } });
    if (!createdBy) {
      throw new NotFoundException('User for created_By not found');
    }

    // Create a new rice stock record
    const riceStockMiller = this.riceStockMillerRepository.create({
      quantity: createRiceStockMillerDto.quantity,
      totalQuantity: createRiceStockMillerDto.totalQuantity,
      cost: createRiceStockMillerDto.cost,
      totalCost: createRiceStockMillerDto.totalCost,
      paymentStatus: createRiceStockMillerDto.paymentStatus,
      section: createRiceStockMillerDto.section,
      purchaseDate: createRiceStockMillerDto.purchaseDate,
      created_By: createdBy,
      updated_By: createdBy,
      miller: miller,
    });

    // Save the new rice stock record
    await this.riceStockMillerRepository.save(riceStockMiller);

    // Update or create TotalStock
    await this.updateTotalStock(createRiceStockMillerDto, miller);

    return riceStockMiller;
  }

  // Function to update or create total stock
  private async updateTotalStock(createRiceStockMillerDto: CreateRiceStockMillerDto, miller: Miller): Promise<void> {
    let totalStock = await this.totalStockRepository.findOne({
      where: { miller: { id: miller.id } },
    });

    if (totalStock) {
      // Update existing total stock entry by adding the new values
      totalStock.Quantity += createRiceStockMillerDto.quantity;
      totalStock.totalQuantity += createRiceStockMillerDto.totalQuantity;
      totalStock.totalCost += createRiceStockMillerDto.totalCost;
    } else {
      // Create a new total stock entry if none exists
      totalStock = this.totalStockRepository.create({
        Quantity: createRiceStockMillerDto.quantity,
        totalQuantity: createRiceStockMillerDto.totalQuantity,
        totalCost: createRiceStockMillerDto.totalCost,
        miller: miller,
      });
    }

    // Save the updated or newly created total stock entry
    await this.totalStockRepository.save(totalStock);
  }

  // Retrieve all rice stock records
  async findAll(): Promise<RiceStockMiller[]> {
    return this.riceStockMillerRepository.find({
      relations: ['created_By', 'updated_By', 'miller'],
    });
  }

  // Find a rice stock record by ID
  async findOne(id: string): Promise<RiceStockMiller> {
    const riceStockMiller = await this.riceStockMillerRepository.findOne({
      where: { id },
      relations: ['created_By', 'updated_By', 'miller'],
    });

    if (!riceStockMiller) {
      throw new NotFoundException(`RiceStockMiller record with ID ${id} not found`);
    }
    return riceStockMiller;
  }

  // Update an existing rice stock record
  async update(id: string, updateRiceStockMillerDto: CreateRiceStockMillerDto): Promise<RiceStockMiller> {
    const riceStockMiller = await this.findOne(id);
    const miller = await this.millerRepository.findOne({ where: { id: updateRiceStockMillerDto.miller_id } });

    if (!miller) {
      throw new NotFoundException('Miller not found');
    }

    const updatedBy = await this.userRepository.findOne({ where: { id: updateRiceStockMillerDto.updated_By } });
    if (!updatedBy) {
      throw new NotFoundException('User for updated_By not found');
    }

    this.riceStockMillerRepository.merge(riceStockMiller, {
      quantity: updateRiceStockMillerDto.quantity,
      totalQuantity: updateRiceStockMillerDto.totalQuantity,
      cost: updateRiceStockMillerDto.cost,
      totalCost: updateRiceStockMillerDto.totalCost,
      paymentStatus: updateRiceStockMillerDto.paymentStatus,
      section: updateRiceStockMillerDto.section,
      purchaseDate: updateRiceStockMillerDto.purchaseDate,
      updated_By: updatedBy,
      miller: miller,
    });

    await this.riceStockMillerRepository.save(riceStockMiller);

    // Update the total stock for the miller
    await this.updateTotalStock(updateRiceStockMillerDto, miller);

    return riceStockMiller;
  }

  // Delete a rice stock record
  async remove(id: string): Promise<void> {
    const riceStockMiller = await this.findOne(id);
    await this.riceStockMillerRepository.delete(riceStockMiller.id);
  }

  // Get all total stock
  async getAllTotalStock(): Promise<TotalStock[]> {
    const totalStock = await this.totalStockRepository.find({
      relations: ['miller'],
    });

    if (!totalStock || totalStock.length === 0) {
      throw new NotFoundException('No total stock found');
    }

    // Cast the relevant fields to numbers
    return totalStock.map(stock => ({
      ...stock,
      Quantity: Number(stock.Quantity),
      totalQuantity: Number(stock.totalQuantity),
      totalCost: Number(stock.totalCost),
    }));
  }
}
