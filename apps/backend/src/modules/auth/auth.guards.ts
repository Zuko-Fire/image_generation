import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

import { AuthService } from './auth.service';
import { plainToClass } from 'class-transformer';
import { ResponseUserDto } from 'src/types/ResponseUserDto';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (token === '' || token == null) {
      throw new UnauthorizedException();
    }
    try {
      const payload = this.jwtService.decode(token);
      const user = await this.authService.getUserByToken(payload['id']);
      const plainUser = plainToClass(ResponseUserDto, user.toJSON());
      request.user = plainUser;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | null {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : null;
  }
}