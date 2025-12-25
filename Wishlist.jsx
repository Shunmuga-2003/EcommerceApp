import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removefromWishlist, clearWishlist } from "../../files/Wishlistslice";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Navbar from "../../Compnents/Navbar";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <Box sx={{ background: "linear-gradient(135deg, #141E30, #243B55)", minHeight: "100vh", pt: 12, pb: 6 }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ color: "#fff", mb: 4, fontWeight: "bold" }}>
            Your Wishlist
          </Typography>

          {wishlist.length === 0 ? (
            <Typography align="center" sx={{ color: "#bbb", mt: 5 }}>
              No items in wishlist 
            </Typography>
          ) : (
            <>
              <Grid container spacing={4}>
                {wishlist.map((item) => (
                  <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={`http://localhost:3000/${item.image}`}
                        alt={item.name}
                      />
                      <CardContent>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="body1">₹{item.price}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          fullWidth
                          color="error"
                          variant="contained"
                          onClick={() => dispatch(removefromWishlist(item.id))}
                        >
                          Remove
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box textAlign="center" mt={4}>
                <Button variant="contained" color="primary" onClick={() => dispatch(clearWishlist())}>
                  Clear Wishlist
                </Button>
              </Box>
            </>
          )}
        </Container>
      </Box>
    </>
  );
};
export default Wishlist;
