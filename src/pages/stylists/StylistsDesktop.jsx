import React from 'react';
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import female7 from '../../images/keune/female7.jpg';

// Updated stylist list
const stylists = [
  { name: 'Caroline', role: 'Independent Stylist', location: 'The Sassy Collective Weston', img: female7, blurb: '', type: 'contractor' },
  { name: 'Cindy', role: 'Senior Stylist', location: 'Sassy Hair Pearce', img: female7, blurb: '', type: 'employed' },
  { name: 'Daniel', role: 'Senior Stylist', location: 'Sassy Hair Pearce', img: female7, blurb: '', type: 'employed' },
  { name: 'Sadie', role: 'Academy Stylist', location: 'Sassy Hair Pearce', img: female7, blurb: '', type: 'employed' },
  { name: 'Shanae', role: 'Junior Academy Stylist', location: 'Sassy Hair Pearce', img: female7, blurb: '', type: 'employed' },
  { name: 'Shari', role: 'Independent Stylist', location: 'The Sassy Collective Weston', img: female7, blurb: '', type: 'contractor' },
  { name: 'Zoe', role: 'Senior Stylist', location: 'Sassy Hair Pearce', img: female7, blurb: '', type: 'employed' },
];

// Sort by type, then alphabetically by name
const typeOrder = { employed: 0, contractor: 1 };
const sortedStylists = [...stylists].sort((a, b) => {
  const typeComparison = (typeOrder[a.type] ?? 99) - (typeOrder[b.type] ?? 99);
  if (typeComparison !== 0) return typeComparison;
  return a.name.localeCompare(b.name);
});

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 300,
  margin: 'auto',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
  position: 'relative',
  overflow: 'hidden',
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
    <Box sx={{ px: 4, pt: 10, pb: 6 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Meet Our Stylists
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {sortedStylists.map((stylist, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <StyledCard>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={stylist.img}
                  alt={stylist.name}
                  height="300"
                  sx={{ objectFit: 'cover' }}
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default StylistsDesktop;
