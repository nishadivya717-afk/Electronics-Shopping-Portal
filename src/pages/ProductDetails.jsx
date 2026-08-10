import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Card,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import productsData from "../data/Products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  // Find product from local Products.js
  const product = productsData.find(
    (item) => String(item.id) === String(id)
  );

  // Product not found
  if (!product) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5">
          Product not found
        </Typography>

        <Button
          component={Link}
          to="/products"
          variant="contained"
        >
          Back to Products
        </Button>
      </Box>
    );
  }

  // Quantity increase
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Quantity decrease
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Add to Cart
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    alert("Product added to cart!");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        px: {
          xs: 2,
          sm: 4,
          md: 6,
        },
        py: 6,
        mt: "76px",
      }}
    >
      {/* Back Button */}

      <Button
        component={Link}
        to="/products"
        startIcon={<ArrowBackIcon />}
        sx={{
          mb: 3,
          color: "#333",
          textTransform: "none",
        }}
      >
        Back to Products
      </Button>

      {/* Product Details Card */}

      <Card
        sx={{
          maxWidth: 1100,
          mx: "auto",
          p: {
            xs: 2,
            md: 5,
          },
          borderRadius: "20px",
          boxShadow: "0 5px 25px rgba(0,0,0,0.08)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: {
              xs: 4,
              md: 6,
            },
            alignItems: "center",
          }}
        >
          {/* ================= IMAGE ================= */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "16px",
              minHeight: 400,
            }}
          >
            <Box
              component="img"
              src={product.thumbnail || product.image}
              alt={product.title}
              sx={{
                width: "100%",
                maxWidth: 450,
                height: 400,
                objectFit: "contain",
              }}
            />
          </Box>

          {/* ================= DETAILS ================= */}

          <Box>
            {/* Category */}

            <Typography
              sx={{
                color: "#e53935",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
                mb: 1,
              }}
            >
              {product.category}
            </Typography>

            {/* Title */}

            <Typography
              sx={{
                fontSize: {
                  xs: "28px",
                  md: "36px",
                },
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#111",
              }}
            >
              {product.title}
            </Typography>

            {/* Rating */}

            <Typography
              sx={{
                mt: 2,
                color: "#555",
              }}
            >
              ⭐ Rating: {product.rating || "4.5"}
            </Typography>

            {/* Brand */}

            {product.brand && (
              <Typography
                sx={{
                  mt: 1,
                  color: "#555",
                }}
              >
                Brand: {product.brand}
              </Typography>
            )}

            <Divider sx={{ my: 3 }} />

            {/* Price */}

            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: 800,
                color: "#e53935",
              }}
            >
              ₹ {product.price.toLocaleString("en-IN")}
            </Typography>

            {/* Description */}

            <Typography
              sx={{
                mt: 3,
                color: "#666",
                lineHeight: 1.7,
              }}
            >
              {product.description ||
                "High quality electronic product designed for your everyday needs."}
            </Typography>

            {/* Quantity */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mt: 4,
              }}
            >
              <Typography fontWeight={700}>
                Quantity:
              </Typography>

              <IconButton
                onClick={decreaseQuantity}
                sx={{
                  border: "1px solid #ddd",
                }}
              >
                <RemoveIcon />
              </IconButton>

              <Typography
                sx={{
                  fontWeight: 700,
                  minWidth: 25,
                  textAlign: "center",
                }}
              >
                {quantity}
              </Typography>

              <IconButton
                onClick={increaseQuantity}
                sx={{
                  border: "1px solid #ddd",
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>

            {/* Buttons */}

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 4,
                flexWrap: "wrap",
              }}
            >
              {/* Add Cart */}

              <Button
                variant="contained"
                onClick={handleAddToCart}
                sx={{
                  flex: 1,
                  minWidth: 180,
                  py: 1.4,
                  borderRadius: "25px",
                  backgroundColor: "#e53935",
                  textTransform: "none",
                  fontWeight: 700,

                  "&:hover": {
                    backgroundColor: "#c62828",
                  },
                }}
              >
                Add to Cart
              </Button>

              {/* Wishlist */}

              <Button
                variant="outlined"
                startIcon={<FavoriteBorderIcon />}
                sx={{
                  flex: 1,
                  minWidth: 180,
                  py: 1.4,
                  borderRadius: "25px",
                  color: "#e53935",
                  borderColor: "#e53935",
                  textTransform: "none",
                  fontWeight: 700,

                  "&:hover": {
                    borderColor: "#c62828",
                    backgroundColor: "#fff5f5",
                  },
                }}
              >
                Wishlist
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}