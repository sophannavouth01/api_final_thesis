import { Module } from '@nestjs/common';
import { StockDeductFromMillerService } from './stock-deduct-from-miller.service';
import { StockDeductFromMillerController } from './stock-deduct-from-miller.controller';

@Module({
  controllers: [StockDeductFromMillerController],
  providers: [StockDeductFromMillerService],
})
export class StockDeductFromMillerModule {}
