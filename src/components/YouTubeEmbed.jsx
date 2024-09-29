import React from 'react';
import { Box, Paper, useTheme } from '@mui/material';

function YouTubeEmbed() {
  const theme = useTheme();
  const videoUrl = 'https://www.youtube.com/embed/ySrkPGYgbHk';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 64px)', // Subtract the AppBar height
        p: 3,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: 800,
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          borderRadius: 2,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title="YouTube Video Embed"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Paper>
    </Box>
  );
}

export default YouTubeEmbed;