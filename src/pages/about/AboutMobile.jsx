import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';
import pinkProducts from '../../images/keune/pinkProducts.jpg';
import CarouselDrive from '../../components/Carousel'; // ✅ Reusable carousel

function AboutMobile() {
  return (
    <Box sx={{ bgcolor: '#E0E0E0', p: 2, pb: 6 }}>
      <Stack spacing={4} alignItems="center">
        {/* === TOP: Carousel === */}
        <Paper elevation={3} sx={{ width: '100%', borderRadius: '16px', overflow: 'hidden' }}>
          <CarouselDrive height="300px" borderRadius="0px" />
        </Paper>

        {/* === MIDDLE: About Text === */}
        <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', width: '100%', backgroundColor: '#ffffff' }}>
          <Typography
            variant="h5"
            fontFamily='"Lucida Handwriting", cursive'
            color="primary"
            gutterBottom
          >
            About
          </Typography>

          {[
                'Styles, trends, and fashions are forever changing. At Sassy Hair, we aim to combine the very best Keune products with our highly skilled and trained stylists to remain at the very cutting edge.',
                'Our mission is to build long-lasting friendships with you, our fabulous clients. We listen, we’re attentive, and we want nothing more than for you to leave our salons feeling happy, vibrant and loving your new look.',
                'With salons located centrally in Weston and Pearce, we arent ever too far from you.',
                'Established in 2005, we have a long and proud association with the Canberra region. ',
              ].map((text, index) => (
                <Typography variant="text" paragraph key={index}>
                  {text}
                </Typography>))}
        </Paper>

        {/* === QUOTE Section === */}
        <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', width: '100%', backgroundColor: '#FCEFF9' }}>
          <Stack direction="column" spacing={3} alignItems="center">
            {/* Overlapping Images */}
            <Box sx={{ position: 'relative', width: '90%', height: '260px' }}>
              <Box
                component="img"
                src="https://images.pexels.com/photos/3992878/pexels-photo-3992878.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Salon collage 1"
                sx={{
                  width: '100%',
                  height: '120px',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  boxShadow: 2,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />
              <Box
                component="img"
                src="https://images.pexels.com/photos/3992929/pexels-photo-3992929.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Salon collage 2"
                sx={{
                  width: '100%',
                  height: '120px',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  boxShadow: 4,
                  position: 'absolute',
                  top: 60,
                  left: 20,
                  zIndex: 2,
                }}
              />
            </Box>

            {/* Quote Text */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary" paragraph>
                Our aim is to create a warm, welcoming space allowing you to relax in comfort. We’ve worked hard to build a highly skilled team, passionate about their craft who enjoy bringing about the change you’re looking for.
              </Typography>
              <Typography variant="h6">Bec & Dan</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Co-Founders
              </Typography>
            </Box>
          </Stack>
        </Paper>

        {/* === KEUNE Section === */}
        <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', width: '100%', backgroundColor: '#ffffff' }}>
          <Stack spacing={3}>
            <Typography variant="h6" gutterBottom>
              KEUNE, THROUGH & THROUGH
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Founded in 1922, family-owned and operated Keune symbolises many of the qualities we promote through our team – love, passion, skill, honesty, open communication, social responsibility, and trust.
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Their hair care products are produced in house and exported to over 70 countries worldwide. We carry the largest range of Keune hair products in Canberra and we’re proud to call ourselves members of their global family.
            </Typography>

            <Box
              component="img"
              src={pinkProducts}
              alt="Keune Hair Products"
              sx={{
                width: '100%',
                borderRadius: '12px',
                objectFit: 'cover',
                boxShadow: 2,
              }}
            />
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}

export default AboutMobile;
