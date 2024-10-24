import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { Position } from './entities/position.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PositionsService {
  constructor(
    @InjectRepository(Position)
    private readonly positionsRepository: Repository<Position>,
  ) {}

  create(createPositionDto: CreatePositionDto): Promise<Position> {
    const position = this.positionsRepository.create(createPositionDto);
    return this.positionsRepository.save(position);
  }

  findAll(): Promise<Position[]> {
    return this.positionsRepository.find();
  }

  findOne(id: number): Promise<Position> {
    return this.positionsRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePositionDto: UpdatePositionDto): Promise<Position> {
    await this.positionsRepository.update(id, updatePositionDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.positionsRepository.delete(id);
  }
}
