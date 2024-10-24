import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Miller } from './entities/miller.entity';
import { CreateMillerDto } from './dto/create-miller.dto';
import { UpdateMillerDto } from './dto/update-miller.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class MillerService {
  constructor(
    @InjectRepository(Miller)
    private readonly millerRepository: Repository<Miller>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  // Create a new miller
  async create(createMillerDto: CreateMillerDto): Promise<Miller> {
    const createdBy = await this.usersRepository.findOne({
      where: { id: createMillerDto.created_By },
      select: ['id', 'username', 'email'],
    });
    if (!createdBy) {
      throw new NotFoundException('User (created_By) not found');
    }

    const updatedBy = await this.usersRepository.findOne({
      where: { id: createMillerDto.updated_By },
      select: ['id', 'username', 'email'],
    });
    if (!updatedBy) {
      throw new NotFoundException('User (updated_By) not found');
    }

    const miller = this.millerRepository.create({
      ...createMillerDto,
      created_By: createdBy,
      updated_By: updatedBy,
    });

    return this.millerRepository.save(miller);
  }

  // Find all millers
  async findAll(): Promise<Miller[]> {
    return this.millerRepository.find({
      relations: ['created_By', 'updated_By'], // Include relations with created_By and updated_By users
    });
  }

  // Find a miller by ID
  async findOne(id: number): Promise<Miller> {
    const miller = await this.millerRepository.findOne({
      where: { id },
      relations: ['created_By', 'updated_By'], // Include relations with created_By and updated_By users
    });
    if (!miller) {
      throw new NotFoundException('Miller not found');
    }
    return miller;
  }

  // Update a miller by ID
  async update(id: number, updateMillerDto: UpdateMillerDto): Promise<Miller> {
    const miller = await this.findOne(id);
    if (!miller) {
      throw new NotFoundException('Miller not found');
    }

    if (updateMillerDto.updated_By) {
      const updatedBy = await this.usersRepository.findOne({ where: { id: updateMillerDto.updated_By } });
      if (!updatedBy) {
        throw new NotFoundException('User (updated_By) not found');
      }
      miller.updated_By = updatedBy;
    }

    if (updateMillerDto.created_By) {
      const createdBy = await this.usersRepository.findOne({ where: { id: updateMillerDto.created_By } });
      if (!createdBy) {
        throw new NotFoundException('User (created_By) not found');
      }
      miller.created_By = createdBy;
    }

    Object.assign(miller, updateMillerDto);

    return this.millerRepository.save(miller);
  }

  // Remove a miller by ID
  async remove(id: number): Promise<void> {
    const miller = await this.findOne(id);
    if (!miller) {
      throw new NotFoundException('Miller not found');
    }
    await this.millerRepository.delete(id);
  }
}
