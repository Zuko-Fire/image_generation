import { Request } from '@nestjs/common';
import { ResponseUserDto } from './ResponseUserDto';


export interface RequestUser extends Request {
  user: ResponseUserDto;
}