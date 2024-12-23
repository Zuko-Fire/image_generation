import baseApiService from '../config/axios'
import type { LoginDto, RegisterAnswerDto, RegisterDto } from '../dto'

export const Service = {
  register: (data: RegisterDto): Promise<RegisterAnswerDto> =>
    baseApiService.post('auth/register/', data),
  login: (data: LoginDto ): Promise<RegisterAnswerDto> => 
    baseApiService.post('auth/login', data),
  
  getImage: (image: string):Promise<Blob> => baseApiService.get(`files/${image}`)

}
