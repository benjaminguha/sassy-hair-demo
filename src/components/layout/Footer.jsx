// src/components/Header.jsx
import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

// Import the two separate header views

import FooterMobile from './footer/FooterMobile';
import FooterDesktop from './footer/FooterDesktop';

// 1. Define the navigation data in one central place
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Stylists', path: '/stylists' },
  { label: 'Photos', path: '/photos' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Work With Us', path: '/work-with-us' },
];

function Footer() {
  const theme = useTheme();
  // 2. Check for screen size
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // 3. Render the correct component and pass the navItems data as a prop
  return isMobile 
    ? <FooterMobile navItems={navItems} /> 
    : <FooterDesktop navItems={navItems} />;
}

export default Footer;