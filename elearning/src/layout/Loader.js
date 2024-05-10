import React from "react";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#212427",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <Box sx={{ textAlign: "center", m: 0, p: 0 }}>
          <Typography variant="h4" sx={{ mt: "-15px" }}>
            E-Learning-Platform
          </Typography>
        </Box>
        <CircularProgress size={60} />
      </Box>
    </Box>
  );
};

export default Loader;
