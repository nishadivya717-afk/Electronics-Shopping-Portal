import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fafafa",
        px: 2,
        mt: "76px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: 550,
          textAlign: "center",
          p: {
            xs: 4,
            md: 6,
          },
          borderRadius: "20px",
          boxShadow: "0 5px 25px rgba(0,0,0,0.08)",
        }}
      >
        <CheckCircleIcon
          sx={{
            fontSize: 90,
            color: "#2e7d32",
            mb: 2,
          }}
        />

        <Typography
          sx={{
            fontSize: {
              xs: "28px",
              md: "36px",
            },
            fontWeight: 800,
            mb: 1,
          }}
        >
          Order Placed Successfully!
        </Typography>

        <Typography
          sx={{
            color: "#777",
            fontSize: "16px",
            lineHeight: 1.7,
            mb: 4,
          }}
        >
          Thank you for your purchase.
          Your order has been placed successfully
          and will be delivered soon.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            component={Link}
            to="/orders"
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
            View My Orders
          </Button>

          <Button
            component={Link}
            to="/products"
            variant="outlined"
            sx={{
              borderColor: "#e53935",
              color: "#e53935",
              borderRadius: "25px",
              px: 4,
              py: 1.2,
              textTransform: "none",
              fontWeight: 700,

              "&:hover": {
                borderColor: "#c62828",
                color: "#c62828",
              },
            }}
          >
            Continue Shopping
          </Button>
        </Box>
      </Box>
    </Box>
  );
}