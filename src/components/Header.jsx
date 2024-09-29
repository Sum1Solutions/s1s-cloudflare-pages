import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, styled, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import config from '../config';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: 'var(--logo-color)',
  textDecoration: 'none',
  fontFamily: config.titleFont,  // Use the font from config
  textTransform: 'uppercase',
  letterSpacing: '2px',
}));

function Header({ mode, toggleMode }) {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    window.location.href = config.aboutUrl;
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <StyledToolbar>
        <Logo variant="h5" component={RouterLink} to="/">
          Sum1 Solutions
        </Logo>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button
            color="inherit"
            onClick={handleAboutClick}
          >
            About
          </Button>
          <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;