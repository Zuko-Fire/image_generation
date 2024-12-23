import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserDto } from 'src/types/CreateUserDto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(  
    @InjectModel(User)
    private readonly userRepo: typeof User) {
  }

  async getUserById(id: number): Promise<User> {
    return this.userRepo.findByPk(id);
  }
  async createUser(request: CreateUserDto): Promise<User> {
    return this.userRepo.create({ ...request });
  }
  async checkUser(login: string): Promise<User> {
    return this.userRepo.findOne({
      where: { login },
    });
  }

}
