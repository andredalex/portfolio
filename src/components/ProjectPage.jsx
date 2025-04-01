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
    mode: "dark",
    background: { default: "#0A1929" },
    primary: { main: "#64FFDA" },
    secondary: { main: "#8892B0" },
  },
  typography: {
    fontFamily: '"Quicksand", sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: "-0.05rem",
    },
  },
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
            p: 3,
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 800 }}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={400}
              sx={{ mb: 3, borderRadius: 2 }}
            />
            <Skeleton variant="text" width="60%" height={60} />
            <Box sx={{ display: "flex", gap: 1, my: 2 }}>
              {[1, 2, 3, 4].map((_, i) => (
                <Skeleton key={i} variant="rounded" width={80} height={32} />
              ))}
            </Box>
            <Skeleton variant="text" width="100%" height={40} />
            <Skeleton variant="text" width="100%" height={40} />
          </Box>
        </Box>
      </ThemeProvider>
    );
  }

  if (!project) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            textAlign: "center",
          }}
        >
          <Box>
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
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          width: "100%",
          px: { xs: 2, md: 4 },
        }}
      >
        <Fade in timeout={800}>
          <Box sx={{ width: "100%", maxWidth: 800 }}>
            <Box
              component="img"
              src={project.id === 1 ? AppImage1 : AppImage2}
              alt={project.title}
              sx={{
                width: "100%",
                height: { xs: 300, md: 500 },
                objectFit: "cover",
                mb: 4,
                borderRadius: 4,
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />

            <Typography
              variant="h4"
              sx={{
                mb: 3,
                textAlign: "center",
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
                justifyContent: "center",
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

            <Box
              sx={{
                display: "grid",
                gap: 4,
                gridTemplateColumns: { md: "1fr 0.5fr" },
                mb: 6,
                width: "100%",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "secondary.main",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {project.description}
                <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.1)" }} />
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <CodeIcon sx={{ fontSize: 40, color: "primary.main" }} />
                  <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                    Principali funzionalità: Integrazione API, Design
                    responsive, Autenticazione JWT, Database relazionale
                  </Typography>
                </Box>
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

            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                href={project.githubUrl}
                target="_blank"
                sx={{
                  px: 4,
                  py: 1.5,
                  bgcolor: "primary.main",
                  color: "#0A1929",
                  fontWeight: 700,
                  "&:hover": {
                    bgcolor: "#52E0C4",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                  minWidth: 200,
                }}
              >
                Codice Sorgente
              </Button>

              <Button
                variant="outlined"
                startIcon={<LaunchIcon />}
                href={project.liveUrl}
                target="_blank"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderColor: "primary.main",
                  color: "primary.main",
                  "&:hover": {
                    bgcolor: "rgba(100, 255, 218, 0.1)",
                    borderColor: "#52E0C4",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                  minWidth: 200,
                }}
              >
                Live Demo
              </Button>
            </Box>
          </Box>
        </Fade>
      </Box>
    </ThemeProvider>
  );
};

export default ProjectDetail;
