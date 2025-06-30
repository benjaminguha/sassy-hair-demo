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
          Join the Sassy Hair Family
        </Typography>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Passionate about hair and looking for a fresh start?
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            We’re always looking for creative, motivated team members—from senior stylists to first-year apprentices.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            At Sassy Hair, you’ll join a welcoming team that values growth, education, and making clients feel fabulous.
          </Typography>
          <Typography variant="body2" sx={{ mb: 4 }}>
            Ready to take the next step? Let us know why you’d be a great fit!
          </Typography>

          <Box textAlign="center">
            <Button
              variant="contained"
              color="primary"
              href="mailto:appointments@sassyhair.com.au?subject=Join%20the%20Sassy%20Hair%20Team"
              sx={{ fontWeight: 'bold' }}
            >
              Apply Now
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default SassyCollectiveMobile;
