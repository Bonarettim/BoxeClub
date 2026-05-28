"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import FighterCard from "@/components/Fighters/FighterCard";
import { getFighters } from "@/services/fighters.service";
import { Fighter } from "@/types/fighter";

export default function FightersPage() {
  const [fighters, setFighters] = useState<Fighter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadFighters() {
    try {
      setLoading(true);
      setError(null);

      const data = await getFighters();

      setFighters(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        return;
      }
    
      setError("Ocorreu um erro ao carregar os lutadores.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadFighters();
  }, []);

  return (
    <>
      <Box
        sx={{
          py: 10,
          background: "linear-gradient(135deg, #111 0%, #1c1c1c 100%)",
          color: "#fff",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 8,
              fontWeight: "bold",
            }}
          >
            Melhores Momentos da Liga dos Campeões
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  backgroundColor: "#1f1f1f",
                  color: "#fff",
                }}
              >
                <Typography variant="h2" fontWeight="bold">
                  15+
                </Typography>

                <Typography sx={{ mt: 2 }}>Lutadores Profissionais</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={3}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  backgroundColor: "#1f1f1f",
                  color: "#fff",
                }}
              >
                <Typography variant="h2" fontWeight="bold">
                  120+
                </Typography>

                <Typography sx={{ mt: 2 }}>Vitorias</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={3}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  backgroundColor: "#1f1f1f",
                  color: "#fff",
                }}
              >
                <Typography variant="h2" fontWeight="bold">
                  10
                </Typography>

                <Typography sx={{ mt: 2 }}>Campeões Nacionais</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={3}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  backgroundColor: "#1f1f1f",
                  color: "#fff",
                }}
              >
                <Typography variant="h2" fontWeight="bold">
                  5
                </Typography>

                <Typography sx={{ mt: 2 }}>Títulos Internacionais</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container sx={{ py: 10 }}>
        <Grid container spacing={4}>
          {loading && (
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  py: 10,
                }}
              >
                <CircularProgress
                  sx={{
                    color: "#000",
                  }}
                />
              </Box>
            </Grid>
          )}

          {!loading && error && (
            <Grid item xs={12}>
              <Typography color="error" textAlign="center">
                {error}
              </Typography>
            </Grid>
          )}

          {!loading && !error && fighters.length === 0 && (
            <Grid item xs={12}>
              <Typography textAlign="center">
                Nenhum lutador encontrado.
              </Typography>
            </Grid>
          )}

          {!loading &&
            !error &&
            fighters.map((fighter) => (
              <Grid item xs={12} md={4} key={fighter.id}>
                <FighterCard fighter={fighter} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}
