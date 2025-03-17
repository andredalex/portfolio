import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = ({ onScrollToProjects, onScrollToContact }) => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ backdropFilter: "blur(8px)" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            color: 'primary.main',
            fontFamily: 'Quicksand, sans-serif'
          }}
        >
          Portfolio
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="text"
            onClick={onScrollToProjects}
            sx={{
              color: 'primary.main',
              textTransform: 'none',
              fontWeight: 400,
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: 'rgba(33, 150, 243, 0.1)',
              }
            }}
          >
            Progetti
          </Button>

          <Button    
            variant="text"
            onClick={onScrollToContact}
            sx={{
              color: 'primary.main',
              textTransform: 'none',
              fontWeight: 400,
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: 'rgba(33, 150, 243, 0.1)',
              }
            }}
          >
            Contattami
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
