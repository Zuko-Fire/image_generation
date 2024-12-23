import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
  Divider,
  IconButton,
  Paper,
  Box,
  Menu,
  MenuItem,
  Tabs,
  Tab
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useToggle } from '../../hooks/useToggle';
import { useAuth } from '../../store/auth';

import { LoginModal } from './modals/LoginModal';
import { RegisterModal } from './modals/RegisterModal';
import type { FC } from 'react';

interface Props {
  hiddenSearc?: boolean;
}

export const TopPanel: FC<Props> = ({ hiddenSearc }) => {
  const [openLogin, openLoginToggle] = useToggle(false);
  const [openReg, openRegToggle] = useToggle(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { user, api } = useAuth();

  const navigate = useNavigate();
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(18, 18, 18, 0.5)', backdropFilter: 'blur(15px)' }}>
      <Toolbar sx={{ minHeight: '100px', justifyContent: 'space-between' }}> {/* Increased height */}
        <Typography style={{ cursor: 'pointer' }} onClick={() => navigate('/')} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Image Art AI
        </Typography>

        {/* Tabs Section */}
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
            onClick={() => navigate('/')}
          >
            Исследуй
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
            onClick={() => navigate('/create')}
          >
            Создавай
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
            onClick={() => navigate('/learn')}
          >
            Изучай
          </Button>
        </Box>

        <Box padding="1rem">
          {user ? (
            <Box flexDirection="column">
              <Button color="inherit" onClick={handleMenu}>
                {user.login}
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => navigate(`/user/${user.id}`)}>
                  Профиль
                </MenuItem>
                <MenuItem onClick={() => api.exit()}>Выйти</MenuItem>
              </Menu>
            </Box>
          ) : (
            <>
              <Button color="inherit" onClick={openLoginToggle}>
                Войти
              </Button>
              <Button color="inherit" onClick={openRegToggle}>
                Зарегистрироваться
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
      <LoginModal open={openLogin} onClose={openLoginToggle} />
      <RegisterModal open={openReg} onClose={openRegToggle} />
    </AppBar>
  );
};