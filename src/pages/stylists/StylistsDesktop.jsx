import React from 'react';
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import stylists from '../../data/stylists.js';

// Sort stylists alphabetically
const sortedStylists = [...stylists].sort((a, b) => a.name.localeCompare(b.name));

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 300,
  margin: 'auto',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
  overflow: 'hidden',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },
  '&:hover .hoverContent': {
    opacity: 1,
  },
}));

const NameOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'rgba(0,0,0,0.5)',
  color: '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  zIndex: 2,
}));

const HoverOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(2),
  opacity: 0,
  transition: 'opacity 0.3s ease',
  zIndex: 1,
}));

function StylistsDesktop() {
  return (
    <Box sx={{ px: 4, pt: 10, pb: 6, width: '100%' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Meet Our Stylists
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {sortedStylists.map((stylist, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <a
              href="https://app.salonrunner.com/customer/login.htm?id=27134"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <StyledCard>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={stylist.img}
                    alt={stylist.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <NameOverlay>
                    <Typography variant="h6">{stylist.name}</Typography>
                  </NameOverlay>
                  <HoverOverlay className="hoverContent">
                    <Typography variant="subtitle1" fontWeight="bold">
                      {stylist.role} – {stylist.location}
                    </Typography>
                    {stylist.blurb && (
                      <Typography variant="body2" mt={1}>
                        {stylist.blurb}
                      </Typography>
                    )}
                  </HoverOverlay>
                </Box>
              </StyledCard>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default StylistsDesktop;
