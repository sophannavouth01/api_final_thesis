import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { Employee } from './entities/employee.entity';
import { Position } from 'src/positions/entities/position.entity';

import { Role } from 'src/roles/entities/role.entity';
import { User } from 'src/users/entities/user.entity';
import { Branch } from 'src/branch/entities/branch.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Employee,  Position, User,Branch]),
  ],
  providers: [EmployeesService],
  controllers: [EmployeesController],
})
export class EmployeesModule {}