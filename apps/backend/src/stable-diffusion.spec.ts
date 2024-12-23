import { Test, TestingModule } from '@nestjs/testing';
import { StableDiffusion } from './modules/stable-diffusion/stable-diffusion.service';

describe('StableDiffusion', () => {
  let provider: StableDiffusion;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StableDiffusion],
    }).compile();

    provider = module.get<StableDiffusion>(StableDiffusion);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
