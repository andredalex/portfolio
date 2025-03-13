import React, { forwardRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Chip,
  Container,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Box, CssBaseline } from "@mui/material";

// Tema personalizzato
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    primary: {
      main: "#2196F3",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
  },
  typography: {
    fontFamily: '"Quicksand", sans-serif'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body": {
          overflowX: "hidden",
          margin: 0,
          padding: 0,
          width: "100vw",
        },
      },
    },
  },
});

// Card component separated to properly use hooks
const ProgettoCard = ({ progetto, scrollDirection }) => {
  const cardRef = React.useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: scrollDirection === "down" ? -100 : 100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };
  
  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      style={{ width: "30%", minWidth: "300px" }}
    >
      <Card
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: 3,
          boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 6px 15px rgba(33, 150, 243, 0.3)",
          },
          width: "100%",
          minWidth: 0,
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardHeader
          title={progetto.titolo}
          titleTypographyProps={{
            variant: "h6",
            fontWeight: "bold",
            color: theme.palette.primary.main,
          }}
          sx={{ pb: 0 }}
        />
        <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" color="text.secondary">
            {progetto.descrizione}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "flex-start",
            padding: "10px",
            minHeight: "40px",
          }}
        >
          {progetto.tecnologie.map((tech, techIndex) => (
            <Chip
              key={techIndex}
              label={tech}
              sx={{
                backgroundColor: "#1E1E1E",
                border: "1px solid #2196F3",
                color: "#FFFFFF",
                fontWeight: "bold",
                boxShadow: "0px 0px 8px rgba(33, 150, 243, 0.7)",
              }}
            />
          ))}
        </Box>
      </Card>
    </motion.div>
  );
};

const ProgettiSection = forwardRef((props, ref) => {
  const progetti = [
    {
      titolo: "E-Commerce Platform",
      descrizione:
        "Piattaforma di e-commerce completa con gestione prodotti, carrello e pagamenti integrati.",
      tecnologie: ["Python", "Postgres", "SQL", "HTML", "CSS", "JavaScript"],
    },
    {
      titolo: "Applicazione ecodriving",
      descrizione:
        "Applicazione per gestire il consumo ed emissione di CO2 durante la guida.",
      tecnologie: ["Java", "XML", "NoSQL", "Android SDK", "Google Maps API"],
    },
  ];

  // Stato per monitorare la direzione dello scroll
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Funzione per determinare la direzione dello scroll
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    setLastScrollY(currentScrollY);
  };

  // Aggiungi event listener per lo scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        ref={ref}
        sx={{
          backgroundColor: theme.palette.background.default,
          py: 10,
          color: theme.palette.text.primary,
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        <Container maxWidth="lg" sx={{ maxWidth: "100vw", paddingX: 2 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.main,
              mb: 4,
            }}
          >
            I Miei Progetti
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              padding: 4,
              width: "100%",
              maxWidth: "100%",
              boxSizing: "border-box",
              gap: 4,
            }}
          >
            {progetti.map((progetto, index) => (
              <ProgettoCard 
                key={index} 
                progetto={progetto} 
                scrollDirection={scrollDirection}
              />
            ))}
          </Box>

          <Box mt={6} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              sx={{
                textTransform: "none",
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
              }}
            >
              Esplora Altri Progetti
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
});

export default ProgettiSection;