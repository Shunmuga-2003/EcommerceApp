import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../files/Cartslice";
import { addtoWishlist, removefromWishlist } from "../files/Wishlistslice";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Container,
  Box,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);
  const handleAddToCart = (product) => {
    dispatch(addtoCart(product));
  };
  const handleWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);
    if (exists) {
      dispatch(removefromWishlist(product));
    } else {
      dispatch(addtoWishlist(product));
    }
  };
  const isWishlisted = (id) => wishlist.some((item) => item.id === id);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #141E30, #243B55)",
        py: 8,
        mt: 10,
      }}
    >
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 6, color: "white", fontWeight: "bold", letterSpacing: 1 }}
        >
          Our Products
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  borderRadius: "16px",
                  overflow: "hidden",
                  backgroundColor: "beige",
                  boxShadow: "0 8px 20px rgba(0,0,0,1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 25px rgba(0,0,0,0.35)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={`http://localhost:3000/${product.image}`}
                  alt={product.name}
                  color="white"
                  sx={{ objectFit: "cover",backgroundColor:'black' }}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "black", mb: 1 }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "black", fontWeight: "bold",  textDecoration:'underline', fontSize:20}}
                  >
                    ₹{product.price}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    pb: 2,
                    px: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      borderRadius: "20px",
                      px: 3,
                      textTransform: "none",
                      fontWeight: "bold",
                      fontSize: "15px",
                      alignItems:'center'
      
                    }}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                  <IconButton onClick={() => handleWishlist(product)}>
                    {isWishlisted(product.id) ? (
                      <FavoriteIcon sx={{ color: "red" }} />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default ProductCard;
