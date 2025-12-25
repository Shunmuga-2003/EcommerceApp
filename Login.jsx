import React, { useState, useEffect } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/products");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/products");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          p: 4,
          width: 360,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" mb={3} color="text.primary">
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, py: 1.5, fontWeight: "bold" }}
          >
            Login
          </Button>
        </form>

        <Typography variant="body2" mt={2} color="text.secondary">
          Don't have an account?{" "}
          <Link
            component={RouterLink}
            to="/signin"
            sx={{ color: "#764ba2", fontWeight: "bold" }}
          >
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
