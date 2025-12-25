import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removefromCart, clearcart } from "../../files/Cartslice";
import Navbar from "../../Compnents/Navbar"; // make sure the path matches your folder
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Grid,
  Divider,
  Container,
} from "@mui/material";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Navbar always visible at the top */}
      <Navbar />

      {/* Add top margin to avoid navbar overlap */}
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #141E30, #243B55)",
          pt: 12,
          pb: 6,
        }}
      >
        <Container>
          <Typography
            variant="h4"
            mb={4}
            color="#fff"
            fontWeight="bold"
            align="center"
          >
            Your Cart
          </Typography>

          {cart.length === 0 ? (
            <Typography
              variant="h6"
              color="#ccc"
              align="center"
              sx={{ mt: 5 }}
            >
              Your cart is empty 🛒
            </Typography>
          ) : (
            <>
              <Grid container spacing={4}>
                {cart.map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                        backgroundColor: "#fff",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 12px 25px rgba(0,0,0,0.4)",
                        },
                      }}
                    >
                      {/* Product Image */}
                      <CardMedia
                        component="img"
                        height="200"
                        image={`http://localhost:3000/${item.image}`}
                        alt={item.name}
                        sx={{
                          objectFit: "cover",
                          borderTopLeftRadius: 3,
                          borderTopRightRadius: 3,
                        }}
                      />

                      <CardContent>
                        <Typography variant="h6" fontWeight="bold">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Price: ₹{item.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Quantity: {item.quantity}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          mt={1}
                          color="primary"
                        >
                          Total: ₹{item.price * item.quantity}
                        </Typography>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="error"
                          fullWidth
                          onClick={() => dispatch(removefromCart(item.id)) }
                          sx={{
                            textTransform: "none",
                            fontWeight: "bold",
                            borderRadius: "10px",
                          }}
                        >
                          Remove
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Divider sx={{ my: 5, borderColor: "#555" }} />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="#fff"
                >
                  Grand Total: ₹{total}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => dispatch(clearcart())}
                  sx={{
                    textTransform: "none",
                    fontWeight: "bold",
                    px: 4,
                    py: 1,
                    borderRadius: "10px",
                  }}
                >
                  Clear Cart
                </Button>
              </Box>
            </>
          )}
        </Container>
      </Box>
    </>
  );
};
export default Cart;
