import {
  Box,
  CircularProgress,
  Typography,
} from '@mui/material';

export default function Loading() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        backgroundColor: '#111',
        color: '#fff',
      }}
    >
      <CircularProgress color="error" />

      <Typography variant="h6">
        Carregando Lutadores Hub...
      </Typography>
    </Box>
  );
}