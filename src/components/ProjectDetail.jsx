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
  Divider,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import NavbarProject from "./NavbarProject";
import HomeScreenEcommerce from "../assets/homeecommerce.png";
import SchemaRelazionale from "../assets/schemarelazionale.png";
import Home from "../assets/home.jpg";
import Statistics from "../assets/statistics.jpg";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#121212" },
    primary: { main: "#2196F3" },
    text: { primary: "#FFFFFF", secondary: "#B0B0B0" },
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
        "Il mio sito di e-commerce si occupa della vendita e gestione di prodotti d’abbigliamento, si avvicina molto come idea a subito.it",
      function1: "Si può accedere in sola visualizzazione, quindi abbiamo la possibilità di scorrere i prodotti e visualizzarli ma non interagire con essi.",
      function2: "Interazione e modifica: A questa modalità è possibile accedere solo dopo aver effettuato una registrazione iniziale oppure in seguito ad un login se abbiamo già creato l’account precedentemente",
      function3: "Per poter acquistare un prodotto è necessario prima inserirlo nel carrello, fatto ciò si va nella pagina apposita del carrello dove è possibile effettuare l’ordine di tutti i prodotti. Nel nostro sito è presente una pagina per visualizzare lo storico degli ordini dal più al meno recente, qui sarà possibile aggiungere una recensione sul prodotto che poi sarà visualizzata con tutte quelle degli altri utenti. Nel caso l’utente registrato fosse anche un venditore, oltre a tutte queste funzionalità appena elencate, gli sarà possibile accedere alla sezione vendite in cui troviamo una pagina per aggiungere un prodotto, una pagina in cui vedere un sommario di tutta la merce messa in vendita e la merce acquistata fino a quel momento da altri utenti.",
      technologies: ["HTML", "CSS", "Python", "PostgreSQL", "SQLAlchemy", "Javascript"],
      stack: "Full-stack",
      data:" maggio 2024",
      status: "Completato",
    },
    {
      id: 2,
      title: "Ecodriving",
      description:
        "Applicazione android pensata per guidatori responsabili legati a temi importanti come inquinamento ambientale e risparmio",
        function1: "L’applicazione permette di calcolare in tempo reale i km percorsi e la velocità di percorrenza, proprio come google maps.",
      function2: "Inoltre, l’applicazione fornisce informazioni dettagliate sul consumo di carburante e sulle emissioni di CO2 del veicolo, aiutando gli utenti a prendere decisioni più sostenibili durante la guida.",
      function3: "L’applicazione include anche funzionalità di monitoraggio delle abitudini di guida, consentendo agli utenti di visualizzare statistiche e suggerimenti per migliorare la propria efficienza energetica.",
      technologies: ["Android libraries", "Java", "XML", "Node.js", "PostgresSQL"],
      image1:"{Home}",
      stack: "Full-stack",
      data:" gennaio 2025",
      status: "Completato",
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
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "auto",
          paddingTop: 10,
          backgroundColor: "default",
          marginTop: "64px",
          overflowX: "hidden",
          px: { xs: 3, md: 10 },
        }}
      >
        {/* Sezione Testo */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, color: "white" }}>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              textAlign: { xs: "center", md: "left" },
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
              justifyContent: { xs: "center", md: "left" },
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <CodeIcon sx={{ fontSize: 40, color: "primary.main" }} />
                <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      color: "text.secondary",
                      paddingLeft: 1,
                    }}
                  >
                    {project.function1}
                  </Typography>
                  <Divider
                    sx={{ my: 3, borderColor: "rgba(255,255,255,0.1)" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      color: "text.secondary",
                      paddingLeft: 1,
                    }}
                  >
                    {project.function2}
                  </Typography>
                  <Divider
                    sx={{ my: 3, borderColor: "rgba(255,255,255,0.1)" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      color: "text.secondary",
                      paddingLeft: 1,
                    }}
                  >
                    {project.function3}
                  </Typography>
                </Box>
              </Box>
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
                    <strong>Stack:</strong>{project.stack}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Data:</strong> {project.data}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Status:</strong> {project.status}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Typography>
        </Box>

        {/* Sezione Immagini */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <img
            src={project.id === 1 ? HomeScreenEcommerce : Home}
            alt="Project Screenshot 1"
            style={{ width: "80%", borderRadius: 8 }}
          />
          <img
            src={project.id === 1 ? SchemaRelazionale : Statistics}
            alt="Project Screenshot 2"
            style={{ width: "80%", borderRadius: 8 }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ProjectDetail;
