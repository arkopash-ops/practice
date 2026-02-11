import React from 'react'

import ancientStudyData from '../json/ancientStudies.json'
import { Box } from '@mui/system'
import { Typography } from '@mui/material';
import AncientStudiesCard from './AncientStudiesCard';
import type { AncientStudy } from '../types/ancientStudies';

const AncientStudieslist: React.FC = () => {
    const ancientStudy = ancientStudyData.ancientStudies as AncientStudy[];
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
            }}
            >
                {ancientStudy.map(ancientStudy => (
                    <AncientStudiesCard key={ancientStudy.id} ancientStudy={ancientStudy} />
                ))}
            </Box>
        </div>
    )
}

export default AncientStudieslist
