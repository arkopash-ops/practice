import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" elevation={0}>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1, fontWeight: 'bold' }}
                >
                    Navbar
                </Typography>

                <Box>
                    <Button color="inherit" component={Link} to="/">Galaxies</Button>
                    <Button color="inherit" component={Link} to="/experiments">Experiments</Button>
                    <Button color="inherit" component={Link} to="/ancient-study">Ancient Study</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
