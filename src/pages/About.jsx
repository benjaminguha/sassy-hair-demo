// src/pages/About.jsx
import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import AboutMobile from './about/AboutMobile';
import AboutDesktop from './about/AboutDesktop';

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile ? <AboutMobile /> : <AboutDesktop />;
}

export default About;
