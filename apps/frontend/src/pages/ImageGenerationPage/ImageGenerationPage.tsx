import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel, Modal } from '@mui/material';
import { TopPanel } from '../../common/components/TopPanel'; // Adjust the import path as necessary

const ImageGenerationPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(true); // Start with modal open
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [model, setModel] = useState('');
  const [style, setStyle] = useState('');
  const [seed, setSeed] = useState('');
  const [size, setSize] = useState('');

  // Sample data for models and styles
  const models = ['Model A', 'Model B', 'Model C', 'Model D'];
  const styles = ['Abstract', 'Realism', 'Surrealism', 'Impressionism'];
  const sizes = ['256x256', '512x512', '1024x1024'];

  const handleGenerateImage = () => {
    // Logic for image generation will go here
    console.log('Generating image with settings:', { model, style, seed, size });
  };

  const handleLogin = () => {
    // Here you would typically validate the login credentials
    if (login && password) {
      setIsAuthenticated(true);
      setOpenAuthModal(false);
    } else {
      alert("Введите логин и пароль!");
    }
  };

  const handleCloseModal = () => {
    setOpenAuthModal(false);
  };

  return (
    <Box sx={{ height: '100vh', backgroundColor: 'rgba(18, 18, 18, 0.5)', backdropFilter: 'blur(10px)' }}>
      {/* Top Panel */}
      <TopPanel />

      {/* Main Content */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '2rem',
          height: 'calc(100vh - 64px)', // Adjust height based on TopPanel height
        }}
      >
        {/* Image Frame */}
        <Paper
          sx={{
            flex: 1,
            marginRight: '2rem',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <Typography variant="h6" color="white">
            Здесь будет сгенерированное изображение
          </Typography>
        </Paper>

        {/* Settings Form */}
        <Paper
          sx={{
            flex: 1,
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <Typography variant="h5" color="white" gutterBottom>
            Настройки генерации изображения
          </Typography>

          {/* Model Selection */}
          <FormControl fullWidth variant="outlined" sx={{ marginBottom: '1rem' }}>
            <InputLabel id="model-select-label">Модель</InputLabel>
            <Select
              labelId="model-select-label"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              label="Модель"
              sx={{ backgroundColor: 'white' }}
            >
              {models.map((model) => (
                <MenuItem key={model} value={model}>
                  {model}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Style Selection */}
          <FormControl fullWidth variant="outlined" sx={{ marginBottom: '1rem' }}>
            <InputLabel id="style-select-label">Стиль</InputLabel>
            <Select
              labelId="style-select-label"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              label="Стиль"
              sx={{ backgroundColor: 'white' }}
            >
              {styles.map((style) => (
                <MenuItem key={style} value={style}>
                  {style}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Seed Input */}
          <TextField
            label="Сид"
            variant="outlined"
            fullWidth
            margin="normal"
            value={seed}
            onChange={(e) => setSeed(e.target.value)}
            sx={{ backgroundColor: 'white' }}
          />

          {/* Size Selection */}
          <FormControl fullWidth variant="outlined" sx={{ marginBottom: '1rem' }}>
            <InputLabel id="size-select-label">Размер</InputLabel>
            <Select
              labelId="size-select-label"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              label="Размер"
              sx={{ backgroundColor: 'white' }}
            >
              {sizes.map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Generate Button */}
          <Button variant="contained" color="primary" onClick={handleGenerateImage} fullWidth>
            Сгенерировать изображение
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default ImageGenerationPage;