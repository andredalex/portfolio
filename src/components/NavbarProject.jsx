import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NavbarProject = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ 
        backdropFilter: "blur(8px)", 
      }}
    >
      <Toolbar>
        <IconButton
          color="primary"
          onClick={() => navigate("/")}
          sx={{ mr: 2 }}
        >
          <ArrowBackIcon />
        </IconButton>
        
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: "primary.main",
            fontFamily: "Quicksand, sans-serif"
          }}
        >
          Progetto
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarProject;
