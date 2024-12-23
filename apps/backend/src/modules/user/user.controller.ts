import { Controller, Get, Patch, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/:id') getUserById() {}
  @Post('') createUser() {}
  @Patch('') editUser() {}
}
