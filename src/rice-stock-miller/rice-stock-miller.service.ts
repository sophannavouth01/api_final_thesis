import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRiceStockMillerDto } from './dto/create-rice-stock-miller.dto';
import { RiceStockMiller } from './entities/rice-stock-miller.entity';
import { Miller } from 'src/miller/entities/miller.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class RiceStockMillerService {
  constructor(
    @InjectRepository(RiceStockMiller)
    private readonly riceStockMillerRepository: Repository<RiceStockMiller>,

    @InjectRepository(Miller)
    private readonly millerRepository: Repository<Miller>,

    @InjectRepository(User)  // Inject the User repository
    private readonly userRepository: Repository<User>,  // Add the UserRepository here
  ) {}

  // Create a new rice stock record
  async create(createRiceStockMillerDto: CreateRiceStockMillerDto): Promise<RiceStockMiller> {
    // Find the Miller record first
    const miller = await this.millerRepository.findOne({
      where: { id: createRiceStockMillerDto.miller_id },
    });

    if (!miller) {
      throw new NotFoundException('Miller not found');
    }

    // Fetch the created_By user
    const createdBy = await this.userRepository.findOne({
      where: { id: createRiceStockMillerDto.created_By },
    });

    if (!createdBy) {
      throw new NotFoundException('User for created_By not found');
    }

    // Fetch the updated_By user (same as created_By for this example)
    const updatedBy = await this.userRepository.findOne({
      where: { id: createRiceStockMillerDto.updated_By },
    });

    if (!updatedBy) {
      throw new NotFoundException('User for updated_By not found');
    }

    // Create and save the RiceStockMiller record with the miller and user references
    const riceStockMiller = this.riceStockMillerRepository.create({
      quantity: createRiceStockMillerDto.quantity,
      totalQuantity: createRiceStockMillerDto.totalQuantity,
      cost: createRiceStockMillerDto.cost,
      totalCost: createRiceStockMillerDto.totalCost,
      paymentStatus: createRiceStockMillerDto.paymentStatus,
      section: createRiceStockMillerDto.section,
      purchaseDate: createRiceStockMillerDto.purchaseDate,
      created_By: createdBy,  // Assign the created_By user object
      updated_By: updatedBy,  // Assign the updated_By user object
      miller: miller,  // Assign the found miller object
    });

    return this.riceStockMillerRepository.save(riceStockMiller);
  }

  // Retrieve all rice stock records
  async findAll(): Promise<RiceStockMiller[]> {
    return this.riceStockMillerRepository.find({
      relations: ['created_By', 'updated_By', 'miller'], // Adjust relation names here as well
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
    const riceStockMiller = await this.findOne(id); // Will throw an error if not found

    // Find the Miller record if provided
    const miller = await this.millerRepository.findOne({
      where: { id: updateRiceStockMillerDto.miller_id },
    });

    if (!miller) {
      throw new NotFoundException('Miller not found');
    }

    // Fetch the updated_By user
    const updatedBy = await this.userRepository.findOne({
      where: { id: updateRiceStockMillerDto.updated_By },
    });

    if (!updatedBy) {
      throw new NotFoundException('User for updated_By not found');
    }

    // Fetch the created_By user
    const createdBy = await this.userRepository.findOne({
      where: { id: updateRiceStockMillerDto.created_By },
    });

    if (!createdBy) {
      throw new NotFoundException('User for created_By not found');
    }

    // Merge the update data
    this.riceStockMillerRepository.merge(riceStockMiller, {
      quantity: updateRiceStockMillerDto.quantity,
      totalQuantity: updateRiceStockMillerDto.totalQuantity,
      cost: updateRiceStockMillerDto.cost,
      totalCost: updateRiceStockMillerDto.totalCost,
      paymentStatus: updateRiceStockMillerDto.paymentStatus,
      section: updateRiceStockMillerDto.section,
      purchaseDate: updateRiceStockMillerDto.purchaseDate,
      updated_By: updatedBy,  // Assign the user object for update
      created_By: createdBy,  // Ensure created_By is still correct
      miller: miller,  // Update miller relation
    });

    return this.riceStockMillerRepository.save(riceStockMiller);
  }

  // Delete a rice stock record
  async remove(id: string): Promise<void> {
    const riceStockMiller = await this.findOne(id); // Will throw an error if not found
    await this.riceStockMillerRepository.delete(riceStockMiller.id);
  }
}
