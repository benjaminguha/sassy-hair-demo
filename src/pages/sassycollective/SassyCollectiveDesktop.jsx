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
      <Box sx={{ px: 4 }}>
        <Paper
          elevation={3}
          sx={{
            p: 6,
            borderRadius: '20px',
            border: '3px solid #ccc',
            maxWidth: '1400px',
            mx: 'auto',
          }}
        >
          <Box sx={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {/* Left: Text Section */}
            <Box
              sx={{
                width: { xs: '100%', md: '60%' },
                minWidth: '300px',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography variant="pageHeader" gutterBottom>
                Join the Sassy Hair Family
              </Typography>

              <Typography variant="sectionHeader" gutterBottom>
                Ready to take the next step in your career?
              </Typography>

              <Typography variant="text" paragraph>
                We’re always on the lookout for talented and passionate stylists, apprentices, and salon assistants to join our friendly and professional team.
              </Typography>
              <Typography variant="text" paragraph>
                At Sassy Hair, we believe in creating a supportive and inspiring environment that helps our team grow and flourish. Whether you're a seasoned stylist or just starting your career, we offer training, mentorship, and a great salon culture.
              </Typography>
              <Typography variant="text" paragraph>
                If you're ready to take the next step in your hairdressing journey, we'd love to hear from you!
              </Typography>

              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  href="mailto:appointments@sassyhair.com.au?subject=Join%20the%20Sassy%20Hair%20Team"
                  sx={{ fontWeight: 'bold', borderRadius: '20px', mt: 2 }}
                >
                  Apply Now
                </Button>
              </Box>
            </Box>

            {/* Right: Optional Visual Block */}
            <Box
              sx={{
                flex: 1,
                minWidth: '300px',
                maxWidth: '400px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 3,
                alignSelf: 'flex-start',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
              }}
            >
              <Typography variant="body1" color="text.secondary" align="center">
                We'd love to meet people who are excited about creativity, culture, and growth. If that’s you, get in touch!
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Paper>
  );
}

export default SassyCollectiveDesktop;
