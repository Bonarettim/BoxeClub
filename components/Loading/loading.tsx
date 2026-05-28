import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <CircularProgress
        sx={{
          color: "black",
        }}
      />

      <Typography variant="h6">Carregando Lutadores Hub...</Typography>
    </Box>
  );
}
