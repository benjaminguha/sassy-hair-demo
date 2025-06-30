import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem } from '@mui/material';

const ImageManager = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [newImage, setNewImage] = useState('');
  const [newInstaPost, setNewInstaPost] = useState('');

  const addImage = () => {
    setCarouselImages([...carouselImages, newImage]);
    setNewImage('');
  };

  const addInstaPost = () => {
    setInstagramPosts([...instagramPosts, newInstaPost]);
    setNewInstaPost('');
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>Manage Carousel Images</Typography>
      <TextField label="Image URL" value={newImage} onChange={(e) => setNewImage(e.target.value)} />
      <Button onClick={addImage} sx={{ ml: 2 }}>Add</Button>
      <List>
        {carouselImages.map((img, i) => (
          <ListItem key={i}>{img}</ListItem>
        ))}
      </List>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Manage Instagram Posts</Typography>
      <TextField label="Instagram Link" value={newInstaPost} onChange={(e) => setNewInstaPost(e.target.value)} />
      <Button onClick={addInstaPost} sx={{ ml: 2 }}>Add</Button>
      <List>
        {instagramPosts.map((link, i) => (
          <ListItem key={i}>{link}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ImageManager;
