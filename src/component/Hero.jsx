import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Box
      sx={{
        mx: { xs: 2, md: 5 },
        mt: 3,
        minHeight: { xs: "500px", md: "520px" },
        borderRadius: "24px",
        background:
          "linear-gradient(120deg, #fff8f5 0%, #fff0eb 50%, #fff8f5 100%)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* LEFT CONTENT */}

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          px: { xs: 4, md: 7 },
          py: 6,
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            color: "#e53935",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "3px",
            mb: 2,
          }}
        >
          ELECTRONICS STORE
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "38px",
              sm: "48px",
              md: "58px",
            },
            fontWeight: 800,
            lineHeight: 1.08,
            color: "#111",
            mb: 3,
          }}
        >
          Experience innovation
          <br />
          like never before.
        </Typography>

        <Typography
          sx={{
            color: "#666",
            fontSize: "16px",
            lineHeight: 1.8,
            maxWidth: "500px",
            mb: 4,
          }}
        >
          Discover the latest electronics designed to make
          your everyday life smarter, easier and better.
        </Typography>

        <Button
          component={Link}
          to="/products"
          variant="contained"
          sx={{
            backgroundColor: "#e53935",
            color: "#fff",
            borderRadius: "25px",
            px: 4,
            py: 1.4,
            textTransform: "none",
            fontSize: "15px",
            fontWeight: 600,

            "&:hover": {
              backgroundColor: "#c62828",
            },
          }}
        >
          Shop Now →
        </Button>
      </Box>

      {/* RIGHT IMAGE AREA */}

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "100%",
          position: "absolute",
          right: 0,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Main Phone */}

        <Box
          component="img"
          src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600"
          alt="Smartphone"
          sx={{
            width: "280px",
            height: "360px",
            objectFit: "cover",
            borderRadius: "35px",
            transform: "rotate(-8deg)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            zIndex: 2,
          }}
        />

        {/* Laptop */}

        <Box
          component="img"
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
          alt="Laptop"
          sx={{
            width: "260px",
            height: "190px",
            objectFit: "cover",
            borderRadius: "18px",
            position: "absolute",
            right: "20px",
            bottom: "60px",
            transform: "rotate(5deg)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            zIndex: 1,
          }}
        />

        {/* Smart Watch */}

        <Box
          component="img"
          src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400"
          alt="Smart Watch"
          sx={{
            width: "140px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "25px",
            position: "absolute",
            left: "20px",
            bottom: "55px",
            transform: "rotate(8deg)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            zIndex: 3,
          }}
        />
      </Box>
    </Box>
  );
}