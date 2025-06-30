// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Keep this for global styles if needed
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme.js';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    
      <title>Sassy Hair Salon | The Best Hairdressers & Stylists in Canberra</title>
      
    

    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);