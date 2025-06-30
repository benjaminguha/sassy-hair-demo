import React from 'react';
import HomeMobile from './home/HomeMobile';
import HomeDesktop from './home/HomeDesktop';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

function Home() {
  const theme= useTheme();
  
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile? <HomeMobile/> : <HomeDesktop/>;

}

export default Home;
