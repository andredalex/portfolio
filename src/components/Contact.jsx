import React, { useState, forwardRef } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  createTheme,
  ThemeProvider,
  Paper,
  CircularProgress,
  Snackbar,
  Alert,
  InputAdornment,
  Fade,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";

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
    fontFamily: '"Quicksand", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowX: "hidden",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#2196F3",
              borderWidth: "2px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2196F3",
            },
          },
        },
      },
    },
  },
});

const ContattoSection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    messaggio: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_v3tf9xh",
        "template_271v5jt",
        e.target,
        "59gfo3w_85oRlrJIO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSnackbar({
            open: true,
            message: "Messaggio inviato con successo!",
            severity: "success",
          });
          setFormData({
            nome: "",
            email: "",
            messaggio: "",
          });
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setSnackbar({
            open: true,
            message:
              "C'è stato un errore nell'invio del messaggio. Riprova più tardi.",
            severity: "error",
          });
        }
      );
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        ref={ref}
        sx={{
          backgroundColor: theme.main,
          py: 10,
          color: theme.palette.text.primary,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#2196F3",
              mb: 2,
              textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Contattami
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{
              color: "#B0B0B0",
              mb: 6,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Hai un progetto in mente o vuoi semplicemente fare due chiacchiere?
            Scrivimi!
          </Typography>

          <Fade in={true} timeout={1000}>
            <Paper
              elevation={3}
              sx={{
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                {/* Left side - Paper airplane illustration */}
                <Box
                  sx={{
                    flex: { xs: "1", md: "1" },
                    backgroundColor: theme.main,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    padding: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexGrow: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {/* Pink circular background */}
                    <Box
                      sx={{
                        width: 150,
                        height: 150,
                        borderRadius: "50%",
                        backgroundColor: "#2196F3",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* We could replace this with an actual SVG of paper airplane */}
                      {/* Sostituisci il placeholder con l'SVG dell'aeroplano */}
                      <Box
                        sx={{
                          width: 150,
                          height: 150,
                          borderRadius: "50%",
                          backgroundColor: "#2196F3",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                          width="80"
                        >
                          <g transform="rotate(30, 50, 50)">
                            
                            <path
                              d="M 10,50 L 50,30 L 90,50 L 50,40 Z"
                              fill="#FFC0CB"
                              stroke="#0A3D62"
                              stroke-width="1.5"
                            />
                            <path
                              d="M 10,50 L 50,40 L 50,70"
                              fill="#FFD1DC"
                              stroke="#0A3D62"
                              stroke-width="1.5"
                            />
                            <path
                              d="M 50,40 L 90,50 L 50,60"
                              fill="#FF9AA2"
                              stroke="#0A3D62"
                              stroke-width="1.5"
                            />
                            <line
                              x1="50"
                              y1="30"
                              x2="50"
                              y2="70"
                              stroke="#0A3D62"
                              stroke-width="0.5"
                              stroke-dasharray="2,2"
                            />
                            <line
                              x1="30"
                              y1="45"
                              x2="50"
                              y2="40"
                              stroke="#0A3D62"
                              stroke-width="0.5"
                            />
                          </g>
                        </svg>
                      </Box>
                    </Box>
                    {/* Small pink circles background decoration */}
                    <Box
                      sx={{
                        position: "absolute",
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        backgroundColor: "#2196F3",
                        top: "20%",
                        right: "10%",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        backgroundColor: "#2196F3",
                        bottom: "30%",
                        left: "10%",
                      }}
                    />
                  </Box>
                </Box>

                {/* Form Section */}
                <Box
                  sx={{
                    flex: { xs: "1", md: "1.5" },
                    backgroundColor: theme.main,
                    padding: 4,
                  }}
                >
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: "flex", flexDirection: "column", gap: 4 }}
                  >
                    <TextField
                      label="Nome"
                      variant="outlined"
                      fullWidth
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      label="Messaggio"
                      variant="outlined"
                      fullWidth
                      name="messaggio"
                      value={formData.messaggio}
                      onChange={handleChange}
                      multiline
                      rows={5}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ alignSelf: "flex-start", mt: 1.5 }}
                          >
                            <MessageIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={loading}
                      endIcon={
                        loading ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : (
                          <SendIcon />
                        )
                      }
                    >
                      {loading ? "Inviando..." : "Invia Messaggio"}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Fade>

          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={snackbar.severity}
              variant="filled"
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </ThemeProvider>
  );
});

export default ContattoSection;
