// PhotosMobile.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { InstagramEmbed } from 'react-social-media-embed';

const posts = [
  { url: 'https://www.instagram.com/p/DIP8xcwTVVB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', key: '1' },
  { url: 'https://www.instagram.com/p/DHFktegzq8p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', key: '2' },
  // More links can be added here
];

function PhotosMobile() {
  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Typography
        variant="h5"
        color="primary"
        align="center"
        gutterBottom
        sx={{ fontFamily: '"Lucida Handwriting", cursive' }}
      >
        Latest on Instagram
      </Typography>
      <Grid container spacing={3} direction="column" alignItems="center">
        {posts.map((post) => (
          <Grid item key={post.key} xs={12} sx={{ width: '100%' }}>
            <InstagramEmbed url={post.url} width="100%" captioned />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PhotosMobile;
