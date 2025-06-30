// src/pages/Home.jsx
import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

// Import the two separate views
import HomeDesktop from './home/HomeDesktop.jsx';
import HomeMobile from './home/HomeMobile.jsx';
import StylistsMobile from './stylists/StylistsMobile.jsx';
import StylistsDesktop from './stylists/StylistsDesktop.jsx';

function Stylists() {
  const theme = useTheme();
  // Check for medium screens and down
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Conditionally return the correct component based on the screen size
  return isMobile ? <StylistsMobile /> : <StylistsDesktop />;
}

export default Stylists;