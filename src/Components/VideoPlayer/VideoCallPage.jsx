import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Typography, IconButton } from '@mui/material';
import { VolumeOff, CallEnd, MicOff } from '@mui/icons-material';
import Speech from '../Speech/Speech';

function VideoCallPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 400,
        margin: '0 auto',
        padding: 2,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          paddingTop: '20px',
          width: '100%',
          maxWidth: 300,
          margin: '0 auto',
        }}
      >
        <ReactPlayer url="https://res.cloudinary.com/dx0dgujbj/video/upload/v1689395456/%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A5%80-%E0%A4%AC%E0%A4%BE%E0%A4%B0-%E0%A4%AE%E0%A5%87-%E0%A4%95%E0%A5%81%E0%A4%9B-%E0%A4%A8%E0%A4%B9%E0%A5%80-%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A4%BE-_-Sonu-Sharma-Success-Motivation-__motivational-_short-_shorts-_shortsvideo720P_HD_bkftpt.mp4" width="100%" height="100%" controls={true} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
          <Speech />
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 4,
          gap: 2,
          padding: '0 16px',
        }}
      >
        <IconButton color="inherit">
          <VolumeOff />
        </IconButton>
        <IconButton color="inherit">
          <CallEnd />
        </IconButton>
        <IconButton color="inherit">
          <MicOff />
        </IconButton>
      </Box>
    </Box>
  );
}

export default VideoCallPage;
