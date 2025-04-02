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
  Skeleton,
  Grow,
  Fade,
  Divider,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import NavbarProject from "./NavbarProject";
import AppImage1 from "../assets/immagine1.jpg";
import AppImage2 from "../assets/immagine2.jpg";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#121212' },
    primary: { main: '#2196F3' },
    text: { primary: '#FFFFFF', secondary: '#B0B0B0' }
  },
  typography: { fontFamily: '"Quicksand", sans-serif' },
});

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const projectsData = [
    {
      id: 1,
      title: "App E-commerce",
      description:
        "App e-commerce completa con React e Node.js. Integrazione con sistemi di pagamento, gestione del carrello e profili utente personalizzati.",
      image: "/assets/ecommerce-app.jpg",
      technologies: ["HTML", "CSS", "Python", "PostgreSQL", "SQLAlchemy"],
      githubUrl: "https://github.com/username/project1",
      liveUrl: "https://project1.example.com",
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description:
        "Dashboard interattiva per analytics. Visualizzazioni di dati complessi con grafici interattivi e filtri personalizzabili.",
      image: "/assets/analytics-dashboard.jpg",
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
            minHeight: "100vh",
          }}
        >
          <Skeleton variant="rectangular" width={800} height={400} />
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
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100vw",
          height: "calc(100vh - 64px)",
          padding: 4,
          backgroundColor: "default",
          marginTop: "64px",
          overflowX: "hidden",
        }}
      >
        {/* Sezione Testo */}
        <Box sx={{ width: "50%", color: "white" }}>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              background: "linear-gradient(-45deg, #64FFDA, #2196F3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: `${gradientAnimation} 5s ease infinite`,
              backgroundSize: "200% 200%",
            }}
          >
            {project.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              mb: 4,
              justifyContent: "left",
            }}
          >
            {project.technologies.map((tech, index) => (
              <Grow in key={index} timeout={index * 200}>
                <Chip
                  label={tech}
                  sx={{
                    bgcolor: "rgba(100, 255, 218, 0.1)",
                    color: "#64FFDA",
                    border: "1px solid rgba(100, 255, 218, 0.3)",
                    fontWeight: 600,
                    py: 1,
                    "& .MuiChip-label": { px: 1.5 },
                  }}
                />
              </Grow>
            ))}
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "text.secondary",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {project.description}
            <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.1)" }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CodeIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <Typography variant="body2" sx={{ fontStyle: "italic", color: "text.secondary" }}>
                Principali funzionalità: Integrazione API, Design responsive,
                Autenticazione JWT, Database relazionale
              </Typography>
              <Box
                sx={{
                  bgcolor: "rgba(17, 34, 51, 0.3)",
                  p: 3,
                  borderRadius: 3,
                  height: "fit-content",
                  border: "1px solid rgba(100, 255, 218, 0.1)",
                  width: "100%",
                  maxWidth: 300,
                  mx: "auto",
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Dettagli progetto
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                >
                  <Typography variant="body2">
                    <strong>Stack:</strong> Full-stack
                  </Typography>
                  <Typography variant="body2">
                    <strong>Data:</strong> Marzo 2024
                  </Typography>
                  <Typography variant="body2">
                    <strong>Status:</strong> Completato
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Typography>
        </Box>

        {/* Sezione Immagini */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          <img
            src={AppImage1}
            alt="Project Screenshot 1"
            style={{ width: "80%", borderRadius: 8 }}
          />
          <img
            src={AppImage2}
            alt="Project Screenshot 2"
            style={{ width: "80%", borderRadius: 8 }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ProjectDetail;
