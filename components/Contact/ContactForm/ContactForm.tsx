"use client";

import { Button, Container, Paper, TextField, Typography } from "@mui/material";

import { Formik } from "formik";

import { validationSchema } from "../validationSchema";

export default function ContactForm() {
  return (
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

            alert("Mensagem Enviada com sucesso!");

            resetForm();
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
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
                Enviar
              </Button>
            </form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}
