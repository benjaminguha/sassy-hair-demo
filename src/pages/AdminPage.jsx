import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import ImageManager from './admin/ImageManager';

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'YourStrongPassword') {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!authenticated) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6">Admin Login</Typography>
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ my: 2 }}
        />
        <Button variant="contained" onClick={handleLogin}>Login</Button>
      </Box>
    );
  }

  return <ImageManager />;
};

export default AdminPage;
