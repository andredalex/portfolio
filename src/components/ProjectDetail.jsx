import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Container, 
  Button, 
  Grid, 
  Paper,
  Chip,
  Link,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Divider,
  Card,
  CardMedia
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Navbar from './Navbar';

// Tema semplice ma elegante
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    primary: {
      main: '#2196F3',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0'
    }
  },
  typography: {
    fontFamily: '"Quicksand", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

// Array di progetti (lo stesso utilizzato in ProgettiSection)
const projectsData = [
  {
    id: 1,
    title: 'App E-commerce',
    description: 'App e-commerce completa con React e Node.js',
    image: 'https://via.placeholder.com/1200x600/1e1e1e/FFFFFF?text=App+E-commerce',
    fullDescription: 'Questa applicazione e-commerce è stata sviluppata utilizzando React per il frontend e Node.js con Express per il backend. Include funzionalità come autenticazione utente, carrello della spesa, pagamenti con Stripe, e un pannello di amministrazione per gestire prodotti e ordini.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    features: [
      'Autenticazione utente con JWT',
      'Carrello della spesa persistente',
      'Integrazione pagamenti con Stripe',
      'Gestione inventario in tempo reale',
      'Dashboard amministratore'
    ],
    challenges: 'La sfida principale è stata implementare un sistema di pagamento sicuro e garantire la sincronizzazione dell\'inventario in tempo reale.',
    githubUrl: 'https://github.com/username/project1',
    liveUrl: 'https://project1.example.com',
    screenshots: [
      'https://via.placeholder.com/800x500/1e1e1e/FFFFFF?text=Screenshot+1',
      'https://via.placeholder.com/800x500/1e1e1e/FFFFFF?text=Screenshot+2'
    ]
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Dashboard interattiva per analytics',
    image: 'https://via.placeholder.com/1200x600/1e1e1e/FFFFFF?text=Dashboard+Analytics',
    fullDescription: 'Dashboard analitica sviluppata con tecnologie moderne. Permette la visualizzazione in tempo reale di dati e metriche aziendali con grafici interattivi e report personalizzabili.',
    technologies: ['React', 'D3.js', 'Firebase', 'Material-UI', 'Redux'],
    features: [
      'Grafici interattivi in tempo reale',
      'Report personalizzabili', 
      'Notifiche in tempo reale',
      'Esportazione dati in vari formati',
      'Responsive design'
    ],
    challenges: 'Ottimizzare le prestazioni con grandi quantità di dati mantenendo un\'interfaccia fluida e reattiva.',
    githubUrl: 'https://github.com/username/project2',
    liveUrl: 'https://project2.example.com',
    screenshots: [
      'https://via.placeholder.com/800x500/1e1e1e/FFFFFF?text=Screenshot+1', 
      'https://via.placeholder.com/800x500/1e1e1e/FFFFFF?text=Screenshot+2'
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Trova il progetto corrispondente all'ID
    const foundProject = projectsData.find(p => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      // Reindirizza alla homepage se il progetto non esiste
      navigate('/');
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Typography>Caricamento...</Typography>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">
          <Button 
            startIcon={<ArrowBackIcon />} 
            onClick={() => navigate('/')}
            sx={{ mb: 4 }}
            color="primary"
            variant="outlined"
          >
            Torna alla Home
          </Button>

          {/* Header con titolo e immagine principale */}
          <Card sx={{ mb: 4, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
            <CardMedia
              component="img"
              height="300"
              image={project.image}
              alt={project.title}
              sx={{ objectFit: 'cover' }}
            />
            <Box sx={{ p: 3 }}>
              <Typography variant="h3" component="h1" gutterBottom color="primary" fontWeight="bold">
                {project.title}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 2 }}>
                {project.technologies.map((tech, index) => (
                  <Chip key={index} label={tech} color="primary" size="small" variant="outlined" />
                ))}
              </Box>
            </Box>
          </Card>

          {/* Descrizione del progetto */}
          <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h5" gutterBottom color="primary">
              Descrizione del Progetto
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" paragraph>
              {project.fullDescription}
            </Typography>
          </Paper>

          {/* Sezione funzionalità e sfide */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom color="primary">
                  Funzionalità
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <ul style={{ paddingLeft: '20px' }}>
                  {project.features.map((feature, index) => (
                    <li key={index}>
                      <Typography variant="body1" paragraph>{feature}</Typography>
                    </li>
                  ))}
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom color="primary">
                  Sfide e Soluzioni
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1">
                  {project.challenges}
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Screenshot */}
          {project.screenshots && project.screenshots.length > 0 && (
            <Paper elevation={1} sx={{ p: 3, my: 4 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Screenshot
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Grid container spacing={2}>
                {project.screenshots.map((screenshot, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="250"
                        image={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        sx={{ objectFit: 'cover' }}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          )}

          {/* Pulsanti di link */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 5, mb: 2 }}>
            {project.githubUrl && (
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<GitHubIcon />}
                component={Link}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Codice su GitHub
              </Button>
            )}
            {project.liveUrl && (
              <Button 
                variant="outlined" 
                color="primary"
                startIcon={<LaunchIcon />}
                component={Link}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo Live
              </Button>
            )}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ProjectDetail;