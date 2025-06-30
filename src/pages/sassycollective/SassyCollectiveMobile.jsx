import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

function SassyCollectiveMobile() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        px: { xs: 2, sm: 3 },
        py: { xs: 4, sm: 6 },
        boxSizing: 'border-box',
        overflowX: 'hidden',
        bgcolor: '#E0E0E0',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1400px' }}>
        <Typography
          variant="h5"
          align="center"
          color="primary"
          gutterBottom
          sx={{ fontFamily: '"Lucida Handwriting", cursive' }}
        >
          The Sassy Collective
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: '20px',
            border: '2px solid #ccc',
            bgcolor: '#fff',
          }}
        >
          <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Your Chair. Your Clients. Our Space.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            Are you an experienced stylist ready to grow your business independently?
            At Sassy Hair, we offer rental chairs in a beautifully maintained, vibrant salon environment.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            Enjoy the freedom to manage your own clients and schedule, while working among a welcoming and collaborative team.
          </Typography>

          <Typography variant="body2" sx={{ mb: 4 }}>
            If you're interested in how it works or want to see the space, get in touch today. Let’s talk about your future at Sassy Pearce or The Sassy Collective Weston.
          </Typography>

          <Box textAlign="center">
            <Button
              variant="contained"
              color="primary"
              href="mailto:appointments@sassyhair.com.au?subject=Rent%20a%20Chair%20at%20Sassy%20Hair"
              sx={{ fontWeight: 'bold', borderRadius: '20px' }}
            >
              Work With Us
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default SassyCollectiveMobile;
