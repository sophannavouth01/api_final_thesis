import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';
import { PositionsModule } from './positions/positions.module';
import { BranchModule } from './branch/branch.module';
import { MillerModule } from './miller/miller.module';
import { AgentModule } from './agent/agent.module';
import { PurchaseByRiceFromMillerModule } from './purchase-by-rice-from-miller/purchase-by-rice-from-miller.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsersModule,
    RolesModule,
    EmployeesModule,
    AuthModule,
    PositionsModule,
    BranchModule,
    MillerModule,
    AgentModule,
    PurchaseByRiceFromMillerModule,
    CustomerModule,
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('Database Host:', process.env.DATABASE_HOST);
    console.log('Database Port:', process.env.DATABASE_PORT);
    console.log('Database Username:', process.env.DATABASE_USERNAME);
    console.log('Database Password:', process.env.DATABASE_PASSWORD);
    console.log('Database Name:', process.env.DATABASE_NAME);
  }
}
