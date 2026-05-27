"use client";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Campo obrigatório"),

  email: Yup.string().email("Email Invalido").required("Campo obrigatório"),

  description: Yup.string()
    .min(10, "Minimo 10 caracteres")
    .required("Campo obrigatório"),
});

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

      <Container maxWidth="sm" sx={{ py: 10 }}>
        <Paper
          elevation={4}
          sx={{
            p: 5,
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: "bold",
            }}
          >
            Mande uma Mensagem
          </Typography>

          <Formik
            initialValues={{
              name: "",
              email: "",
              description: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);

              alert("Mensagem Enviada com sucesso!");

              resetForm();
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                {/* NAME */}
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  margin="normal"
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />

                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  margin="normal"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  label="Descrição"
                  name="description"
                  margin="normal"
                  value={values.description}
                  onChange={handleChange}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    mt: 3,
                  }}
                >
                  Envie
                </Button>
              </form>
            )}
          </Formik>
        </Paper>
      </Container>
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

          <Typography variant="h6">📍 Campinas - São Paulo</Typography>

          <Typography sx={{ mt: 2 }}>🥊 Boxing Hub Academy</Typography>

          <Typography sx={{ mt: 1 }}>📞 +55 19 99999-9999</Typography>

          <Typography sx={{ mt: 1 }}>
            🕒 Segunda - Sábado | 06:00 AM - 10:00 PM
          </Typography>
        </Container>
      </Box>
    </>
  );
}
