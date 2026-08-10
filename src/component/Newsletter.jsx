import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <Box
      sx={{
        mx: { xs: 2, md: 6 },
        my: 6,
        px: { xs: 3, md: 8 },
        py: 6,
        borderRadius: "24px",
        background:
          "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: { xs: "26px", md: "34px" },
          fontWeight: 800,
          mb: 1,
        }}
      >
        Stay Updated
      </Typography>

      <Typography
        sx={{
          color: "#bdbdbd",
          mb: 3,
        }}
      >
        Subscribe to get the latest products, offers and updates.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1.5,
          maxWidth: 550,
          mx: "auto",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <TextField
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          size="small"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",

            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />

        <Button
          variant="contained"
          onClick={handleSubscribe}
          sx={{
            backgroundColor: "#e53935",
            px: 3,
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 700,

            "&:hover": {
              backgroundColor: "#c62828",
            },
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}