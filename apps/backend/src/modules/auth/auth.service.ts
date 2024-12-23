import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.model';
import { plainToClass } from 'class-transformer';
import { ResponseUserDto } from 'src/types/ResponseUserDto';
import { CreateUserDto } from 'src/types/CreateUserDto';
import { LoginUserDto } from 'src/types/LoginUserDto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  createToken(id: number): string {
    return this.jwtService.sign({ id });
  }

  async register(request: CreateUserDto): Promise<{ user: ResponseUserDto; token: string }> {
    const user = await this.userService.createUser(request);
    const token = this.createToken(user.id);
    return { user: plainToClass(ResponseUserDto, user), token };
  }

  async getUserByToken(id: number): Promise<User> {
    const user = await this.userService.getUserById(id);
    return user;
  }

  async login(user: LoginUserDto ): Promise<{ token: string; user: ResponseUserDto }> {
    const existedUser = await this.userService.checkUser(user.login);
    if (existedUser == null) throw new NotFoundException();
    const isPasswordValid: boolean = await existedUser.validatePassword(
      user.password,
    );
    if (!isPasswordValid) throw new BadRequestException();
    const token = this.createToken(existedUser.id);
    const userJson = existedUser.toJSON();

    return { token, user: plainToClass(ResponseUserDto, userJson) };
  }
}
