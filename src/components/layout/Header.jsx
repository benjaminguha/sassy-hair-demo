// src/components/Header.jsx
import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

// Import the two separate header views
import HeaderDesktop from './header/HeaderDesktop';
import HeaderMobile from './header/HeaderMobile';

// 1. Define the navigation data in one central place
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' }, // ← Add this line
  { label: 'Services', path: '/services' },
  { label: 'Stylists', path: '/stylists' },
  { label: 'Photos', path: '/photos' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'The Sassy Collective', path: '/sassy-collective' },
  {label: 'A', path:'/admin'}
];


function Header() {
  const theme = useTheme();
  // 2. Check for screen size
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // 3. Render the correct component and pass the navItems data as a prop
  return isMobile 
    ? <HeaderMobile navItems={navItems} /> 
    : <HeaderDesktop navItems={navItems} />;
}

export default Header;