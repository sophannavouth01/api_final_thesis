import { PartialType } from '@nestjs/swagger';
import { CreatePurchaseByRiceFromMillerDto } from './create-purchase-by-rice-from-miller.dto';

export class UpdatePurchaseByRiceFromMillerDto extends PartialType(CreatePurchaseByRiceFromMillerDto) {}
