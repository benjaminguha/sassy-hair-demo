import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
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

// Sort by type, then alphabetically by first name
const typeOrder = { employed: 0, contractor: 1 };
const sortedStylists = [...stylists].sort((a, b) => {
  const typeComparison = (typeOrder[a.type] ?? 99) - (typeOrder[b.type] ?? 99);
  if (typeComparison !== 0) return typeComparison;
  return a.name.localeCompare(b.name);
});

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 350,
  margin: 'auto',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
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
}));

function StylistsMobile() {
  return (
    <Box sx={{ px: 2, pt: 8, pb: 4 }}>
      <Typography variant="h5" gutterBottom textAlign="center">
        Meet Our Stylists
      </Typography>
      <Grid container spacing={3}>
        {sortedStylists.map((stylist, index) => (
          <Grid item xs={12} key={index}>
            <StyledCard>
              <Box sx={{ position: 'relative' }}>
                <CardMedia component="img" image={stylist.img} alt={stylist.name} height="240" />
                <NameOverlay>
                  <Typography variant="h6">{stylist.name}</Typography>
                </NameOverlay>
              </Box>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  {stylist.role} – {stylist.location}
                </Typography>
                {stylist.blurb && (
                  <Typography variant="body2" mt={1}>
                    {stylist.blurb}
                  </Typography>
                )}
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default StylistsMobile;
