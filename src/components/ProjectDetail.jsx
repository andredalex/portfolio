import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Chip,
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
  Toolbar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import NavbarProject from "./NavbarProject";

// Tema semplificato
const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#121212" },
    primary: { main: "#2196F3" },
  },
  typography: { fontFamily: '"Quicksand", sans-serif' },
});

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dati progetto
  const projectsData = [
    {
      id: 1,
      title: "App E-commerce",
      description:
        "App e-commerce completa con React e Node.js. Integrazione con sistemi di pagamento, gestione del carrello e profili utente personalizzati.",
      image:
        "https://via.placeholder.com/1200x600/1e1e1e/2196F3?text=App+E-commerce",
      technologies: ["HTML", "CSS", "Python", "POstgreSQL", "SQLAlchemy"],
      githubUrl: "https://github.com/username/project1",
      liveUrl: "https://project1.example.com",
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description:
        "Dashboard interattiva per analytics. Visualizzazioni di dati complessi con grafici interattivi e filtri personalizzabili.",
      image:
        "https://via.placeholder.com/1200x600/1e1e1e/2196F3?text=Dashboard+Analytics",
      technologies: ["React", "D3.js", "Firebase", "Material-UI", "Redux"],
      githubUrl: "https://github.com/username/project2",
      liveUrl: "https://project2.example.com",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      const foundProject = projectsData.find((p) => p.id === parseInt(id));
      if (foundProject) {
        setProject(foundProject);
      } else {
        navigate("/");
      }
      setLoading(false);
    }, 500);
  }, [id, navigate]);

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography>Caricamento...</Typography>
        </Box>
      </ThemeProvider>
    );
  }

  if (!project) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ textAlign: "center", py: 5 }}>
          <Typography variant="h5">Progetto non trovato</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
            sx={{ mt: 2 }}
          >
            Torna alla Home
          </Button>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavbarProject />
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          px: 3,
          py: 2,
          mt: 8, // Aggiunto per evitare sovrapposizione della navbar
        }}
      >
        {/* Immagine del progetto */}
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "400px",
            objectFit: "cover",
            mb: 3,
            borderRadius: 1,
          }}
        />

        {/* Info progetto */}
        <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
          {project.title}
        </Typography>

        {/* Tecnologie */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
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

        {/* Descrizione */}
        <Typography sx={{ mb: 4 }}>{project.description}</Typography>

        {/* Dettagli */}
        <Typography sx={{ mb: 4 }}>
          Questo progetto dimostra l'uso di tecnologie moderne per creare
          un'applicazione web funzionale e reattiva.
        </Typography>

        {/* Pulsanti */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: "auto",
            mb: 4,
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          {project.githubUrl && (
            <Button
              variant="contained"
              color="primary"
              startIcon={<GitHubIcon />}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
            >
              GitHub
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
              fullWidth
            >
              Demo
            </Button>
          )}
        </Box>

        {/* Footer semplificato */}
        <Box
          sx={{
            py: 2,
            mt: "auto",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center",
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
