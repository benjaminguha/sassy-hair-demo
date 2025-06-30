import React from 'react';
import { Typography, Paper, Box, Stack, IconButton } from '@mui/material';
import { Instagram, Facebook, Email } from '@mui/icons-material';
import swishBrush from '../../images/swishBrush.png';

import CarouselDrive from '../../components/Carousel'; // ✅ Import carousel component
import AboutDesktop from '../about/AboutDesktop';
import ServicesDesktop from '../services/ServicesDesktop';
import StylistsDesktop from '../stylists/StylistsDesktop';

function HomeDesktop() {
  return (
    <Box sx={{ width: '90%', mx: 'auto', mt: 8, display: { xs: 'none', md: 'block' } }}>
      <Paper elevation={3} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
        {/* ============ HERO SECTION ============ */}
        <Box sx={{ position: 'relative', height: '450px', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
          {/* ✅ Carousel Background */}
          <CarouselDrive height="450px" borderRadius="0px" />

          {/* Overlay Text */}
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
              p: 4,
              zIndex: 1,
            }}
          >
            <Stack spacing={2} alignItems="flex-start">
              <Typography variant="h3" component="h1" sx={{ fontFamily: '"Lucida Handwriting", cursive' }}>
                We are Sassy!
              </Typography>
              <Typography variant="h6">
                Exceptionally Trained And Award Winning Stylists.
                <br />
                Unparalleled Service.
                <br />
                Every Time.
              </Typography>
            </Stack>
          </Box>

          {/* Swish Divider */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '120%',
              height: '40px',
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

        {/* ============ SOCIAL ICONS ============ */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, py: 3 }}>
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

        {/* ============ MAIN SECTIONS ============ */}
        <AboutDesktop />
        <ServicesDesktop />
        <StylistsDesktop />
        {/* <ContactUsDesktop /> */}
      </Paper>
    </Box>
  );
}

export default HomeDesktop;
