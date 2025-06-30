import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Link as MuiLink,
  IconButton,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Facebook, Instagram } from '@mui/icons-material';
import sassyLogo from '../../images/sassy-logo.bmp';
import keuneLogo from '../../images/keune-logo.png';

function ContactUsDesktop() {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        py: 6,
        px: 2,
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1400px',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          align="center"
          sx={{ mb: 4, fontFamily: '"Lucida Handwriting", cursive' }}
        >
          Get In Touch
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {/* Weston */}
          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: 'center', flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Lucida Handwriting", cursive' }}>
                Weston
              </Typography>
              <Box mb={1}><LocationOnIcon sx={{ mr: 1 }} /> 1 Brierly St, Weston</Box>
              <Box mb={1}><PhoneIcon sx={{ mr: 1 }} /> <MuiLink href="tel:0262827888" underline="hover">(02) 6282 7888</MuiLink></Box>
              <Box mb={2}><EmailIcon sx={{ mr: 1 }} /> <MuiLink href="mailto:weston@sassyhair.com.au" underline="hover">weston@sassyhair.com.au</MuiLink></Box>
              <Typography variant="body1" fontWeight="bold">Opening Hours:</Typography>
              <Typography variant="body1">Monday–Friday: 9am–5:30pm</Typography>
            </Paper>
          </Grid>

          {/* Pearce */}
          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: 'center', flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Lucida Handwriting", cursive' }}>
                Contact
              </Typography>
              <Box mb={1}><PhoneIcon sx={{ mr: 1 }} /> <MuiLink href="tel:0262866488" underline="hover">(02) 6288 9922</MuiLink></Box>
              <Box mb={2}><EmailIcon sx={{ mr: 1 }} /> <MuiLink href="mailto:appointments@sassyhair.com.au">appointments@sassyhair.com.au</MuiLink></Box>
              <Box display="flex" justifyContent="center">
                <IconButton href="https://www.instagram.com/sassyhaircanberra/" target="_blank" rel="noopener" color="primary">
                  <Instagram />
                </IconButton>
                <IconButton href="https://www.facebook.com/sassyhaircanberra#" target="_blank" rel="noopener" color="primary">
                  <Facebook />
                </IconButton>
              </Box>
              <Box
                component={MuiLink}
                href="/"
                sx={{ mt: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, textDecoration: 'none' }}
              >
                <img src={sassyLogo} alt="Sassy Logo" style={{ height: 48, width: 'auto' }} />
                <Typography variant="h6" sx={{ color: 'black', fontWeight: 500 }}>|</Typography>
                <img src={keuneLogo} alt="Keune Logo" style={{ height: 32, width: 'auto' }} />
              </Box>
            </Paper>
          </Grid>

          {/* Hawker */}
          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: 'center', flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Lucida Handwriting", cursive' }}>
                Hawker
              </Typography>
              <Box mb={1}><LocationOnIcon sx={{ mr: 1 }} /> Hawker Shops, Hawker Pl</Box>
              <Box mb={1}><PhoneIcon sx={{ mr: 1 }} /> <MuiLink href="tel:0262512111" underline="hover">(02) 6251 2111</MuiLink></Box>
              <Box mb={2}><EmailIcon sx={{ mr: 1 }} /> <MuiLink href="mailto:hawker@sassyhair.com.au" underline="hover">hawker@sassyhair.com.au</MuiLink></Box>
              <Typography variant="body1" fontWeight="bold">Opening Hours:</Typography>
              <Typography variant="body1">Monday–Friday: 9am–5:30pm</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ContactUsDesktop;
