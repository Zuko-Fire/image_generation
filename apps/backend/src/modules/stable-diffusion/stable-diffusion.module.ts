import { Module } from '@nestjs/common';
import { StableDiffusionController } from './stable-diffusion.controller';
import { StableDiffusionService } from './stable-diffusion.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [StableDiffusionService],
  controllers: [StableDiffusionController]
})
export class StableDiffusionModule {}
