import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import GalaxyCard from './GalaxyCard';
import galaxiesData from '../json/galaxy.json';
import type { Galaxy } from '../types/galaxy';

const GalaxyLists: React.FC = () => {
  const galaxies = galaxiesData.galaxies as Galaxy[];

  return (
    <div>
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        sx={{ mb: 4 }}
        style={{color: "#fff"}}
      >
        Galaxy List:
      </Typography>

      <Grid container spacing={5} justifyContent="center">

        {galaxies.map((galaxy) => (
          <Grid
            key={galaxy.id}
            size={{ xs: 12, sm: 6, md: 4 }}
            display="flex"
            justifyContent="center"
          >
            <GalaxyCard galaxy={galaxy} />
          </Grid>
        ))}
      </Grid>
    </div>

  );
};

export default GalaxyLists;
