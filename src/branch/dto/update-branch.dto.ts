import { PartialType } from '@nestjs/swagger';
import { CreateBranchsDto } from './create-branch.dto';

export class UpdateBranchDto extends PartialType(CreateBranchsDto) {}
