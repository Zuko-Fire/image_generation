import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class StableDiffusionService {
  constructor(private httpService: HttpService) {}

  async generateImage(prompt: string): Promise<string> {
    const url = 'http://localhost:7860/sdapi/v1/txt2img'; 
    const payload = {
      prompt: prompt,
      steps: 20,
      cfg_scale: 7,
      width: 512,
      height: 512,
    };

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, payload),
      );

      // Предполагаем, что API возвращает массив изображений в формате Base64
      const imageBase64 = response.data.images[0];

      // Возвращаем изображение в формате Base64
      return imageBase64;
    } catch (error) {
      console.error('Error generating image:', error.message);
      throw new Error('Failed to generate image');
    }
  }
}