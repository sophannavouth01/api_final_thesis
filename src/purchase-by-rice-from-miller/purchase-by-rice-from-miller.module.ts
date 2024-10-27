import { Module } from '@nestjs/common';
import { PurchaseByRiceFromMillerService } from './purchase-by-rice-from-miller.service';
import { PurchaseByRiceFromMillerController } from './purchase-by-rice-from-miller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseByRiceFromMiller } from './entities/purchase-by-rice-from-miller.entity';
import { Miller } from 'src/miller/entities/miller.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseByRiceFromMiller, Miller, User])],
  controllers: [PurchaseByRiceFromMillerController],
  providers: [PurchaseByRiceFromMillerService],
})
export class PurchaseByRiceFromMillerModule {}
