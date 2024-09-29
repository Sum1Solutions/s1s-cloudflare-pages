import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, styled, Switch, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  textDecoration: 'none',
}));

function Header({ mode, toggleMode }) {
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
            href="https://www.youtube.com/@sum1namedjon"
            target="_blank"
            rel="noopener noreferrer"
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