import { useEffect } from 'react'

import baseApiService from '../config/axios'
import { useAuth } from '../store/auth'
import type { User } from '../dto'
import type { FC } from 'react'

interface Props {
  children: JSX.Element;
}

export const Auth: FC<Props> = ({ children }) => {
  const { api } = useAuth()
  useEffect(() => {
    baseApiService.get('auth/whoami').then((data) => {
      api.setUser(data as unknown as User)
    })
  }, [])
  return children
}
