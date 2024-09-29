import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import YouTubeEmbed from './components/YouTubeEmbed';
import config from './config'; // Add this import

function App() {
  const [mode, setMode] = useState(config.initialMode); // Use the initial mode from config

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#ff4081',
          },
          background: {
            default: mode === 'light' ? '#f5f5f5' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
        },
        typography: {
          fontFamily: "'Poppins', sans-serif",
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                '--logo-color': mode === 'light' ? '#0077be' : '#00a8e8',
              },
            },
          },
        },
      }),
    [mode]
  );

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<YouTubeEmbed />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;