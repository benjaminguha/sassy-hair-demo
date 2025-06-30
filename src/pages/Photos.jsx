// src/pages/Home.jsx
import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

// Import the two separate views
import HomeDesktop from './home/HomeDesktop.jsx';
import HomeMobile from './home/HomeMobile.jsx';
import PhotosMobile from './photos/PhotosMobile.jsx';
import PhotosDesktop from './photos/PhotosDesktop.jsx';

function Photos() {
  const theme = useTheme();
  // Check for medium screens and down
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Conditionally return the correct component based on the screen size
  return isMobile ? <PhotosMobile /> : <PhotosDesktop />;
}

export default Photos;