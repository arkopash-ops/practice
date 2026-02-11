import { useEffect, useState, useMemo } from "react";
import type { Game } from "../types/game";

import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    TextField,
    InputAdornment,
    Container,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    CircularProgress,
} from "@mui/material";

import Masonry from "@mui/lab/Masonry";
import SearchIcon from "@mui/icons-material/Search";

const GameList = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("");
    const [platform, setPlatform] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/api/games");
                const data = await res.json();
                setGames(data);
            } catch (err) {
                alert(`Error fetching Games.\nPlease try again later.\nError: ${err}`);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    const genres = useMemo(
        () => Array.from(new Set(games.map((g) => g.genre))).sort(),
        [games]
    );

    const platforms = useMemo(
        () => Array.from(new Set(games.map((g) => g.platform))).sort(),
        [games]
    );

    const filterGames = useMemo(() => {
        return games.filter((g) => {
            const matchesSearch = g.title.toLowerCase().includes(search.toLowerCase());
            const matchGenre = genre ? g.genre === genre : true;
            const matchPlatform = platform ? g.platform === platform : true;
            return matchesSearch && matchGenre && matchPlatform;
        });
    }, [games, search, genre, platform]);

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{ color: "#fff", textAlign: "center", mb: 4 }}
            >
                Game List
            </Typography>

            {/* Filters */}
            <Box
                sx={{
                    mb: 4,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 2,
                }}
            >
                <TextField
                    variant="outlined"
                    placeholder="Search Game"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{
                        width: { xs: "100%", sm: "30%", md: "25%" },
                        backgroundColor: "#fff",
                        borderRadius: 1,
                    }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                />

                <FormControl sx={{ minWidth: 150, backgroundColor: "#fff", borderRadius: 1 }}>
                    <InputLabel>Genre</InputLabel>
                    <Select
                        value={genre}
                        label="Genre"
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        <MenuItem value="">
                            <em>All</em>
                        </MenuItem>
                        {genres.map((g) => (
                            <MenuItem key={g} value={g}>
                                {g}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 150, backgroundColor: "#fff", borderRadius: 1 }}>
                    <InputLabel>Platform</InputLabel>
                    <Select
                        value={platform}
                        label="Platform"
                        onChange={(e) => setPlatform(e.target.value)}
                    >
                        <MenuItem value="">
                            <em>All</em>
                        </MenuItem>
                        {platforms.map((p) => (
                            <MenuItem key={p} value={p}>
                                {p}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            {/* Loading Spinner */}
            {loading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50vh",
                    }}
                >
                    <CircularProgress sx={{ color: "#0080ff" }} />
                </Box>
            ) : filterGames.length === 0 ? (
                <Typography
                    variant="h6"
                    sx={{ color: "#f00", textAlign: "center", mt: 4 }}
                >
                    No Game Found!!
                </Typography>
            ) : (
                <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 5 }} spacing={3}>
                    {filterGames.map((g) => (
                        <Card
                            key={g.id}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: 6,
                                },
                                "&:hover .game-image": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            <Box sx={{ overflow: "hidden" }}>
                                <CardMedia
                                    component="img"
                                    image={g.thumbnail}
                                    alt={g.title}
                                    className="game-image"
                                    sx={{ transition: "transform 0.3s ease" }}
                                />
                            </Box>

                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom>
                                    {g.title}
                                </Typography>

                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {g.short_description}
                                </Typography>

                                <Typography variant="body2">
                                    {g.genre} - {g.platform}
                                </Typography>

                                <Typography variant="caption" display="block">
                                    Publisher: {g.publisher}
                                </Typography>

                                <Typography variant="caption" display="block">
                                    Developer: {g.developer}
                                </Typography>

                                <Typography variant="caption" display="block" sx={{ mb: 2 }}>
                                    {g.release_date}
                                </Typography>

                                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={() => window.open(g.freetogame_profile_url, "_blank")}
                                    >
                                        Details
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => window.open(g.game_url, "_blank")}
                                    >
                                        Play
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Masonry>
            )}
        </Container>
    );
};

export default GameList;
