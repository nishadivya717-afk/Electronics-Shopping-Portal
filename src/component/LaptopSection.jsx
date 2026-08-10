import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function LaptopSection() {
  return (
    <Box
      sx={{
        mx: { xs: 2, md: 6 },
        my: 6,
        minHeight: 360,
        borderRadius: "24px",
        overflow: "hidden",
        background:
          "linear-gradient(120deg, #f4f7ff 0%, #e9efff 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Left Content */}

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          px: { xs: 4, md: 7 },
          py: 5,
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            color: "#e53935",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "2px",
            mb: 1.5,
          }}
        >
          POWERFUL PERFORMANCE
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: "30px",
              md: "42px",
            },
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#111",
            mb: 2,
          }}
        >
          Laptops & Computers
        </Typography>

        <Typography
          sx={{
            color: "#666",
            lineHeight: 1.7,
            maxWidth: 430,
            mb: 3,
          }}
        >
          Upgrade your workspace with powerful laptops and
          computers designed for work, study and entertainment.
        </Typography>

        <Button
          component={Link}
          to="/products"
          variant="contained"
          sx={{
            backgroundColor: "#e53935",
            borderRadius: "25px",
            px: 3.5,
            py: 1.2,
            textTransform: "none",
            fontWeight: 600,

            "&:hover": {
              backgroundColor: "#c62828",
            },
          }}
        >
          Explore Laptops →
        </Button>
      </Box>

      {/* Laptop Image */}

      <Box
        component="img"
        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900"
        alt="Laptop"
        sx={{
          position: "absolute",
          width: {
            xs: "0%",
            md: "48%",
          },
          right: 20,
          maxHeight: 330,
          objectFit: "contain",
          borderRadius: "20px",
        }}
      />
    </Box>
  );
}