import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userReposiory: typeof User) {} //add model

  async createUser(dto: CreateUserDto) {
    const user = await this.userReposiory.create(dto);
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.userReposiory.findOne({ where: { email } });
    return user;
  }
}
