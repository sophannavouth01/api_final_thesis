import { Injectable } from '@nestjs/common';
import { CreateStockDeductFromMillerDto } from './dto/create-stock-deduct-from-miller.dto';
import { UpdateStockDeductFromMillerDto } from './dto/update-stock-deduct-from-miller.dto';

@Injectable()
export class StockDeductFromMillerService {
  create(createStockDeductFromMillerDto: CreateStockDeductFromMillerDto) {
    return 'This action adds a new stockDeductFromMiller';
  }

  findAll() {
    return `This action returns all stockDeductFromMiller`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockDeductFromMiller`;
  }

  update(id: number, updateStockDeductFromMillerDto: UpdateStockDeductFromMillerDto) {
    return `This action updates a #${id} stockDeductFromMiller`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockDeductFromMiller`;
  }
}
