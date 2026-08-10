import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        pt: "110px",
        pb: 6,
        px: {
          xs: 2,
          md: 6,
        },
      }}
    >
      {/* Heading */}

      <Box
        sx={{
          textAlign: "center",
          maxWidth: 800,
          mx: "auto",
          mb: 6,
        }}
      >
        <Typography
          sx={{
            color: "#e53935",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "2px",
            mb: 1,
          }}
        >
          ABOUT OUR STORE
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: "30px",
              md: "42px",
            },
            fontWeight: 800,
            color: "#111",
            mb: 2,
          }}
        >
          Your Trusted Electronics Store
        </Typography>

        <Typography
          sx={{
            color: "#666",
            lineHeight: 1.8,
          }}
        >
          We provide quality electronics at affordable prices.
          Explore smartphones, laptops, accessories and other
          latest electronic products in one place.
        </Typography>
      </Box>

      {/* Content */}

      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: 4,
        }}
      >
        {/* Our Mission */}

        <Box
          sx={{
            backgroundColor: "#fff",
            p: {
              xs: 3,
              md: 4,
            },
            borderRadius: "20px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 800,
              mb: 2,
            }}
          >
            Our Mission
          </Typography>

          <Typography
            sx={{
              color: "#666",
              lineHeight: 1.8,
            }}
          >
            Our mission is to make electronics shopping simple,
            convenient and reliable. We aim to provide customers
            with a smooth shopping experience from product
            discovery to checkout.
          </Typography>
        </Box>

        {/* Why Choose Us */}

        <Box
          sx={{
            backgroundColor: "#fff",
            p: {
              xs: 3,
              md: 4,
            },
            borderRadius: "20px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 800,
              mb: 2,
            }}
          >
            Why Choose Us?
          </Typography>

          <Typography
            sx={{
              color: "#666",
              lineHeight: 2,
            }}
          >
            ✓ Quality Products
            <br />
            ✓ Affordable Prices
            <br />
            ✓ Easy Shopping Experience
            <br />
            ✓ Secure Checkout
            <br />
            ✓ Customer Friendly Service
          </Typography>
        </Box>
      </Box>

      {/* Button */}

      <Box
        sx={{
          textAlign: "center",
          mt: 5,
        }}
      >
        <Button
          component={Link}
          to="/products"
          variant="contained"
          sx={{
            backgroundColor: "#e53935",
            borderRadius: "25px",
            px: 4,
            py: 1.2,
            textTransform: "none",
            fontWeight: 700,

            "&:hover": {
              backgroundColor: "#c62828",
            },
          }}
        >
          Explore Products →
        </Button>
      </Box>
    </Box>
  );
}