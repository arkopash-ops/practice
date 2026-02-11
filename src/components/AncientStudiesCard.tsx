import React from 'react';
import type { AncientStudy } from '../types/ancientStudies';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';

interface AncientStudiesCardProps {
  ancientStudy: AncientStudy;
}

const AncientStudiesCard: React.FC<AncientStudiesCardProps> = ({ ancientStudy }) => {
  return (
    <Card sx={{ maxWidth: 800, margin: '2rem auto', borderRadius: 3, boxShadow: 3 }}>
      <CardContent>

        <Typography variant="h5" component="div" gutterBottom>
          <strong>{ancientStudy.id}</strong> | {ancientStudy.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Field: {ancientStudy.field}
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Card sx={{ mb: 2, backgroundColor: '#f9f9f9', boxShadow: 1 }}>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Objective
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">{ancientStudy.objective}</Typography>
          </CardContent>
        </Card>

        <Card sx={{ mb: 2, backgroundColor: '#e8f5e9', boxShadow: 1 }}>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Materials
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <ul>
              {Object.entries(ancientStudy.materials).map(([key, items]) =>
                items?.length ? (
                  <li key={key}>
                    <strong>{key}:</strong> {items.join(', ')}
                  </li>
                ) : null
              )}
            </ul>
          </CardContent>
        </Card>

        <Card sx={{ mb: 2, backgroundColor: '#e3f2fd', boxShadow: 1 }}>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Procedure
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <ul>
              {ancientStudy.procedure.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card sx={{ mb: 2, backgroundColor: '#fff3e0', boxShadow: 1 }}>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Observations
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {Object.entries(ancientStudy.observations).map(([category, items]) =>
              items?.length ? (
                <Box key={category} sx={{ mb: 1 }}>
                  <Typography variant="subtitle2">{category}:</Typography>
                  <ul>
                    {items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Box>
              ) : null
            )}
          </CardContent>
        </Card>

        <Card sx={{ mb: 2, backgroundColor: '#fce4ec', boxShadow: 1 }}>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Result
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">{ancientStudy.result}</Typography>
          </CardContent>
        </Card>

        <Card sx={{ mb: 2, backgroundColor: '#fff9c4', boxShadow: 1 }}>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Safety
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2" sx={{ mb: 1 }}>
              Level: {ancientStudy.safety.level}
            </Typography>
            <ul>
              {ancientStudy.safety.precautions.map((precaution, idx) => (
                <li key={idx}>{precaution}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default AncientStudiesCard;
