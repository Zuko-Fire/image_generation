import { Controller, Get, Patch, Post } from '@nestjs/common';

@Controller('art')
export class ArtController {
  @Get('my') getMyArt() {}
  @Get('all') getAllArt() {}
  @Post('create') createArt() {}
  @Patch('update') updateArt() {}
}
