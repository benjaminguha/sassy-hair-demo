import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import sassyLogo from '../../../images/sassy-logo.bmp';
import keuneLogo from '../../../images/keune-logo.png';

function HeaderMobile({ navItems }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        component={Link}
        to="/"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, my: 2, textDecoration: 'none' }}
      >
        <img
          src={sassyLogo}
          alt="Sassy Logo"
          style={{ height: 44, width: 'auto' }}
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
      <List>
        {/* Home button manually added */}
        <ListItem
          component={Link}
          to="/"
          sx={{
            justifyContent: 'center',
            borderRadius: '8px',
            margin: '8px',
            textAlign: 'center',
            color: 'black',
            '&:hover': {
              color: 'magenta',
              backgroundColor: '#e0e0e0',
            },
            '&:active': {
              color: 'magenta'
            },
          }}
        >
          <ListItemText primary="Home" />
        </ListItem>

        {/* Render all other items except home */}
        {navItems
          .filter(item => item.label.toLowerCase() !== 'home')
          .map((item) => (
            <ListItem
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                justifyContent: 'center',
                borderRadius: '8px',
                margin: '8px',
                textAlign: 'center',
                color: 'black',
                '&:hover': {
                  color: 'magenta',
                  backgroundColor: '#e0e0e0',
                },
                '&:active': {
                  color: 'magenta'
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left: Hamburger + Logos */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              component={Link}
              to="/"
              sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}
            >
              <img
                src={sassyLogo}
                alt="Sassy Logo"
                style={{ height: 44, width: 'auto' }}
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
          </Box>

          {/* Right: Book Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: '20px', fontSize: '0.75rem' }}
            href="https://app.salonrunner.com/customer/login.htm?id=27134"
          >
            Book Online
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: 'block',
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default HeaderMobile;
