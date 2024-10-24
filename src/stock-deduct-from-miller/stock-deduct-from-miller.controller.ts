import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockDeductFromMillerService } from './stock-deduct-from-miller.service';
import { CreateStockDeductFromMillerDto } from './dto/create-stock-deduct-from-miller.dto';
import { UpdateStockDeductFromMillerDto } from './dto/update-stock-deduct-from-miller.dto';

@Controller('stock-deduct-from-miller')
export class StockDeductFromMillerController {
  constructor(private readonly stockDeductFromMillerService: StockDeductFromMillerService) {}

  @Post()
  create(@Body() createStockDeductFromMillerDto: CreateStockDeductFromMillerDto) {
    return this.stockDeductFromMillerService.create(createStockDeductFromMillerDto);
  }

  @Get()
  findAll() {
    return this.stockDeductFromMillerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockDeductFromMillerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockDeductFromMillerDto: UpdateStockDeductFromMillerDto) {
    return this.stockDeductFromMillerService.update(+id, updateStockDeductFromMillerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockDeductFromMillerService.remove(+id);
  }
}
