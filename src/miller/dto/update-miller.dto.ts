import { PartialType } from '@nestjs/swagger';
import { CreateMillerDto } from './create-miller.dto';

export class UpdateMillerDto extends PartialType(CreateMillerDto) {}
