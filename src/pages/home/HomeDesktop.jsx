import React from 'react';
import { Typography, Paper, Box, Stack, IconButton } from '@mui/material';
import { Instagram, Facebook, Email } from '@mui/icons-material';
import swishBrush from '../../images/swishBrush.png';

import CarouselDrive from '../../components/Carousel';
import AboutDesktop from '../about/AboutDesktop';
import ServicesDesktop from '../services/ServicesDesktop';
import StylistsDesktop from '../stylists/StylistsDesktop';

function HomeDesktop() {
  return (
    <Box sx={{ width: '100%', mx: 'auto', mt: 8, display: { xs: 'none', md: 'block' } }}>
      <Paper elevation={3} sx={{ borderRadius: 0 }}>
        {/* === HERO SECTION === */}
        <Box sx={{ position: 'relative', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
          {/* Carousel as background */}
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
            <CarouselDrive height="100%" borderRadius="0px" />
          </Box>

          {/* Content overlay */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              px: 6,
              py: 4,
            }}
          >
            {/* Text */}
            <Stack spacing={2}>
              <Typography variant="h3" sx={{ fontFamily: '"Lucida Handwriting", cursive' }}>
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

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 4 }}>
              <IconButton
                href="https://www.instagram.com/sassyhaircanberra/"
                target="_blank"
                rel="noopener"
                color="primary"
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/sassyhaircanberra#"
                target="_blank"
                rel="noopener"
                color="primary"
              >
                <Facebook />
              </IconButton>
              <IconButton href="mailto:appointments@sassyhair.com.au" color="primary">
                <Email />
              </IconButton>
            </Box>
          </Box>

          {/* Swish divider */}
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

        <Box sx={{ height: 32, backgroundColor: '#ffffff' }} />

        {/* === OTHER SECTIONS === */}
        <AboutDesktop />
        <ServicesDesktop />
        <StylistsDesktop />
      </Paper>
    </Box>
  );
}

export default HomeDesktop;
