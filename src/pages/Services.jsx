// src/pages/Services.jsx
import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

// Import the two separate views
import HomeDesktop from './home/HomeDesktop.jsx';
import HomeMobile from './home/HomeMobile.jsx';
import ServicesDesktop from './services/ServicesDesktop.jsx';
import ServicesMobile from './services/ServicesMobile.jsx';

function Services() {
  const theme = useTheme();
  // Check for medium screens and down
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Conditionally return the correct component based on the screen size
  return isMobile ? <ServicesMobile /> : <ServicesDesktop />;
}

export default Services;