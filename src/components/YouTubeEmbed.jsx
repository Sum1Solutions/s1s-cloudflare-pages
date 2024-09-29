import React from 'react';
import { Box, Paper, Button, useTheme } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import config from '../config';

function YouTubeEmbed() {
  const theme = useTheme();
  const videoUrl = `https://www.youtube.com/embed/${config.youtubeVideoId}?vq=hd1080`;

  const openWide = () => {
    // Navigate to the YouTube video URL in the same window
    window.location.href = `https://www.youtube.com/watch?v=${config.youtubeVideoId}`;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
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
      <Button
        variant="contained"
        color="primary"
        startIcon={<FullscreenIcon />}
        onClick={openWide}
        sx={{ mt: 2 }}
      >
        Open Wide
      </Button>
    </Box>
  );
}

export default YouTubeEmbed;