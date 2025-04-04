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
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ff7e8b",
      paper: "#FFFFFF",
    },
    primary: {
      main: "#FF8C69", // Coral color for buttons
    },
    text: {
      primary: "#5F5F5F",
      secondary: "#8D8D8D",
    },
  },
  typography: {
    fontFamily: '"Quicksand", sans-serif',
    h3: {
      fontWeight: 600,
      color: "#4A4A4A",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#F5F5F5",
          borderRadius: 12,
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            "&:hover fieldset": {
              borderColor: "#FF8C69",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF8C69",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          padding: "12px 24px",
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
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
            message: "Message sent successfully!",
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
              "There was an error sending your message. Please try again later.",
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
          background: "linear-gradient(135deg, #FF758C 0%, #FF7E5F 100%)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Container maxWidth="md">
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
                    backgroundColor: "#FFF",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    padding: 4,
                  }}
                >
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 15,
                      left: 15,
                      color: "#5F5F5F",
                    }}
                  >
                    <ArrowBackIcon />
                  </IconButton>

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
                        backgroundColor: "#FFE0E5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* We could replace this with an actual SVG of paper airplane */}
                      <Box
                        component="img"
                        src="/api/placeholder/100/100"
                        alt="Paper airplane"
                        sx={{ width: 80, opacity: 0 }}
                      />
                    </Box>

                    {/* Small pink circles background decoration */}
                    <Box
                      sx={{
                        position: "absolute",
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        backgroundColor: "#FFE0E5",
                        top: "20%",
                        right: "20%",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        backgroundColor: "#FFE0E5",
                        bottom: "30%",
                        left: "25%",
                      }}
                    />
                  </Box>
                </Box>

                {/* Right side - Form */}
                <Box
                  sx={{
                    flex: { xs: "1", md: "1.5" },
                    backgroundColor: "#FFF",
                    padding: 4,
                  }}
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: "#4A4A4A",
                      mb: 3,
                      textAlign: "center",
                    }}
                  >
                    Contact us
                  </Typography>

                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <TextField
                      placeholder="Full name"
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
                      placeholder="Email adress"
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
                      placeholder="Message..."
                      variant="outlined"
                      fullWidth
                      name="messaggio"
                      value={formData.messaggio}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      required
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={loading}
                      sx={{ mt: 2 }}
                      endIcon={
                        loading ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : (
                          <ArrowForwardIcon />
                        )
                      }
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </Button>

                    {/* Social Media Icons */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        mt: 3,
                      }}
                    >
                      <IconButton
                        sx={{
                          backgroundColor: "#4267B2",
                          color: "white",
                          "&:hover": { backgroundColor: "#365899" },
                          width: 40,
                          height: 40,
                        }}
                      >
                        <FacebookIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        sx={{
                          backgroundColor: "#1DA1F2",
                          color: "white",
                          "&:hover": { backgroundColor: "#1A91DA" },
                          width: 40,
                          height: 40,
                        }}
                      >
                        <TwitterIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        sx={{
                          backgroundColor: "#0077B5",
                          color: "white",
                          "&:hover": { backgroundColor: "#006097" },
                          width: 40,
                          height: 40,
                        }}
                      >
                        <InstagramIcon fontSize="small" />
                      </IconButton>
                    </Box>
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
