import React from 'react';
import HomeMobile from './home/HomeMobile';
import HomeDesktop from './home/HomeDesktop';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import ContactUsDesktop from './contactus/ContactUsDesktop';
import ContactUsMobile from './contactus/ContactUsMobile';

function ContactUs() {
  const theme= useTheme();
  
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile? <ContactUsMobile/> : <ContactUsDesktop/>;

}

export default ContactUs;
