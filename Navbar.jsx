import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/", { replace: true });
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlist.length;

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(90deg, #141E30 0%, #243B55 100%)",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left: Brand / Products */}
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/products")}
        >
          <StorefrontIcon sx={{ mr: 1, fontSize: 28, color: "#00E676" }} />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#fff", letterSpacing: 0.5 }}
          >
            MyStore
          </Typography>
        </Box>

        {/* Right: Wishlist + Cart + Logout */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Wishlist */}
          <IconButton color="inherit" onClick={() => navigate("/wishlist")}>
            <Badge badgeContent={wishlistCount} color="error">
              <FavoriteIcon sx={{ color: "#FF4081" }} />
            </Badge>
          </IconButton>

          {/* Cart */}
          <IconButton color="inherit" onClick={() => navigate("/cart")}>
            <Badge badgeContent={cartCount} color="success">
              <ShoppingCartIcon sx={{ color: "#00E676" }} />
            </Badge>
          </IconButton>

          {/* Logout */}
          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "20px",
              px: 2,
              "&:hover": { backgroundColor: "#d32f2f" },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
