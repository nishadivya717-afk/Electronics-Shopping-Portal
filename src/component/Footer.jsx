import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111827",
        color: "#fff",
        mt: 6,
        pt: 6,
        pb: 3,
        px: { xs: 3, md: 8 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "2fr 1fr 1fr 1fr",
          },
          gap: 4,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {/* Brand */}

        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 800,
              mb: 2,
            }}
          >
            E-Shopping Portal
          </Typography>

          <Typography
            sx={{
              color: "#aaa",
              lineHeight: 1.8,
              maxWidth: 350,
            }}
          >
            Your trusted destination for smartphones,
            laptops, accessories and the latest electronics.
          </Typography>
        </Box>

        {/* Quick Links */}

        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Quick Links
          </Typography>

          <Typography
            component={Link}
            to="/"
            sx={{
              display: "block",
              color: "#aaa",
              textDecoration: "none",
              mb: 1,
              "&:hover": { color: "#fff" },
            }}
          >
            Home
          </Typography>

          <Typography
            component={Link}
            to="/products"
            sx={{
              display: "block",
              color: "#aaa",
              textDecoration: "none",
              mb: 1,
              "&:hover": { color: "#fff" },
            }}
          >
            Products
          </Typography>

          <Typography
            component={Link}
            to="/wishlist"
            sx={{
              display: "block",
              color: "#aaa",
              textDecoration: "none",
              "&:hover": { color: "#fff" },
            }}
          >
            Wishlist
          </Typography>
        </Box>

        {/* Customer Service */}

        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Customer Service
          </Typography>

          <Typography sx={{ color: "#aaa", mb: 1 }}>
            Contact Us
          </Typography>

          <Typography sx={{ color: "#aaa", mb: 1 }}>
            Shipping
          </Typography>

          <Typography sx={{ color: "#aaa" }}>
            Returns
          </Typography>
        </Box>

        {/* Contact */}

        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Contact
          </Typography>

          <Typography sx={{ color: "#aaa", mb: 1 }}>
            Chennai, India
          </Typography>

          <Typography sx={{ color: "#aaa", mb: 1 }}>
            support@eshopping.com
          </Typography>

          <Typography sx={{ color: "#aaa" }}>
            +91 98765 43210
          </Typography>
        </Box>
      </Box>

      {/* Bottom */}

      <Box
        sx={{
          borderTop: "1px solid #374151",
          mt: 5,
          pt: 3,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#888",
            fontSize: "14px",
          }}
        >
          © 2026 E-Shopping Portal. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}