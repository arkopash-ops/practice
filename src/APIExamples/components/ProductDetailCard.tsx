import { Dialog, DialogTitle, DialogContent, Typography, Grid, Box, Button } from "@mui/material";
import type { Product } from "../types/product";

type ProductDetailCardProps = {
    product: Product | null;
    open: boolean;
    onClose: () => void;
};

const ProductDetailCard = ({ product, open, onClose }: ProductDetailCardProps) => {
    if (!product) return null;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>{product.title}</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    {/* Images */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        {product.images.map((img, index) => (
                            <Box key={index} mb={1}>
                                <img
                                    src={img}
                                    alt={`${product.title} ${index}`}
                                    style={{ width: "100%", objectFit: "cover" }}
                                />
                            </Box>
                        ))}

                        {/* QR Code */}
                        {product.meta.qrCode && (
                            <Box mt={2}>
                                <Typography variant="subtitle2"><strong>QR Code:</strong></Typography>
                                <img
                                    src={product.meta.qrCode}
                                    alt={`${product.meta.barcode} Barcode QR Code`}
                                    style={{ width: "250px", height: "250px", objectFit: "contain" }}
                                />
                            </Box>
                        )}
                    </Grid>


                    {/* Product Details */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="subtitle1"><strong>Category:</strong> {product.category}</Typography>
                        <Typography variant="subtitle1"><strong>Price:</strong> ${product.price}</Typography>
                        <Typography variant="subtitle1"><strong>Discount:</strong> {product.discountPercentage}%</Typography>
                        <Typography variant="subtitle1"><strong>Rating:</strong> {product.rating}</Typography>
                        <Typography variant="subtitle1"><strong>Stock:</strong> {product.stock}</Typography>
                        <Typography variant="subtitle1"><strong>Brand:</strong> {product.brand}</Typography>
                        <Typography variant="subtitle1"><strong>SKU</strong>(Stock Keeping Unit)<strong>:</strong> {product.sku}</Typography>
                        <Typography variant="subtitle1"><strong>Weight:</strong> {product.weight}</Typography>
                        <Typography variant="subtitle1">
                            <strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}
                        </Typography>
                        <Typography variant="subtitle1"><strong>Warranty:</strong> {product.warrantyInformation}</Typography>
                        <Typography variant="subtitle1"><strong>Shipping:</strong> {product.shippingInformation}</Typography>
                        <Typography variant="subtitle1"><strong>Availability:</strong> {product.availabilityStatus}</Typography>
                        <Typography variant="subtitle1"><strong>Return Policy:</strong> {product.returnPolicy}</Typography>
                        <Typography variant="subtitle1"><strong>Minimum Order:</strong> {product.minimumOrderQuantity}</Typography>
                        <Typography variant="body2" mt={2}><strong>Description:</strong> {product.description}</Typography>

                        {/* Reviews */}
                        <Box mt={2}>
                            <Typography variant="h6">Reviews:</Typography>
                            {product.reviews.length === 0 && <Typography>No reviews yet.</Typography>}
                            {product.reviews.map((r, i) => (
                                <Box key={i} mb={1} p={1} sx={{ backgroundColor: "#f5f5f5", borderRadius: 1 }}>
                                    <Typography><strong>{r.reviewerName}</strong> ({r.reviewerEmail})</Typography>
                                    <Typography>Rating: {r.rating}</Typography>
                                    <Typography>{r.comment}</Typography>
                                    <Typography variant="caption">{r.date}</Typography>
                                </Box>
                            ))}
                        </Box>

                        <Button variant="contained" onClick={onClose} sx={{ mt: 2 }}>Close</Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default ProductDetailCard;
