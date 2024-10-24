import { Test, TestingModule } from '@nestjs/testing';
import { StockDeductFromMillerService } from './stock-deduct-from-miller.service';

describe('StockDeductFromMillerService', () => {
  let service: StockDeductFromMillerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockDeductFromMillerService],
    }).compile();

    service = module.get<StockDeductFromMillerService>(StockDeductFromMillerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
