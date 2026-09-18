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

  // ================= CART COUNT =================

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  // ================= LOGOUT =================

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
        zIndex: 1200,
      }}
    >
      <Toolbar
        sx={{
          minHeight: "76px !important",
          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 6,
          },
          gap: {
            xs: 1,
            md: 3,
          },
        }}
      >

        {/* ================= LOGO ================= */}

        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            minWidth: "fit-content",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "20px",
                sm: "23px",
              },
              fontWeight: 800,
              letterSpacing: "-0.8px",
              color: "#111",
              whiteSpace: "nowrap",
            }}
          >
            Electro
            <Box
              component="span"
              sx={{
                color: "#ef3838",
              }}
            >
              Store
            </Box>
          </Typography>
        </Box>

        {/* ================= NAV LINKS ================= */}

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            alignItems: "center",
            gap: {
              md: 3,
              lg: 4,
            },
            ml: {
              md: 2,
              lg: 3,
            },
          }}
        >

          {/* HOME */}

          <Typography
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "#ef3838",
              fontSize: "16px",
              fontWeight: 600,
              whiteSpace: "nowrap",

              "&:hover": {
                color: "#d92f2f",
              },
            }}
          >
            Home
          </Typography>

          {/* CATEGORIES */}

          <Typography
            component={Link}
            to="/products"
            sx={{
              textDecoration: "none",
              color: "#111",
              fontSize: "16px",
              fontWeight: 500,
              whiteSpace: "nowrap",

              "&:hover": {
                color: "#ef3838",
              },
            }}
          >
            Categories
          </Typography>

          {/* ACCESSORIES */}

          <Typography
            component={Link}
            to="/products"
            sx={{
              textDecoration: "none",
              color: "#111",
              fontSize: "16px",
              fontWeight: 500,
              whiteSpace: "nowrap",

              "&:hover": {
                color: "#ef3838",
              },
            }}
          >
            Accessories
          </Typography>

          {/* ABOUT US */}

          <Typography
            component={Link}
            to="/about"
            sx={{
              textDecoration: "none",
              color: "#111",
              fontSize: "16px",
              fontWeight: 500,
              whiteSpace: "nowrap",

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
            gap: {
              xs: 0.5,
              sm: 1,
              md: 2,
            },
          }}
        >

          {/* ================= SEARCH ================= */}

          <TextField
            placeholder="Search products..."
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
                sm: 180,
                md: 220,
                lg: 300,
              },

              "& .MuiOutlinedInput-root": {
                height: 44,
                borderRadius: "25px",
                backgroundColor: "#fff",

                "& fieldset": {
                  border: "1px solid #ddd",
                },

                "&:hover fieldset": {
                  border: "1px solid #ccc",
                },

                "&.Mui-focused fieldset": {
                  border: "1px solid #ef3838",
                },
              },

              "& .MuiInputBase-input": {
                fontSize: "14px",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleNavbarSearch}
                    size="small"
                    sx={{
                      color: "#555",

                      "&:hover": {
                        color: "#ef3838",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* ================= WISHLIST ================= */}

          <Button
            component={Link}
            to="/wishlist"
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
              alignItems: "center",
              gap: 0.7,
              color: "#111",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
              minWidth: "auto",
              px: 1,

              "&:hover": {
                backgroundColor: "transparent",
                color: "#ef3838",
              },
            }}
          >
            <Box
              component="span"
              sx={{
                fontSize: "27px",
                lineHeight: 1,
              }}
            >
              ♡
            </Box>

            Wishlist
          </Button>

          {/* ================= CART ================= */}

          <Button
            component={Link}
            to="/cart"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.8,
              color: "#111",
              textTransform: "none",
              fontSize: {
                xs: "14px",
                sm: "15px",
                lg: "16px",
              },
              fontWeight: 500,
              minWidth: "auto",
              px: 1,

              "&:hover": {
                backgroundColor: "transparent",
                color: "#ef3838",
              },
            }}
          >
            <Badge
              badgeContent={cartCount}
              color="error"
              showZero
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "10px",
                  minWidth: 18,
                  height: 18,
                },
              }}
            >
              <ShoppingCartIcon
                sx={{
                  fontSize: 28,
                }}
              />
            </Badge>

            <Box
              component="span"
              sx={{
                display: {
                  xs: "none",
                  sm: "inline",
                },
              }}
            >
              Cart
            </Box>
          </Button>

          {/* ================= LOGIN / USER ================= */}

          {loggedInUser ? (
            <>
              <Typography
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                  fontSize: "15px",
                  fontWeight: 600,
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
                sx={{
                  color: "#111",
                  textTransform: "none",
                  fontSize: "15px",
                  fontWeight: 500,
                  minWidth: "auto",
                  px: 1,

                  "&:hover": {
                    color: "#ef3838",
                    backgroundColor: "transparent",
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
              sx={{
                color: "#111",
                textTransform: "none",
                fontSize: {
                  xs: "14px",
                  sm: "15px",
                  lg: "16px",
                },
                fontWeight: 600,
                minWidth: "auto",
                px: 1.5,

                "&:hover": {
                  color: "#ef3838",
                  backgroundColor: "transparent",
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  fontSize: "23px",
                  mr: 0.7,
                }}
              >
                ♙
              </Box>

              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}