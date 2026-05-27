import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";

const academyImages = [
  'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=1200',

  'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200',

  'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1200',
];

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          minHeight: "80vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 3,
            }}
          >
            Vire um campeão com a Boxing Hub
          </Typography>

          <Typography
            variant="h5"
            sx={{
              maxWidth: "600px",
              mb: 4,
            }}
          >
            Treine com os melhores boxeadores e melhore seu desempenho todos os dias.
          </Typography>

          <Button variant="contained" size="large">
            Inicie o Treino
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: 10 }}>
        <Typography
          variant="h3"
          sx={{
            mb: 5,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Nossa Academia
        </Typography>

        <Grid container spacing={4}>
          {academyImages.map((image, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={image}
                  alt="Boxing academy"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
