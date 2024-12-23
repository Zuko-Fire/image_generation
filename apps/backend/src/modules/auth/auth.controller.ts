import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/types/CreateUserDto';
import { AuthService } from './auth.service';
import { ResponseUserDto } from 'src/types/ResponseUserDto';
import { AuthGuard } from './auth.guards';
import { LoginUserDto } from 'src/types/LoginUserDto';
import { RequestUser } from 'src/types/RequestUserDto';

@Controller('auth')
export class AuthController { 
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@Body() data: CreateUserDto): Promise<{ user: ResponseUserDto; token: string }> {
    return this.authService.register(data);
  }
  @Post('login')
  login(@Body() data: LoginUserDto): Promise<{ user: ResponseUserDto; token: string }> {
    return this.authService.login(data);
  }
  @UseGuards(AuthGuard)
  @Get('whoami')
  getUserByToken(@Request() auth:RequestUser ): ResponseUserDto {
    return auth.user;
  }
}
