import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f0f0f0',
        py: 2,
        px: { xs: 2, md: 4 },
        mt: 6,
        fontSize: '0.7rem',
        color: 'text.secondary',
      }}
    >
      <Typography variant="body2" align="center" sx={{ mb: 1 }}>
        © 2022 Sassy Hair. All rights reserved.
      </Typography>

      <Typography variant="body2" align="center" sx={{ mb: 1 }}>
        <Link href="/privacy-policy" underline="hover" color="inherit">
          Privacy Policy
        </Link>
        {' | '}
        Images courtesy of{' '}
        <Link href="https://keune.com/" target="_blank" rel="noopener" underline="hover" color="inherit">
          Keune
        </Link>
      </Typography>

      <Typography variant="body2" align="center" sx={{ mb: 1 }}>
        * Prices listed are starting prices, subject to hair length. Finishing service not included.  
        <br />
        All technical services must include a finishing service to guarantee results.
        <br />
        ** Regrowth of no more than 6 weeks  
        <br />
       
      </Typography>

      {/* SEO metadata (non-visible) */}
      <Box sx={{ display: 'none' }}>
        <Typography variant="body2">
          Sassy Hair Canberra hair salon locations: Weston, Hawker, Pearce. Professional cuts, colour, and styling.
        </Typography>
        <Typography variant="body2">
          Trusted with Keune professional hair products. Book appointments via phone or email. Family-owned.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
