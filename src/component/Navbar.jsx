import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  Badge,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useCart } from "../context/CartContext";

export default function Navbar() {
  const navigate = useNavigate();

  const { cart = [] } = useCart();

  // ================= SEARCH =================

  const [navbarSearch, setNavbarSearch] = useState("");

  const handleNavbarSearch = () => {
    const value = navbarSearch.trim();

    if (value) {
      navigate(`/products?search=${encodeURIComponent(value)}`);
    } else {
      navigate("/products");
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      handleNavbarSearch();
    }
  };

  // ================= LOGIN USER =================

  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Total cart quantity
  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");

    setLoggedInUser(null);

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        color: "#111",
        borderBottom: "1px solid #eee",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "76px !important",
          px: {
            xs: 2,
            md: 6,
          },
          gap: 3,
        }}
      >
        {/* ================= LOGO ================= */}

        <Typography
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            fontSize: {
              xs: "18px",
              md: "20px",
            },
            fontWeight: 800,
            whiteSpace: "nowrap",
            color: "#111",
          }}
        >
          ELECTRONICS
          <Box
            component="span"
            sx={{
              color: "#ef3838",
            }}
          >
            STORE
          </Box>
        </Typography>

        {/* ================= NAV LINKS ================= */}

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            alignItems: "center",
            gap: 5,
            ml: 2,
          }}
        >
          <Typography
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "#111",
              fontSize: "14px",
              "&:hover": {
                color: "#ef3838",
              },
            }}
          >
            Home
          </Typography>

          <Typography
            component={Link}
            to="/products"
            sx={{
              textDecoration: "none",
              color: "#111",
              fontSize: "14px",
              "&:hover": {
                color: "#ef3838",
              },
            }}
          >
            Categories
          </Typography>

          <Typography
            component={Link}
            to="/products"
            sx={{
              textDecoration: "none",
              color: "#111",
              fontSize: "14px",
              "&:hover": {
                color: "#ef3838",
              },
            }}
          >
            Accessories
          </Typography>

          <Typography
            component={Link}
            to="/about"
            sx={{
              textDecoration: "none",
              color: "#111",
              fontSize: "14px",
              "&:hover": {
                color: "#ef3838",
              },
            }}
          >
            About Us
          </Typography>
        </Box>

        {/* ================= RIGHT SIDE ================= */}

        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* ================= SEARCH ================= */}

          <TextField
            placeholder="Search..."
            size="small"
            value={navbarSearch}
            onChange={(e) => setNavbarSearch(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },

              width: {
                sm: 190,
                md: 240,
              },

              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                backgroundColor: "#f8f8f8",
                height: 40,

                "& fieldset": {
                  border: "1px solid #eee",
                },

                "&:hover fieldset": {
                  border: "1px solid #ddd",
                },

                "&.Mui-focused fieldset": {
                  border: "1px solid #ddd",
                },
              },
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleNavbarSearch}
                      size="small"
                      sx={{
                        color: "#777",
                        "&:hover": {
                          color: "#ef3838",
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      <SearchIcon
                        sx={{
                          fontSize: 21,
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          {/* ================= CART ================= */}

          <IconButton
            component={Link}
            to="/cart"
            sx={{
              color: "#111",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <Badge
              badgeContent={cartCount}
              color="error"
              showZero
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* ================= USER / LOGIN ================= */}

          {loggedInUser ? (
            <>
              <Typography
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                  fontWeight: 700,
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                }}
              >
                Hi,{" "}
                {loggedInUser.username ||
                  loggedInUser.fullname ||
                  loggedInUser.email}
              </Typography>


              <Button
                onClick={handleLogout}
                variant="outlined"
                sx={{
                  borderColor: "#ef3838",
                  color: "#ef3838",
                  borderRadius: "25px",
                  px: 2.5,
                  py: 0.8,
                  textTransform: "none",
                  fontWeight: 600,

                  "&:hover": {
                    borderColor: "#d92f2f",
                    color: "#d92f2f",
                    backgroundColor: "#fff5f5",
                  },
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{
                backgroundColor: "#ef3838",
                color: "#fff",
                borderRadius: "25px",
                px: 3,
                py: 1,
                textTransform: "none",
                fontWeight: 600,

                "&:hover": {
                  backgroundColor: "#d92f2f",
                },
              }}
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}