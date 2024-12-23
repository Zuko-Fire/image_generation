import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import { StableDiffusionService } from './stable-diffusion.service';

@Controller('stable-diffusion')
export class StableDiffusionController {
  constructor(@Inject(StableDiffusionService) private stableDiffusionService: StableDiffusionService) {}
  @Post('')
  async generate(@Body('prompt') prompt: string, @Res() res) {
    console.log(prompt);
    const imageBase64 = await this.stableDiffusionService.generateImage(prompt);
    
    // Устанавливаем заголовок Content-Type для изображения
    res.set('Content-Type', 'image/png'); // или 'image/jpeg', в зависимости от формата
    res.send(Buffer.from(imageBase64, 'base64')); // Отправляем изображение в виде буфера
    return res;
  }
}