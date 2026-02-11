import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import ExperimentsCard from './ExperimentsCard';
import experimentsData from '../json/experiments.json'
import type { Experiment } from '../types/experiment'

const ExperimentsList: React.FC = () => {
    const experiments = experimentsData.experiments as Experiment[];
    return (
        <div>
            <Typography
                variant="h4"
                fontWeight="bold"
                align="center"
                sx={{ mb: 4 }}
                style={{ color: "#fff" }}
            >
                Experiment List:
            </Typography>

            <Box sx={{
                margin: '0 auto',
                padding: 4,
                gap: 4
            }}>
                {experiments.map((experiment) => (
                    <ExperimentsCard key={experiment.id} experiment={experiment} />
                ))}
            </Box>
        </div>
    )
}

export default ExperimentsList
