import { useEffect, useState } from "react";
import type { User } from "../types/user";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    CircularProgress,
    Snackbar,
    Alert,
} from "@mui/material";

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const startTime = Date.now();

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data: User[]) => {
                const x = Date.now() - startTime;
                const delay = 2000 - x;

                setTimeout(() => {
                    setUsers(data);
                    setLoading(false);
                }, delay > 0 ? delay : 0);
            })
            .catch((err) => {
                setError("Error fetching users. Please try again later. Error: " + err.message);
                setLoading(false);
            });
    }, []);

    const handleClose = () => {
        setError(null);
    };

    if (loading)
        return (
            <div
                style={{
                    textAlign: "center",
                    marginTop: "2rem",
                    minHeight: "200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CircularProgress style={{ color: "#0080ff" }} />
                <Typography variant="h6" style={{ marginTop: "1rem", color: "#fff" }}>
                    Loading users...
                </Typography>
            </div>
        );

    return (
        <div style={{ color: "#fff", padding: "1rem" }}>
            {/* Custom Alert */}
            <Snackbar
                open={!!error}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={handleClose} severity="error" variant="filled">
                    {error}
                </Alert>
            </Snackbar>

            <Typography variant="h4" component="h1" gutterBottom>
                User List
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Website</TableCell>
                            <TableCell>Company</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user.id}
                                hover
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "rgba(25, 118, 210)",
                                        cursor: "pointer",
                                    },
                                    transition: "background-color 0.3s",
                                }}
                            >
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <Typography variant="body2">
                                        {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                                    </Typography>
                                    <Typography variant="caption">
                                        Geo: {user.address.geo.lat}, {user.address.geo.lng}
                                    </Typography>
                                </TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.website}</TableCell>
                                <TableCell>
                                    <Typography variant="body2">{user.company.name}</Typography>
                                    <Typography variant="caption">"{user.company.catchPhrase}"</Typography>
                                    <Typography variant="caption" display="block">{user.company.bs}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default UserList;
