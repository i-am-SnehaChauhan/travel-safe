import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Typography, IconButton } from '@mui/material';
import { VolumeOff, CallEnd, MicOff } from '@mui/icons-material';

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
          paddingTop: '75%',
          width: '100%',
          maxWidth: 300,
          margin: '0 auto',
        }}
      >
        <ReactPlayer url="https://www.youtube.com/shorts/0u0gyT23JsU" width="100%" height="100%" controls={true} />
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
          Subtitle goes here
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
