import React from 'react';
import { Typography, Paper, Box, Stack, IconButton } from '@mui/material';
import { Instagram, Facebook, Email } from '@mui/icons-material';
import swishBrush from '../../images/swishBrush.png';

import CarouselDrive from '../../components/Carousel'; // ✅ Import carousel
import AboutMobile from '../about/AboutMobile';
import ServicesMobile from '../services/ServicesMobile';
import StylistsMobile from '../stylists/StylistsMobile';
// import ContactUsMobile from '../contactus/ContactUsMobile';

function HomeMobile() {
  return (
    <Box sx={{ width: '95%', mx: 'auto', mt: 6, display: { xs: 'block', md: 'none' } }}>
      <Paper elevation={3} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
        {/* HERO SECTION */}
        <Box sx={{ position: 'relative', height: '300px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
          {/* ✅ Carousel replaces background image */}
          <CarouselDrive height="300px" borderRadius="0px" />

          {/* Overlay text */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              textAlign: 'left',
              p: 2,
              zIndex: 1,
            }}
          >
            <Stack spacing={1} alignItems="flex-start">
              <Typography variant="h5" component="h1" sx={{ fontFamily: '"Lucida Handwriting", cursive' }}>
                We are Sassy!
              </Typography>
              <Typography variant="body1">
                Exceptionally Trained And Award Winning Stylists.
                <br />
                Unparalleled Service.
                <br />
                Every Time.
              </Typography>
            </Stack>
          </Box>

          {/* SWISH DIVIDER */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '120%',
              height: '30px',
              backgroundImage: `url(${swishBrush})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center bottom',
              backgroundSize: 'cover',
              zIndex: 2,
              pointerEvents: 'none',
              opacity: 0.6,
              transform: 'translateX(-10%)',
            }}
          />
        </Box>

        {/* SOCIAL ICONS */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, py: 2 }}>
          <IconButton href="https://www.instagram.com/sassyhaircanberra/" target="_blank" rel="noopener" color="primary">
            <Instagram />
          </IconButton>
          <IconButton href="https://www.facebook.com/sassyhaircanberra#" target="_blank" rel="noopener" color="primary">
            <Facebook />
          </IconButton>
          <IconButton href="mailto:appointments@sassyhair.com.au" color="primary">
            <Email />
          </IconButton>
        </Box>

        {/* CONTENT SECTIONS */}
        <AboutMobile />
        <ServicesMobile />
        <StylistsMobile />
        {/* <ContactUsMobile /> */}
      </Paper>
    </Box>
  );
}

export default HomeMobile;
