// ContactUsMobile.jsx
import React from 'react';
import { Box, Typography, Paper, Link as MuiLink, IconButton, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Facebook, Instagram } from '@mui/icons-material';
import sassyLogo from '../../images/sassy-logo.bmp';
import keuneLogo from '../../images/keune-logo.png';

function ContactUsMobile() {
  return (
    <Box sx={{ px: 2, py: 4, display: { xs: 'block', md: 'none' } }}>
      <Typography
        variant="h4"
        color="primary"
        align="center"
        sx={{ mb: 4, fontFamily: '"Lucida Handwriting", cursive' }}
      >
        Get In Touch
      </Typography>

      {[{
        title: 'Weston',
        address: '1 Brierly St, Weston',
        phone: '(02) 6282 7888',
        email: 'weston@sassyhair.com.au',
        tel: '0262827888',
        mailto: 'mailto:weston@sassyhair.com.au'
      }, {
        title: 'Hawker',
        address: 'Hawker Shops, Hawker Pl',
        phone: '(02) 6251 2111',
        email: 'hawker@sassyhair.com.au',
        tel: '0262512111',
        mailto: 'mailto:hawker@sassyhair.com.au'
      }].map((store, idx) => (
        <Paper key={idx} elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: 'center', mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Lucida Handwriting", cursive' }}>{store.title}</Typography>
          <Box mb={1}><LocationOnIcon sx={{ mr: 1 }} /> {store.address}</Box>
          <Box mb={1}><PhoneIcon sx={{ mr: 1 }} /> <MuiLink href={`tel:${store.tel}`} underline="hover">{store.phone}</MuiLink></Box>
          <Box mb={2}><EmailIcon sx={{ mr: 1 }} /> <MuiLink href={store.mailto} underline="hover">{store.email}</MuiLink></Box>
          <Typography variant="body1" fontWeight="bold">Opening Hours:</Typography>
          <Typography variant="body1">Monday: 9am–5:30pm</Typography>
          <Typography variant="body1">Tuesday: 9am–5:30pm</Typography>
          <Typography variant="body1">Wednesday: 9am–5:30pm</Typography>
          <Typography variant="body1">Thursday: 9am–5:30pm</Typography>
          <Typography variant="body1">Friday: 9am–5:30pm</Typography>
          <Typography variant="body1">Saturday: 8am–2pm</Typography>
          <Typography variant="body1">Sunday: Closed</Typography>
        </Paper>
      ))}

      <Paper elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Lucida Handwriting", cursive' }}>Contact</Typography>
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
    </Box>
  );
}

export default ContactUsMobile;
