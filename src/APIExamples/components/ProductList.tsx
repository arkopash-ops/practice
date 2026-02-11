import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { Card, CardMedia, CardContent, Typography, Grid, Button } from "@mui/material";
import ProductDetailCard from "./ProductDetailCard";

type ProductApiResponse = {
    products: Product[];
};

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [openDetail, setOpenDetail] = useState(false);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then((data: ProductApiResponse) => setProducts(data.products))
            .catch(err => {
                alert("Error fetching Products. Please try again later. Error: " + err.message);
            });
    }, []);

    const handleOpenDetail = (product: Product) => {
        setSelectedProduct(product);
        setOpenDetail(true);
    };

    const handleCloseDetail = () => {
        setSelectedProduct(null);
        setOpenDetail(false);
    };

    return (
        <div style={{ color: "#fff", padding: "1rem" }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Product List
            </Typography>

            <Grid container spacing={3}>
                {products.map((p) => (
                    <Grid key={p.id} size={{ xs: 12, sm: 6, md: 3 }}>
                        <Card
                            sx={{
                                backgroundColor: "#333",
                                color: "#fff",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
                                height: 510,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={p.thumbnail}
                                alt={p.title}
                                sx={{ height: 350, width: "100%", objectFit: "cover" }}
                            />

                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    {p.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {p.category}
                                </Typography>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    ${p.price}
                                </Typography>
                            </CardContent>

                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ width: "100%", marginTop: "auto" }}
                                onClick={() => handleOpenDetail(p)}
                            >
                                View Details
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <ProductDetailCard
                product={selectedProduct}
                open={openDetail}
                onClose={handleCloseDetail}
            />
        </div>
    );
};

export default ProductList;



// <div style={{ color: "#fff" }}>
//     <ul>
//         {products.map((p) => (
//             <li key={p.id}>
//                 <pre>{JSON.stringify(p, null, 2)}</pre>
//             </li>
//         ))}
//     </ul>
// </div>