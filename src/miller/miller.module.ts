import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MillerService } from './miller.service';
import { MillerController } from './miller.controller';
import { Miller } from './entities/miller.entity';
import { User } from 'src/users/entities/user.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Miller, User, Employee]), // Register Miller, User, and Employee entities
  ],
  controllers: [MillerController],
  providers: [MillerService],
})
export class MillerModule {}
