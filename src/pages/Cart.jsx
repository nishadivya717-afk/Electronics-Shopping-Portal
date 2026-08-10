import {
  Box,
  Button,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  // ================= EMPTY CART =================

  if (cart.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          p: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 800,
            mb: 1,
          }}
        >
          Your Cart is Empty
        </Typography>

        <Typography
          sx={{
            color: "#777",
            mb: 3,
          }}
        >
          Add some products to your cart.
        </Typography>

        <Button
          component={Link}
          to="/products"
          variant="contained"
          sx={{
            backgroundColor: "#e53935",
            borderRadius: "25px",
            px: 4,
            textTransform: "none",

            "&:hover": {
              backgroundColor: "#c62828",
            },
          }}
        >
          Continue Shopping
        </Button>
      </Box>
    );
  }

  // ================= CART PAGE =================

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        px: {
          xs: 2,
          md: 6,
        },
        py: 5,
        mt: "76px",
      }}
    >
      {/* ================= TITLE ================= */}

      <Typography
        sx={{
          fontSize: {
            xs: "28px",
            md: "36px",
          },
          fontWeight: 800,
          mb: 4,
          textAlign: "center",
        }}
      >
        Shopping Cart
      </Typography>

      {/* ================= MAIN CONTENT ================= */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "2fr 1fr",
          },
          gap: 4,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* ================= CART ITEMS ================= */}

        <Box>
          {cart.map((item) => (
            <Box
              key={item.id}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                p: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
                boxShadow: "0 3px 15px rgba(0,0,0,0.08)",
              }}
            >
              {/* ================= IMAGE ================= */}

              <Box
                component="img"
                src={item.image || item.thumbnail}
                alt={item.title}
                sx={{
                  width: 110,
                  height: 110,
                  objectFit: "contain",
                }}
              />

              {/* ================= DETAILS ================= */}

              <Box
                sx={{
                  flex: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#e53935",
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  ₹ {Number(item.price).toLocaleString("en-IN")}
                </Typography>

                {/* ================= QUANTITY ================= */}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    sx={{
                      border: "1px solid #ddd",
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>

                  <Typography
                    sx={{
                      fontWeight: 700,
                      minWidth: 25,
                      textAlign: "center",
                    }}
                  >
                    {item.quantity}
                  </Typography>

                  <IconButton
                    size="small"
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                    sx={{
                      border: "1px solid #ddd",
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>

              {/* ================= REMOVE ================= */}

              <IconButton
                color="error"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Box>

        {/* ================= ORDER SUMMARY ================= */}

        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "16px",
            p: 3,
            height: "fit-content",
            boxShadow: "0 3px 15px rgba(0,0,0,0.08)",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 800,
              mb: 2,
            }}
          >
            Order Summary
          </Typography>

          <Divider sx={{ mb: 2 }} />

          {/* Subtotal */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography>
              Subtotal
            </Typography>

            <Typography fontWeight={700}>
              ₹ {Number(cartTotal).toLocaleString("en-IN")}
            </Typography>
          </Box>

          {/* Shipping */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography>
              Shipping
            </Typography>

            <Typography
              sx={{
                color: "green",
                fontWeight: 600,
              }}
            >
              FREE
            </Typography>
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* Total */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 800,
              }}
            >
              Total
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#e53935",
              }}
            >
              ₹ {Number(cartTotal).toLocaleString("en-IN")}
            </Typography>
          </Box>

          {/* ================= CHECKOUT BUTTON ================= */}

          <Button
            component={Link}
            to="/checkout"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#e53935",
              borderRadius: "25px",
              py: 1.3,
              textTransform: "none",
              fontWeight: 700,

              "&:hover": {
                backgroundColor: "#c62828",
              },
            }}
          >
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
}