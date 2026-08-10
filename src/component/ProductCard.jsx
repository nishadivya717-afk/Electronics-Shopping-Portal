import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 280,
        mx: "auto",
        borderRadius: "16px",
        boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
        overflow: "hidden",
        transition: "all 0.3s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* Product Image */}

      <Box
        sx={{
          position: "relative",
          backgroundColor: "#f5f5f5",
          height: 220,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      {/* Product Details */}

      <CardContent sx={{ p: 2.5 }}>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#888",
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          {product.category}
        </Typography>

        <Typography
          sx={{
            fontSize: "17px",
            fontWeight: 700,
            minHeight: 48,
            mb: 1,
          }}
        >
          {product.title}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            color: "#f5a623",
            mb: 1,
          }}
        >
          ★ {product.rating}
        </Typography>

        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 800,
            color: "#e53935",
            mb: 2,
          }}
        >
          ₹ {product.price.toLocaleString("en-IN")}
        </Typography>

        {/* Add to Cart */}

        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            addToCart(product);
            alert("Product added to cart!");
          }}
          sx={{
            backgroundColor: "#e53935",
            borderRadius: "25px",
            py: 1.1,
            textTransform: "none",
            fontWeight: 600,
            mb: 1,

            "&:hover": {
              backgroundColor: "#c62828",
            },
          }}
        >
          Add to Cart
        </Button>

        {/* View Details */}

        <Button
          variant="outlined"
          fullWidth
          component={Link}
          to={`/product/${product.id}`}
          sx={{
            borderColor: "#e53935",
            color: "#e53935",
            borderRadius: "25px",
            textTransform: "none",

            "&:hover": {
              borderColor: "#c62828",
              backgroundColor: "#fff5f4",
            },
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}