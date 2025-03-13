import React, { useState, forwardRef } from 'react';
import emailjs from 'emailjs-com';
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
  Fade
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';

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
        body: {
          overflowX: 'hidden',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#2196F3',
              borderWidth: '2px',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#2196F3',
            }
          }
        }
      }
    }
  },
});

const ContattoSection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: '',
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
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

    emailjs.sendForm('service_v3tf9xh', 'template_271v5jt', e.target, '59gfo3w_85oRlrJIO')
    .then((result) => {
      console.log(result.text);
      setLoading(false);
      setSnackbar({
        open: true,
        message: 'Messaggio inviato con successo!',
        severity: 'success'
      });
      setFormData({
        nome: '',
        email: '',
        messaggio: ''
      });
    }, (error) => {
      console.log(error.text);
      setLoading(false);
      setSnackbar({
        open: true,
        message: "C'è stato un errore nell'invio del messaggio. Riprova più tardi.",
        severity: 'error'
      });
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({...snackbar, open: false});
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        ref={ref}
        sx={{
          backgroundColor: theme.palette.background.default,
          py: 10,
          color: theme.palette.text.primary,
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              mb: 2,
              textShadow: '0px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Contattami
          </Typography>
          
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: theme.palette.text.secondary,
              mb: 6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Hai un progetto in mente o vuoi semplicemente fare due chiacchiere? Scrivimi!
          </Typography>

          <Fade in={true} timeout={1000}>
            <Paper
              elevation={8}
              sx={{
                backgroundColor: 'rgba(30, 30, 30, 0.85)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.3)',
                padding: { xs: 3, sm: 5 },
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                maxWidth: 650, 
                margin: '0 auto',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Overlay decorativo */}
              <Box 
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '5px',
                  background: 'linear-gradient(90deg, #2196F3, #64B5F6, #2196F3)',
                  backgroundSize: '200% 100%',
                  animation: 'gradientAnimation 4s ease infinite',
                  '@keyframes gradientAnimation': {
                    '0%': {
                      backgroundPosition: '0% 50%'
                    },
                    '50%': {
                      backgroundPosition: '100% 50%'
                    },
                    '100%': {
                      backgroundPosition: '0% 50%'
                    }
                  }
                }}
              />

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
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
                        <PersonIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
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
                        <EmailIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
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
                      <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                        <MessageIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  sx={{
                    textTransform: 'none',
                    borderRadius: 30,
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    background: 'linear-gradient(45deg, #1976D2, #2196F3)',
                    boxShadow: '0px 4px 10px rgba(33, 150, 243, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1565C0, #1976D2)',
                      boxShadow: '0px 6px 15px rgba(33, 150, 243, 0.4)',
                      transform: 'translateY(-2px)'
                    },
                    minWidth: '180px'
                  }}
                >
                  {loading ? 'Inviando...' : 'Invia Messaggio'}
                </Button>
              </Box>
            </Paper>
          </Fade>

          <Snackbar 
            open={snackbar.open} 
            autoHideDuration={6000} 
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert 
              onClose={handleCloseSnackbar} 
              severity={snackbar.severity} 
              variant="filled"
              sx={{ width: '100%' }}
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