import { LoadingButton } from '@mui/lab'
import {
  Box, Button, Dialog, TextField, Typography 
} from '@mui/material'
import { useState, type FC } from 'react'
import { useLogin } from '../../../../service/query'
import { useAuth } from '../../../../store/auth'
import type { RegisterAnswerDto, RegisterDto } from '../../../../dto'

interface Props {
  onClose: () => void;
  open: boolean;
}
export const LoginModal: FC<Props> = ({ onClose, open }) => {
  const { api } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = useLogin()
  const handleSubmit = () => {
    login.mutate({ email, password }, {
      onSuccess: (data) => {
        const answer = data as RegisterAnswerDto
        localStorage.setItem('token', answer.accessToken)
        api.setUser(answer.user)
        onClose()
      }
    })
    
  }
  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        display="flex"
        flexDirection="column"
        width="300px"
        height="300px"
        alignItems="center"
        padding="2rem"
        gap="2rem"
      >
        <Typography>Авторизация</Typography>
        <TextField 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Почта" />
        <TextField 
          onChange={(e) => setPassword(e.target.value)} 
          type="password" placeholder="Пароль" />
        <LoadingButton 
          loading={login.isLoading} 
          onClick={handleSubmit} 
          variant="contained">Войти</LoadingButton>
      </Box>
    </Dialog>
  )
}
