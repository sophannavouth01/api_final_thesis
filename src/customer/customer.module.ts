import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { Customer } from './entities/customer.entity';
import { Position } from 'src/positions/entities/position.entity';
import { User } from 'src/users/entities/user.entity';
import { Branch } from 'src/branch/entities/branch.entity';
import { Agent } from 'src/agent/entities/agent.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer, Position, User, Branch, Agent]) // Add Agent here
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
