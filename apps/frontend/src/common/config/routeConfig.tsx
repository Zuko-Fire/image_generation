import { Typography } from '@mui/material'
import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../../pages/MainPage/MainPage'
import ImageGenerationPage from '../../pages/ImageGenerationPage/ImageGenerationPage'


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />

  },
  {
        path: '/create',
        element: <ImageGenerationPage />
  },
  { path: '*', element: <Typography>Страница не найдена!</Typography> }
])
