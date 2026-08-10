import { Box, Typography } from "@mui/material";

export default function Wishlist() {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 3,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            mb: 1,
          }}
        >
          Wishlist
        </Typography>

        <Typography sx={{ color: "#777" }}>
          Wishlist feature will be available soon.
        </Typography>
      </Box>
    </Box>
  );
}