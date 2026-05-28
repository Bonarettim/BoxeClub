import ContactForm from "@/components/Contact/ContactForm/ContactForm";
import ContactLocation from "@/components/Contact/ContactLocation/ContactLocation";
import { Box, Typography } from "@mui/material";

export default function ContactPage() {
  return (
    <>
      <Box
        sx={{
          py: 12,
          backgroundColor: "#111",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Contate-nos
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Entre em contato com nossa equipe de boxe.
        </Typography>
      </Box>
      <ContactForm />
      <ContactLocation />
    </>
  );
}
