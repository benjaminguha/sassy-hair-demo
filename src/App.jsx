// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Stylists from './pages/Stylists.jsx';
import Photos from './pages/Photos.jsx';
import ContactUs from './pages/ContactUs.jsx';
import About from './pages/about.jsx';
import Footer from './components/layout/Footer.jsx';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';
import sassyLogo from './images/sassy-logo.bmp';
import SassyCollective from './pages/SassyCollective.jsx';
import AdminPage from './pages/AdminPage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      
      <Helmet>
        <title>Sassy Hair Salon | The Best Hairdressers & Stylists in Canberra</title>
        <link rel="icon" href={sassyLogo} type="image/bmp" />
      </Helmet>

      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />

        {/* Main Content Area */}
        <Box
  component="main"
  sx={{
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#FCEFF9',
    px: { xs: 2, md: 4 },
    py: { xs: 2, md: 4 },
    boxSizing: 'border-box',
  }}
>
          <Box sx={{ width: '100%' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/stylists" element={<Stylists />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/sassy-collective" element={<SassyCollective />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<AdminPage/>}/>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Box>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
