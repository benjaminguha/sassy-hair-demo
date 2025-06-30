// src/pages/Home.jsx
import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

// Import the two separate views

import SassyCollectiveMobile from './sassycollective/SassyCollectiveMobile.jsx';
import SassyCollectiveDesktop from './sassycollective/SassyCollectiveDesktop.jsx';

function SassyCollective() {
  const theme = useTheme();
  // Check for medium screens and down
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Conditionally return the correct component based on the screen size
  return isMobile ? <SassyCollectiveMobile /> : <SassyCollectiveDesktop />;
}

export default SassyCollective;