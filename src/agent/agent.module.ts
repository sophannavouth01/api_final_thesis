import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentController } from './agent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agent } from './entities/agent.entity';
import { User } from 'src/users/entities/user.entity';
import { Position } from 'src/positions/entities/position.entity';
import { Branch } from 'src/branch/entities/branch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agent,User,Position,Branch])],
  controllers: [AgentController],
  providers: [AgentService],
})
export class AgentModule {}
