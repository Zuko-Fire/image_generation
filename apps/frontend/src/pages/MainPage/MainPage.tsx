import { Box, Paper, Modal, Button, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { TopPanel } from "../../common/components/TopPanel";
import { CardBox } from "./components/CardBox/CardBox";
import { CardComponent } from "./components/CardComponent/CardComponent";
import { TopImagesBox } from "./components/TopImagesBox/TopImagesBox";

export const MainPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Check localStorage for saved credentials
    const savedLogin = localStorage.getItem('login');
    const savedPassword = localStorage.getItem('password');

    if (savedLogin && savedPassword) {
      setLogin(savedLogin);
      setPassword(savedPassword);
      setIsAuthenticated(true);
    } else {
      setOpenAuthModal(true); // Show modal if no credentials found
    }
  }, []);

  const handleLogin = () => {
    if (login && password) {
      setIsAuthenticated(true);
      localStorage.setItem('login', login);
      localStorage.setItem('password', password);
      setOpenAuthModal(false);
    } else {
      alert("Введите логин и пароль!");
    }
  };

  const handleCloseModal = () => {
    setOpenAuthModal(false);
  };

  const cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(<CardComponent key={i} />);
  }

  return (
    <Paper>
      <Box
        sx={{
          overflowY: 'auto', // Enable vertical scrolling
          maxHeight: '100vh', // Limit height to viewport
          '&::-webkit-scrollbar': {
            width: '1px', // Width of the scrollbar
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(128, 128, 128, 0.5)', // Color of the scrollbar thumb
            borderRadius: '10px', // Rounded corners for the thumb
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent', // Background of the scrollbar track
          },
          scrollbarWidth: 'thin', // For Firefox
          scrollbarColor: 'rgba(128, 128, 128, 0.5) transparent', // Color for Firefox
          scrollBehavior: 'smooth', // Smooth scrolling
          filter: openAuthModal ? 'blur(5px)' : 'none', // Blur background when modal is open
        }}
      >
        <TopPanel />
        <TopImagesBox />
        <CardBox>
          {cards.map((card) => card)}
        </CardBox>
      </Box>

      {/* Authentication Modal */}
      <Modal
        open={openAuthModal}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: 24,
            width: '300px',
          }}
        >
          <Typography color='black' variant="h6" component="h2" gutterBottom>
            Вход в систему
          </Typography>
          <TextField
            label="Логин"
            variant="outlined"
            fullWidth
            margin="normal"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            label="Пароль"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
            Войти
          </Button>
        </Box>
      </Modal>
    </Paper>
  );
};