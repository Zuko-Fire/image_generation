import { CircularProgress } from '@mui/material'
import type { FC } from 'react'

interface Props {
  isLoading: boolean
  children: JSX.Element
}
export const LoaderWrapper: FC<Props> = ({ isLoading, children }) => (
  <div style={{ width: '100%', height: '100%' }}>
    {children}
    {isLoading ? 

      <div style={{ opacity: '0.4' }}>  <CircularProgress />  </div> : null }
  </div>
)
