import React, { useRef } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@mui/material';
import ProgettiSection from './Projects'; // Import ProgettiSection component
import ContactSection from './Contact'; // Import ContactSection component
import Navbar from './Navbar'; // Import the new Navbar component
import profileImage from '../assets/profile.jpg'; // Import profile image

// Crea un tema personalizzato dark mode
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', // Sfondo molto scuro
    },
    primary: {
      main: '#2196F3',   // Blu acceso
    },
    text: {
      primary: '#FFFFFF', // Testo bianco
      secondary: '#B0B0B0' // Grigio chiaro per testo secondario
    }
  },
  typography: {
    fontFamily: '"Quicksand", sans-serif'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowX: 'hidden',
          margin: 0,
          padding: 0,
          width: '100vw',
          overflowY: 'auto'
        },
        html: {
          overflowX: 'hidden',
          margin: 0,
          padding: 0,
          width: '100vw',
          height: '100vh',
        },
      },
    },
  },
});

const Presentation = () => {
  // Reference to ProgettiSection
  const progettiRef = useRef(null);
  // Reference to ContactSection
  const contactRef = useRef(null);

  // Function to handle scrolling to the ProgettiSection
  const handleScrollToProjects = () => {
    if (progettiRef.current) {
      progettiRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle scrolling to the ContactSection
  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Add the Navbar component and pass the scroll handler functions */}
      <Navbar 
        onScrollToProjects={handleScrollToProjects}
        onScrollToContact={handleScrollToContact}
      />

      <Box 
        sx={{ 
          height: '100vh', 
          width: '100vw',
          maxWidth: '100%',
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
          color: theme.palette.text.primary,
          px: 3,
          boxSizing: 'border-box'
        }}
      >
         {/* Elementi di sfondo decorativi */}
                <Box 
                  sx={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(33,150,243,0.1) 0%, rgba(33,150,243,0) 70%)',
                    top: '10%',
                    left: '5%',
                    zIndex: 0
                  }}
                />
                <Box 
                  sx={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(33,150,243,0.08) 0%, rgba(33,150,243,0) 70%)',
                    bottom: '5%',
                    right: '10%',
                    zIndex: 0
                  }}
                />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, px: { xs: 2, sm: 3 } }}>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: 4,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {/* Contenuto testuale */}
            <Box sx={{ maxWidth: 550 }}>
              <Typography 
                variant="h2" 
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  color: theme.palette.primary.main,
                  fontSize: { xs: '2rem', md: '3rem' } // Adatta la dimensione del titolo
                }}
              >
                Benvenuto nel mio Portfolio
              </Typography>

              <Typography 
                variant="h4" 
                color="text.secondary" 
                gutterBottom
              >
                Ciao, sono <Box component="span" color="primary.main">Andrea D'Alessandro</Box>
              </Typography>

              <Typography 
                variant="body1" 
                color="text.secondary"
                paragraph
                sx={{ 
                  maxWidth: 500,
                  mb: 3
                }}
              >
                Uno sviluppatore full-stack appassionato con un talento per la creazione 
                di applicazioni web innovative. Sono specializzato in React, Node.js, 
                e nella creazione di esperienze utente fluide.
              </Typography>

              {/* I bottoni sono stati rimossi da qui */}
            </Box>

            {/* Immagine del profilo responsive */}
            <Box 
              sx={{ 
                position: 'relative',
                width: { xs: 250, sm: 300, md: 350 },
                height: { xs: 250, sm: 300, md: 350 },
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
                  boxShadow: '0 0 0 20px rgba(33, 150, 243, 0.2)',
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
          </Box>
        </Container>
      </Box>

      {/* Progetti Section with ref */}
      <ProgettiSection ref={progettiRef} />
      {/* ContactSection with ref */}
      <ContactSection ref={contactRef} />
    </ThemeProvider>
  );
};

export default Presentation;