import { useState } from "react";

import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Divider,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    cartTotal,
    clearCart,
  } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= PLACE ORDER =================

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Create new order
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-IN"),

      items: cart,

      total: cartTotal,

      payment: formData.payment,

      status: "Order Placed",

      customer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        pincode: formData.pincode,
      },
    };

    // Get existing orders
    const existingOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    // Save new order
    localStorage.setItem(
      "orders",
      JSON.stringify([
        newOrder,
        ...existingOrders,
      ])
    );

    // Clear cart after successful order
    clearCart();

    alert("Order placed successfully!");

    // Go to success page
    navigate("/order-success");
  };

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
          mt: "76px",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: 800,
            mb: 2,
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
          Add some products to your cart before checkout.
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

  // ================= CHECKOUT PAGE =================

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        px: {
          xs: 2,
          md: 6,
        },
        py: 6,
        mt: "76px",
      }}
    >
      {/* ================= TITLE ================= */}

      <Typography
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "28px",
            md: "36px",
          },
          fontWeight: 800,
          mb: 5,
        }}
      >
        Checkout
      </Typography>

      {/* ================= FORM ================= */}

      <Box
        component="form"
        onSubmit={handlePlaceOrder}
        sx={{
          maxWidth: 1100,
          mx: "auto",

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "2fr 1fr",
          },

          gap: 4,
        }}
      >
        {/* ================= CUSTOMER DETAILS ================= */}

        <Box
          sx={{
            backgroundColor: "#fff",

            p: {
              xs: 2,
              md: 4,
            },

            borderRadius: "18px",

            boxShadow:
              "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 800,
              mb: 3,
            }}
          >
            Delivery Information
          </Typography>

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },

              gap: 2,
            }}
          >
            {/* Name */}

            <TextField
              required
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />

            {/* Email */}

            <TextField
              required
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />

            {/* Phone */}

            <TextField
              required
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
            />

            {/* City */}

            <TextField
              required
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              fullWidth
            />

            {/* Pincode */}

            <TextField
              required
              label="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              fullWidth
            />

            {/* Address */}

            <TextField
              required
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              sx={{
                gridColumn: {
                  xs: "auto",
                  sm: "1 / -1",
                },
              }}
            />
          </Box>

          {/* ================= PAYMENT ================= */}

          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 800,
              mt: 4,
              mb: 2,
            }}
          >
            Payment Method
          </Typography>

          <FormControl>
            <RadioGroup
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <FormControlLabel
                value="cod"
                control={<Radio />}
                label="Cash on Delivery"
              />

              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Credit / Debit Card"
              />

              <FormControlLabel
                value="upi"
                control={<Radio />}
                label="UPI Payment"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        {/* ================= ORDER SUMMARY ================= */}

        <Box
          sx={{
            backgroundColor: "#fff",
            p: 3,
            borderRadius: "18px",
            height: "fit-content",

            boxShadow:
              "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 800,
              mb: 3,
            }}
          >
            Order Summary
          </Typography>

          {/* Products */}

          {cart.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  flex: 1,
                }}
              >
                {item.title} × {item.quantity}
              </Typography>

              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                ₹{" "}
                {(
                  item.price * item.quantity
                ).toLocaleString("en-IN")}
              </Typography>
            </Box>
          ))}

          <Divider sx={{ my: 2 }} />

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
              ₹{" "}
              {cartTotal.toLocaleString("en-IN")}
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
                fontWeight: 700,
              }}
            >
              FREE
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

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
              ₹{" "}
              {cartTotal.toLocaleString("en-IN")}
            </Typography>
          </Box>

          {/* ================= PLACE ORDER ================= */}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#e53935",
              borderRadius: "25px",
              py: 1.4,
              textTransform: "none",
              fontWeight: 700,

              "&:hover": {
                backgroundColor: "#c62828",
              },
            }}
          >
            Place Order
          </Button>
        </Box>
      </Box>
    </Box>
  );
}