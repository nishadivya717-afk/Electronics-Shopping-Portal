import { useState } from "react";

import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check empty fields
    if (!formData.email || !formData.password) {
      alert("Please enter email and password");
      return;
    }

    // Get registered user
    const savedUser = localStorage.getItem("registeredUser");

    if (!savedUser) {
      alert("No account found. Please register first.");
      return;
    }

    const registeredUser = JSON.parse(savedUser);

    // Check email and password
    if (
      formData.email !== registeredUser.email ||
      formData.password !== registeredUser.password
    ) {
      alert("Invalid email or password");
      return;
    }

    // Save logged-in user
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        fullname: registeredUser.fullname,
        username: registeredUser.username,
        email: registeredUser.email,
      })
    );

    alert("Login successful!");

    navigate("/");
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
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          width: "100%",
          maxWidth: 450,
          backgroundColor: "#fff",
          p: {
            xs: 3,
            sm: 5,
          },
          borderRadius: "20px",
          boxShadow: "0 5px 25px rgba(0,0,0,0.08)",
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
          Welcome Back
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#777",
            mb: 4,
          }}
        >
          Login to your Electronics Store account
        </Typography>

        {/* Email */}

        <TextField
          fullWidth
          required
          type="email"
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ mb: 3 }}
        />

        {/* Password */}

        <TextField
          fullWidth
          required
          type={showPassword ? "text" : "password"}
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Forgot Password */}

        <Box
          sx={{
            textAlign: "right",
            mb: 3,
          }}
        >
          <Typography
            component={Link}
            to="#"
            sx={{
              color: "#e53935",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Forgot Password?
          </Typography>
        </Box>

        {/* Login Button */}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#e53935",
            borderRadius: "25px",
            py: 1.4,
            textTransform: "none",
            fontWeight: 700,
            fontSize: "16px",

            "&:hover": {
              backgroundColor: "#c62828",
            },
          }}
        >
          Login
        </Button>

        {/* Register */}

        <Typography
          sx={{
            textAlign: "center",
            mt: 3,
            color: "#777",
          }}
        >
          Don't have an account?{" "}
          <Typography
            component={Link}
            to="/register"
            sx={{
              color: "#e53935",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Register
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}