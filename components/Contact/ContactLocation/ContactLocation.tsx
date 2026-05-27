import { Box, Container, Typography } from "@mui/material";

export default function ContactLocation() {
  return (
    <Box
      sx={{
        py: 10,
        color: "#111",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            mb: 5,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Encontre-nos
        </Typography>

        <Box
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            mb: 4,
          }}
        >
          <iframe
            title="Boxing Academy Location"
            src="https://maps.google.com/maps?q=R.%20dos%20Contabilistas,%20131%20-%20Jardim%20Novo%20Cambui,%20Campinas%20-%20SP,%2013076-430&z=15&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          />
        </Box>

        <Typography variant="h6">
          📍 Campinas - São Paulo
        </Typography>

        <Typography sx={{ mt: 2 }}>
          🥊 Boxing Hub Academy
        </Typography>

        <Typography sx={{ mt: 1 }}>
          📞 +55 19 99999-9999
        </Typography>

        <Typography sx={{ mt: 1 }}>
          🕒 Segunda - Sábado | 06:00 AM - 10:00 PM
        </Typography>
      </Container>
    </Box>
  );
}