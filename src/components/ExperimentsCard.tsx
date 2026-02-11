import * as React from 'react';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import type { Experiment } from '../types/experiment';

interface ExperimentsCardProps {
    experiment: Experiment;
}

const ExperimentsCard: React.FC<ExperimentsCardProps> = ({ experiment }) => {
    return (
        <Card sx={{ maxWidth: 700, margin: '2rem auto', border: '1px solid #ddd', borderRadius: 2 }}>
            <CardContent sx={{ padding: '2rem' }}>

                <Typography variant="h4" gutterBottom>
                    {experiment.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    ID: {experiment.id} | Field: {experiment.field}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    Objective
                </Typography>
                <Typography variant="body1" paragraph>
                    {experiment.objective}
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Materials
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                    {Object.entries(experiment.materials).map(([key, value]) =>
                        value && value.length > 0 ? (
                            <li key={key}>
                                <Typography variant="body1">
                                    <strong>{key}:</strong> {value.join(', ')}
                                </Typography>
                            </li>
                        ) : null
                    )}
                </Box>

                <Typography variant="h6" gutterBottom>
                    Procedure
                </Typography>
                <Typography variant="body1" paragraph>
                    {experiment.procedure}
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Observations
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                    {Object.entries(experiment.observations).map(([key, value]) => (
                        <li key={key}>
                            <Typography variant="body1">
                                <strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : String(value)}
                            </Typography>
                        </li>
                    ))}
                </Box>

                <Typography variant="h6" gutterBottom>
                    Result
                </Typography>
                <Typography variant="body1" paragraph>
                    {experiment.result}
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Safety
                </Typography>
                <Typography variant="body1">
                    <strong>Level:</strong> {experiment.safety.level}
                </Typography>
                <Typography variant="body1">
                    <strong>Precautions:</strong> {experiment.safety.precautions.join(', ')}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ExperimentsCard;
