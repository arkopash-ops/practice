import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [jsonAnchor, setJsonAnchor] = React.useState<null | HTMLElement>(null);
    const [apiAnchor, setApiAnchor] = React.useState<null | HTMLElement>(null);

    const openJson = Boolean(jsonAnchor);
    const openApi = Boolean(apiAnchor);

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
                    {/* JSON Dropdown */}
                    <Button
                        color="inherit"
                        onClick={(e) => setJsonAnchor(e.currentTarget)}
                        endIcon={<ArrowDropDownIcon />}
                    >
                        JSON
                    </Button>

                    <Menu
                        anchorEl={jsonAnchor}
                        open={openJson}
                        onClose={() => setJsonAnchor(null)}
                    >
                        <MenuItem component={Link} to="/" onClick={() => setJsonAnchor(null)}>
                            Galaxies
                        </MenuItem>
                        <MenuItem component={Link} to="/experiments" onClick={() => setJsonAnchor(null)}>
                            Experiments
                        </MenuItem>
                        <MenuItem component={Link} to="/ancient-study" onClick={() => setJsonAnchor(null)}>
                            Ancient Study
                        </MenuItem>
                    </Menu>

                    {/* API Dropdown */}
                    <Button
                        color="inherit"
                        onClick={(e) => setApiAnchor(e.currentTarget)}
                        endIcon={<ArrowDropDownIcon />}
                    >
                        API
                    </Button>

                    <Menu
                        anchorEl={apiAnchor}
                        open={openApi}
                        onClose={() => setApiAnchor(null)}
                    >
                        <MenuItem component={Link} to="/api/users" onClick={() => setApiAnchor(null)}>
                            Users API
                        </MenuItem>
                        <MenuItem component={Link} to="/api/products" onClick={() => setApiAnchor(null)}>
                            Products API
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
