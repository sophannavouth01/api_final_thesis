import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>,
    @InjectRepository(Employee)
    private readonly employeesRepository: Repository<Employee>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const user = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    if (createUserDto.role_id) {
      user.role = await this.rolesRepository.findOne({ where: { id: createUserDto.role_id } });
    }
    if (createUserDto.employee_id) {
      user.employee = await this.employeesRepository.findOne({ where: { id: createUserDto.employee_id } });
    }

    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({
      select: ['id', 'username', 'email'], 
      relations: ['role'], 
    });
  }
  
  // users.service.ts

findOne(id: number): Promise<User> {
  return this.usersRepository.findOne({
    where: { id },
    select: ['id', 'username', 'email'], 
    relations: ['role'],
  });
}

  

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (updateUserDto.password) {
      const salt = await bcrypt.genSalt();
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, salt);
    }

    if (updateUserDto.role_id) {
      user.role = await this.rolesRepository.findOne({ where: { id: updateUserDto.role_id } });
    }
    if (updateUserDto.employee_id) {
      user.employee = await this.employeesRepository.findOne({ where: { id: updateUserDto.employee_id } });
    }

    Object.assign(user, updateUserDto);
    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username }, relations: ['role', 'employee'] });
  }
  async findByIdWithRelations(userId: number): Promise<any> {
    return this.usersRepository.findOne({
      where: { id: userId },
      relations: ['role'],
    });
  }
  
}
