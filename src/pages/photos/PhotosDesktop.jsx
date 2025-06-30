import React from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import { InstagramEmbed } from 'react-social-media-embed';

const posts = [
  { url: 'https://www.instagram.com/p/DIP8xcwTVVB/', key: '1' },
  { url: 'https://www.instagram.com/p/DHFktegzq8p/', key: '2' },
  { url: 'https://www.instagram.com/p/DHFktegzq8p/', key: '3' },
  { url: 'https://www.instagram.com/p/DHFktegzq8p/', key: '4' },
  { url: 'https://www.instagram.com/p/DHFktegzq8p/', key: '5' },
  { url: 'https://www.instagram.com/p/DHFktegzq8p/', key: '6' },
];

function PhotosDesktop() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        px: 0,
        py: { xs: 4, md: 6 },
        boxSizing: 'border-box',
      }}
    >
      <Typography
        variant="h4"
        color="primary"
        align="center"
        gutterBottom
        sx={{ fontFamily: '"Lucida Handwriting", cursive', px: 2 }}
      >
        Latest on Instragram
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{ width: '100%', margin: 0 }}
      >
        {posts.map((post) => (
          <Grid item key={post.key} xs={12} sm={6} md={4} lg={3} xl={2.4}>
            <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
              <InstagramEmbed url={post.url} width="100%" captioned />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PhotosDesktop;
