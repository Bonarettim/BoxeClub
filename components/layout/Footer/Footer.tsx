import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0d0d0d",
        color: "#fff",
        pt: 10,
        pb: 5,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Programas de Treinamento
            </Typography>

            <Typography>Aulas de Boxe</Typography>
            <Typography>Treinamento Personalizado</Typography>
            <Typography>Treino de Força</Typography>
            <Typography>Planos de Nutrição</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Sobre Nós
            </Typography>

            <Typography>Nossos Treinadores</Typography>
            <Typography>Equipe de Campeões</Typography>
            <Typography>Agenda Semanal</Typography>
            <Typography>Galeria de Lutadores</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contato
            </Typography>

            <Typography>Email: contact@boxinghub.com</Typography>

            <Typography sx={{ mt: 1 }}>Phone: +55 19 99999-9999</Typography>

            <Typography sx={{ mt: 1 }}>Campinas - SP</Typography>

            <Box sx={{ mt: 3 }}>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>

              <IconButton color="inherit" aria-label="YouTube">
                <YouTubeIcon />
              </IconButton>

              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid #333",
            mt: 6,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            © 2026 Boxing Hub. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
