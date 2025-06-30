import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';
import pinkProducts from '../../images/keune/pinkProducts.jpg';
import CarouselDrive from '../../components/Carousel';

import sassy3 from '../../images/sassy/sassy3.jpg'
import sassy4 from '../../images/sassy/sassy4.jpg'



function AboutDesktop() {
  return (
    <Paper
  elevation={0}
  sx={{
    bgcolor: '#E0E0E0',
    py: 8,
    px: 0,
    width: '100%',
    minHeight: '100vh',
    boxSizing: 'border-box',
  }}
>
      <Box sx={{ px: 4 }}>
        {/* === Top Section: About === */}
        <Paper
          elevation={3}
          sx={{
            p: 6,
            borderRadius: '20px',
            border: '3px solid #ccc',
            mb: 8,
          }}
        >
          <Box sx={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {/* Left: Text Content */}
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                minWidth: '300px',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography variant="pageHeader" gutterBottom>
                About
              </Typography>

              <Typography variant="sectionHeader" gutterBottom>
                We’re Changing the Way People Think About Hair
              </Typography>

              {[
                'Styles, trends, and fashions are forever changing. At Sassy Hair, we aim to combine the very best Keune products with our highly skilled and trained stylists to remain at the very cutting edge.',
                'Our mission is to build long-lasting friendships with you, our fabulous clients. We listen, we’re attentive, and we want nothing more than for you to leave our salons feeling happy, vibrant and loving your new look.',
                'With salons located centrally in Weston and Pearce, we arent ever too far from you.',
                'Established in 2005, we have a long and proud association with the Canberra region. ',
              ].map((text, index) => (
                <Typography variant="text" paragraph key={index}>
                  {text}
                </Typography>
              ))}
            </Box>

            {/* Right: Carousel */}
            <Box
              sx={{
                flex: 1,
                minWidth: '300px',
                maxWidth: '500px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 3,
                alignSelf: 'flex-start',
              }}
            >
              <CarouselDrive height="400px" borderRadius="0px"/>
            </Box>
          </Box>
        </Paper>

        {/* === Middle Section: Quote === */}
        <Paper
          elevation={3}
          sx={{
            p: 6,
            borderRadius: '20px',
            border: '3px solid #ccc',
            mb: 8,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 6,
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Overlapping Collage Images */}
            <Box
              sx={{
                position: 'relative',
                width: '250px',
                height: '260px',
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src={sassy4}
                alt="Salon collage 1"
                sx={{
                  width: '100%',
                  height: '150px',
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
                src={sassy3}
                alt="Salon collage 2"
                sx={{
                  width: '100%',
                  height: '170px',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  boxShadow: 4,
                  position: 'absolute',
                  top: 90,
                  left: 40,
                  zIndex: 2,
                }}
              />
            </Box>

            {/* Quote Section */}
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                textAlign: 'right',
                minWidth: '280px',
              }}
            >
              <Box sx={{ maxWidth: '480px', ml: 'auto' }}>
                <Typography variant="text" paragraph sx={{ fontStyle: 'italic' }}>
                  Our aim is to create a warm, welcoming space allowing you to relax in comfort.
                  We’ve worked hard to build a highly skilled team, passionate about their craft
                  who enjoy bringing about the change you’re looking for.
                </Typography>
                <Typography variant="subtitle1">Bec & Dan</Typography>
                <Typography variant="caption" color="text.secondary">
                  Co-Founders
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* === Bottom Section: Keune Products === */}
        <Paper
          elevation={3}
          sx={{
            p: 6,
            borderRadius: '20px',
            backgroundColor: '#FFFFFF',
            border: '3px solid #ccc',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 6,
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Keune Description */}
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                minWidth: '300px',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography variant="sectionHeader" gutterBottom>
                KEUNE, THROUGH & THROUGH
              </Typography>

              <Typography variant="text" paragraph>
                Founded in 1922, family-owned and operated Keune symbolises many of the qualities
                we promote through our team – love, passion, skill, honesty, open communication,
                social responsibility, and trust.
              </Typography>

              <Typography variant="text" paragraph>
                Their hair care products are produced in house and exported to over 70 countries
                worldwide. We carry the largest range of Keune hair products in Canberra and we’re
                proud to call ourselves members of their global family.
              </Typography>

              <Typography>Get a refill of your keune products without having to come in</Typography>
                <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: '20px' }}
            href="https://keune.com.au/pages/salon/sassy-hair-weston-2904A"
          >
            Buy Now
          </Button>

            </Box>

            {/* Keune Product Image */}
            <Box
              sx={{
                flex: 1,
                minWidth: '300px',
                maxWidth: '500px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 3,
                alignSelf: 'flex-start',
              }}
            >
              <img
                src={pinkProducts}
                alt="Keune Hair Products"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              
            </Box>

            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                minWidth: '300px',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
              >
                
              </Box>

          </Box>
        </Paper>
      </Box>
    </Paper>
  );
}

export default AboutDesktop;
