import * as React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Chip
} from '@mui/material';

import type { Galaxy } from '../types/galaxy';

interface GalaxyCardProps {
  galaxy: Galaxy;
}

const GalaxyCard: React.FC<GalaxyCardProps> = ({ galaxy }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      <CardHeader
        title={galaxy.name}
        subheader={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>ID: {galaxy.id}</div>
            <div>Constellation: {galaxy.location.constellation}</div>
            <div>Right Ascension: {galaxy.location.rightAscension}</div>
            <div>Declination: {galaxy.location.declination}</div>
          </div>
        }
        action={<Chip label={galaxy.type} size="small" />}
      />

      <CardMedia
        component="img"
        image={galaxy.img}
        alt={galaxy.name}
        sx={{ height: 200, objectFit: 'cover' }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography fontWeight="bold">
          Distance:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {galaxy.distanceLightYears.toLocaleString()} light-years
        </Typography>

        <Typography fontWeight="bold">
          Diameter:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {galaxy.diameterLightYears.toLocaleString()} light-years
        </Typography>

        <Typography variant="subtitle2" sx={{ mt: 1 }} fontWeight="bold">
          Discovery:
        </Typography>
        <Typography variant="body2">
          {galaxy.discovery.discoveredBy}
          {galaxy.discovery.year && ` (${galaxy.discovery.year})`}
        </Typography>

        <Typography variant="subtitle2" sx={{ mt: 1 }} fontWeight="bold">
          Notes:
        </Typography>
        <Typography variant="body2">
          {galaxy.notes}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GalaxyCard;
