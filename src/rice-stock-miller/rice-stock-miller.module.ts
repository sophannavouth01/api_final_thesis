import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiceStockMillerService } from './rice-stock-miller.service';
import { RiceStockMillerController } from './rice-stock-miller.controller';
import { RiceStockMiller } from './entities/rice-stock-miller.entity';
import { Miller } from 'src/miller/entities/miller.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RiceStockMiller, Miller,User])], // Import both entities
  controllers: [RiceStockMillerController],
  providers: [RiceStockMillerService],
})
export class RiceStockMillerModule {}
