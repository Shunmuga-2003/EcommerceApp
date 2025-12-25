import React, { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
} from "@mui/material";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      alert("Email already registered");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please login.");
    navigate("/");
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
          Sign Up
        </Typography>

        <form onSubmit={handleSignup}>
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
            Sign Up
          </Button>
        </form>

        <Typography variant="body2" mt={2} color="text.secondary">
          Already have an account?{" "}
          <Link
            component={RouterLink}
            to="/"
            sx={{ color: "#764ba2", fontWeight: "bold" }}
          >
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SigninPage;
