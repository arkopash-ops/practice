import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "#202020" }}>
            <Navbar />

            <Box sx={{ p: 3 }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
