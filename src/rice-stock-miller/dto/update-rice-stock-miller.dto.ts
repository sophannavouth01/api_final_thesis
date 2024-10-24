import { PartialType } from '@nestjs/swagger';
import { CreateRiceStockMillerDto } from './create-rice-stock-miller.dto';

export class UpdateRiceStockMillerDto extends PartialType(CreateRiceStockMillerDto) {}
