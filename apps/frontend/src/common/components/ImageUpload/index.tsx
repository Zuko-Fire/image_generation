import {
  Box, Button, Input, Typography 
} from '@mui/material'
import { useRef, useState } from 'react'
import type { ChangeEvent, FC } from 'react'

interface Props extends Omit<typeof Button, 'onClick' | 'onChange'> {
  onChange?: (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => void;
  accept?: string;
  multiple?: boolean;
  src?: string;
}

export const ImageUpload: FC<Props> = ({
  onChange,
  accept,
  multiple,
  src
}) => {
  const [file, setFile] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  console.log(file)
  const handleFileSelect = () => {
    fileInputRef.current?.click()
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const selectedFile = e?.target?.files?.[0]
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile))
      if (onChange) onChange(e)
    }
  }
  console.log(src)
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        border: '1px solid black',
        width: '248px',
        height: '248px'
      }}
    >
      <Input
        type="file"
        inputRef={fileInputRef}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      <Button
        sx={{ height: '100%' }}
        fullWidth={true}
        onClick={handleFileSelect}
      >
        {file || src ? (
          <img src={src || file} height="100%" width="100%" />
        ) : (
          <Typography>Изображение</Typography>
        )}
      </Button>
    </Box>
  )
}
