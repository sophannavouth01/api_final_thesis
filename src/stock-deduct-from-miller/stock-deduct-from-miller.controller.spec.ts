import { Test, TestingModule } from '@nestjs/testing';
import { StockDeductFromMillerController } from './stock-deduct-from-miller.controller';
import { StockDeductFromMillerService } from './stock-deduct-from-miller.service';

describe('StockDeductFromMillerController', () => {
  let controller: StockDeductFromMillerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockDeductFromMillerController],
      providers: [StockDeductFromMillerService],
    }).compile();

    controller = module.get<StockDeductFromMillerController>(StockDeductFromMillerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
