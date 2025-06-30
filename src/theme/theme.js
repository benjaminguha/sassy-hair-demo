// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#D90166', // A vibrant magenta pink
    },
    secondary: {
      main: '#f50057', // Another shade if you need it
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // You can change the font later
  },
  shape: {
    borderRadius: 16, // This will give components a rounded look
  },

  typography: {
    pageHeader: {
      fontFamily: '"Lucida Handwriting", cursive',
      fontSize: '2.25rem', // ~36px
      fontWeight: 600,
      color: '#AD1457',
    },
    sectionHeader: {
      fontSize: '1.5rem',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    text: {
      fontSize: '0.95rem',
      color: '#444',
      lineHeight: 1.6,
    },
    pinkHeader:{
      fontSize: '1rem',
      fontWeight: 500,
      textTransform: 'uppercase',
      color: 'primary'
    }
  },
});