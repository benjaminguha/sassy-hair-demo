import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import sassyLogo from '../../../images/sassy-logo.bmp';
import keuneLogo from '../../../images/keune-logo.png';

function HeaderDesktop({ navItems }) {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left Logos Wrapped in Link */}
        <Box
          component={Link}
          to="/"
          sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}
        >
          <img
            src={sassyLogo}
            alt="Sassy Logo"
            style={{ height: 48, width: 'auto' }}
          />
          <Typography variant="h6" sx={{ color: 'black', fontWeight: 500 }}>
            |
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={keuneLogo}
              alt="Keune Logo"
              style={{ height: 28, width: 'auto' }}
            />
          </Box>
        </Box>

        {/* Navigation */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            ml: 'auto',
            mr: 2,
            flexWrap: 'nowrap',
            whiteSpace: 'nowrap',
            overflowX: 'auto',
            maxWidth: '100%',
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                color: 'black',
                fontWeight: 500,
                fontSize: '0.75rem',
                px: 1.5,
                minWidth: 'auto',
                whiteSpace: 'nowrap',
                '&:hover': {
                  color: 'magenta',
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Smaller Book Button */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            variant="contained"
            color="primary"
            href="https://app.salonrunner.com/customer/login.htm?id=27134"
            sx={{
              borderRadius: '16px',
              fontSize: '0.7rem',
              px: 2,
              py: 0.75,
              textTransform: 'none',
              fontWeight: 500,
            }}
          >
            Book Online
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderDesktop;
