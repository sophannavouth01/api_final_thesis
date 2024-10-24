import { PartialType } from '@nestjs/swagger';
import { CreateStockDeductFromMillerDto } from './create-stock-deduct-from-miller.dto';

export class UpdateStockDeductFromMillerDto extends PartialType(CreateStockDeductFromMillerDto) {}
