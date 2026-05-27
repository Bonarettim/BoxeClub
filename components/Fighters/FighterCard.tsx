'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';
import { Fighter } from "@/types/fighter";

type FighterCardProps = {
  fighter: Fighter;
};

export default function FighterCard({
  fighter,
}: FighterCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        transition: '0.3s',
        height: '100%',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={fighter.image}
        alt={fighter.firstName}
      />

      <CardContent>
        <Typography variant="h5" gutterBottom>
          {fighter.firstName} {fighter.lastName}
        </Typography>

        <Typography color="text.secondary">
          {fighter.email}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            Cidade: {fighter.address.city}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}