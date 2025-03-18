import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material"; // Aggiunto IconButton
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
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Sfondo semi-trasparente per leggibilità
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
        <Typography variant="h6" color="primary">
          Progetto
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarProject;
