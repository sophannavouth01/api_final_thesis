import { Module } from '@nestjs/common';
import { PurchaseByRiceFromMillerService } from './purchase-by-rice-from-miller.service';
import { PurchaseByRiceFromMillerController } from './purchase-by-rice-from-miller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseByRiceFromMiller } from './entities/purchase-by-rice-from-miller.entity';
import { Miller } from 'src/miller/entities/miller.entity';
import { User } from 'src/users/entities/user.entity';
import { Branch } from 'src/branch/entities/branch.entity';
import { Agent } from 'src/agent/entities/agent.entity'; // Corrected import path

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseByRiceFromMiller, Miller, User, Branch, Agent])],
  controllers: [PurchaseByRiceFromMillerController],
  providers: [PurchaseByRiceFromMillerService],
})
export class PurchaseByRiceFromMillerModule {}
