import React, { useRef } from 'react';
import { Box, Typography, Container, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import ProgettiSection from './Projects';
import ContactSection from './Contact';
import Navbar from './Navbar';
import profileImage from '../assets/profile.jpg';

// Creazione del tema personalizzato
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#121212' },
    primary: { main: '#2196F3' },
    text: { primary: '#FFFFFF', secondary: '#B0B0B0' }
  },
  typography: { fontFamily: '"Quicksand", sans-serif' },
});

const Presentation = () => {
  const progettiRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToProjects = () => progettiRef.current?.scrollIntoView({ behavior: 'smooth' });
  const handleScrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar onScrollToProjects={handleScrollToProjects} onScrollToContact={handleScrollToContact} />

      <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: 4, 
              textAlign: { xs: 'center', md: 'left' },
              paddingTop: 10, 
            }}
          >
            {/* Immagine del profilo */}
            <Box 
              sx={{ 
                position: 'relative',
                width: { xs: 200, sm: 250, md: 300 },
                height: { xs: 200, sm: 250, md: 300 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: `4px solid ${theme.palette.primary.main}`,
                  boxShadow: '0 0 0 20px rgba(33, 150, 243, 0.2)`',
                  zIndex: 10
                }}
              />
              <Box
                component="img"
                src={profileImage}
                alt="Profile"
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  zIndex: 5
                }}
              />
            </Box>

            {/* Testo di presentazione */}
            <Box>
              <Typography variant="h2" color="primary.main">Benvenuto nel mio Portfolio</Typography>
              <Typography variant="h4" color="text.secondary">
                Ciao, sono <Box component="span" color="primary.main">Andrea D'Alessandro</Box>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Sviluppatore full-stack specializzato in React e Node.js.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Progetti Section con ref */}
      <div ref={progettiRef}>
        <ProgettiSection />
      </div>

      {/* Contact Section con ref */}
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </ThemeProvider>
  );
};

export default Presentation;
