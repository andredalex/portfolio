import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Container, 
  Button, 
  Chip,
  Card,
  CardMedia,
  CardContent,
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

// Creazione del tema personalizzato con la palette scura richiesta
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#121212' },
    primary: { main: '#2196F3' },
    text: { primary: '#FFFFFF', secondary: '#B0B0B0' }
  },
  typography: { fontFamily: '"Quicksand", sans-serif' },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
          borderRadius: '12px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
        },
      },
    },
  },
});

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Array di progetti semplificato
  const projectsData = [
    {
      id: 1,
      title: 'App E-commerce',
      description: 'App e-commerce completa con React e Node.js. Integrazione con sistemi di pagamento, gestione del carrello e profili utente personalizzati.',
      image: 'https://via.placeholder.com/1200x600/1e1e1e/2196F3?text=App+E-commerce',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      githubUrl: 'https://github.com/username/project1',
      liveUrl: 'https://project1.example.com',
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Dashboard interattiva per analytics. Visualizzazioni di dati complessi con grafici interattivi e filtri personalizzabili.',
      image: 'https://via.placeholder.com/1200x600/1e1e1e/2196F3?text=Dashboard+Analytics',
      technologies: ['React', 'D3.js', 'Firebase', 'Material-UI', 'Redux'],
      githubUrl: 'https://github.com/username/project2',
      liveUrl: 'https://project2.example.com',
    }
  ];

  useEffect(() => {
    // Simuliamo un caricamento breve
    setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === parseInt(id));
      if (foundProject) {
        setProject(foundProject);
      } else {
        navigate('/');
      }
      setLoading(false);
    }, 500);
  }, [id, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="primary"
              aria-label="back"
              onClick={() => navigate('/')}
              sx={{ mr: 2 }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Il mio Portfolio
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ py: 4, flexGrow: 1 }}>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
              <Typography color="text.secondary">Caricamento...</Typography>
            </Box>
          ) : !project ? (
            <Box sx={{ textAlign: 'center', py: 5 }}>
              <Typography variant="h5">Progetto non trovato</Typography>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => navigate('/')}
                sx={{ mt: 2 }}
              >
                Torna alla Home
              </Button>
            </Box>
          ) : (
            <>
              <Card sx={{ mb: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ px: 3, pb: 3 }}>
                  <Typography variant="h4" component="h1" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                    {project.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {project.technologies.map((tech, index) => (
                      <Chip 
                        key={index} 
                        label={tech} 
                        color="primary" 
                        size="small"
                        variant="outlined" 
                      />
                    ))}
                  </Box>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>

              <Paper 
                elevation={1} 
                sx={{ 
                  p: 3, 
                  mb: 3, 
                  borderRadius: 2,
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backgroundColor: 'rgba(30, 30, 30, 0.8)'
                }}
              >
                <Typography variant="h6" gutterBottom color="primary">
                  Descrizione del progetto
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Questo progetto dimostra l'uso di tecnologie moderne per creare un'applicazione web funzionale e reattiva. 
                  L'interfaccia utente è progettata pensando all'esperienza utente, con un'architettura robusta sul backend.
                </Typography>
              </Paper>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                {project.githubUrl && (
                  <Button 
                    variant="contained" 
                    color="primary" 
                    startIcon={<GitHubIcon />}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ flex: { xs: '1 0 100%', sm: '1 0 auto' } }}
                  >
                    Codice su GitHub
                  </Button>
                )}
                {project.liveUrl && (
                  <Button 
                    variant="outlined" 
                    color="primary"
                    startIcon={<LaunchIcon />}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ flex: { xs: '1 0 100%', sm: '1 0 auto' } }}
                  >
                    Demo Live
                  </Button>
                )}
              </Box>
            </>
          )}
        </Container>

        <Box 
          component="footer" 
          sx={{ 
            py: 3, 
            px: 2, 
            mt: 'auto', 
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            textAlign: 'center',
            backgroundColor: 'rgba(18, 18, 18, 0.8)'
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Il mio Portfolio
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ProjectDetail;