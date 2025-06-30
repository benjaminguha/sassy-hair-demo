import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

function SassyCollectiveDesktop() {
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
      <Box sx={{ px: 0 }}>
        <Paper
          elevation={3}
          sx={{
            p: 6,
            borderRadius: '20px', // <-- Rounded corners here
            border: '3px solid #ccc',
            width: '100%',
            boxSizing: 'border-box',
            mx: 'auto', // Center it just in case it’s constrained
          }}
        >
          <Box
            sx={{
              width: '100%',
              px: { xs: 2, md: 8 },
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Typography variant="pageHeader" gutterBottom>
              The Sassy Collective
            </Typography>

            <Typography variant="sectionHeader" gutterBottom>
              Your Chair. Your Clients. Our Space.
            </Typography>

            <Typography variant="text" paragraph>
              Looking for a professional, welcoming, and stylish space to grow your hairdressing business?
              At Sassy Hair, we offer chair rental opportunities for experienced stylists ready to run their own business on their own terms.
            </Typography>

            <Typography variant="text" paragraph>
              Whether you're an established stylist with your own clientele or looking to move toward greater independence, we provide the environment and support to make it happen. Enjoy the freedom of managing your own schedule while working alongside a collaborative team in a beautifully maintained salon.
            </Typography>

            <Typography variant="text" paragraph>
              If you're interested in learning more about how it works, we'd love to hear from you.
              Let's chat about your future at The Sassy Collective or Sassy Hair Pearce.
            </Typography>

            <Box>
              <Button
                variant="contained"
                color="primary"
                href="mailto:appointments@sassyhair.com.au?subject=Rent%20a%20Chair%20at%20Sassy%20Hair"
                sx={{ fontWeight: 'bold', borderRadius: '20px', mt: 2 }}
              >
                Work With Us
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Paper>
  );
}

export default SassyCollectiveDesktop;
