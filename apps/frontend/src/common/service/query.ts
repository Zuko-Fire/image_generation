import { useMutation } from 'react-query'

import { Service } from './service'
import type { UseMutate } from '../config/react-query'
import type { LoginDto, RegisterDto } from '../dto'

export const useRegister = (): UseMutate<RegisterDto> =>
  useMutation(Service.register)

export const useLogin = (): UseMutate<LoginDto> => 
  useMutation(Service.login)

export const useImage = (): UseMutate<string> =>
  useMutation(Service.getImage)
