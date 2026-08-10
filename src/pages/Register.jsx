import { useState } from "react";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Check empty fields
    if (
      !formData.fullname ||
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    // Check password
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save user details
    const userData = {
      fullname: formData.fullname,
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(userData)
    );

    alert("Registration Successful!");

    // Go to Login
    navigate("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        pt: "76px",
      }}
    >
      <Paper
        component="form"
        onSubmit={handleRegister}
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 450,
          p: {
            xs: 3,
            sm: 5,
          },
          borderRadius: "20px",
        }}
      >
        {/* Heading */}

        <Typography
          sx={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: 800,
            mb: 1,
          }}
        >
          Create Account
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#777",
            mb: 3,
          }}
        >
          Register your Electronics Store account
        </Typography>

        {/* Full Name */}

        <TextField
          label="Full Name"
          name="fullname"
          fullWidth
          required
          margin="normal"
          value={formData.fullname}
          onChange={handleChange}
        />

        {/* Username */}

        <TextField
          label="Username"
          name="username"
          fullWidth
          required
          margin="normal"
          value={formData.username}
          onChange={handleChange}
        />

        {/* Email */}

        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          required
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Password */}

        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          required
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Confirm Password */}

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          fullWidth
          required
          margin="normal"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {/* Register Button */}

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            py: 1.3,
            backgroundColor: "#e53935",
            borderRadius: "25px",
            textTransform: "none",
            fontWeight: 700,

            "&:hover": {
              backgroundColor: "#c62828",
            },
          }}
        >
          Register
        </Button>

        {/* Login Link */}

        <Typography
          sx={{
            textAlign: "center",
            mt: 3,
            color: "#777",
          }}
        >
          Already have an account?{" "}
          <Typography
            component={Link}
            to="/login"
            sx={{
              color: "#e53935",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Login
          </Typography>
        </Typography>
      </Paper>
    </Box>
  );
}