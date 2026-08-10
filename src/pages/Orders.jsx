import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
} from "@mui/material";

export default function Orders() {
  const orders = JSON.parse(
    localStorage.getItem("orders") || "[]"
  );

  if (orders.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          p: 3,
          mt: "76px",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: 800,
            mb: 1,
          }}
        >
          No Orders Yet
        </Typography>

        <Typography sx={{ color: "#777" }}>
          Your placed orders will appear here.
        </Typography>
      </Box>
    );
  }

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
        My Orders
      </Typography>

      <Box
        sx={{
          maxWidth: 1000,
          mx: "auto",
        }}
      >
        {orders.map((order) => (
          <Card
            key={order.id}
            sx={{
              mb: 3,
              borderRadius: "16px",
              boxShadow:
                "0 3px 15px rgba(0,0,0,0.08)",
            }}
          >
            <CardContent>
              {/* Order Header */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 800,
                    }}
                  >
                    Order ID: #{order.id}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: "14px",
                      mt: 0.5,
                    }}
                  >
                    {order.date}
                  </Typography>
                </Box>

                <Chip
                  label={order.status || "Placed"}
                  color="success"
                />
              </Box>

              <Divider sx={{ mb: 2 }} />

              {/* Products */}

              {order.items?.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={
                      item.image ||
                      item.thumbnail
                    }
                    alt={item.title}
                    sx={{
                      width: 70,
                      height: 70,
                      objectFit: "contain",
                    }}
                  />

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#777",
                        fontSize: "14px",
                      }}
                    >
                      Quantity: {item.quantity}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#e53935",
                    }}
                  >
                    ₹{" "}
                    {(
                      item.price *
                      item.quantity
                    ).toLocaleString("en-IN")}
                  </Typography>
                </Box>
              ))}

              <Divider sx={{ my: 2 }} />

              {/* Total */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "18px",
                  }}
                >
                  Total
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "18px",
                    color: "#e53935",
                  }}
                >
                  ₹{" "}
                  {Number(
                    order.total || 0
                  ).toLocaleString("en-IN")}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#777",
                  mt: 1,
                  fontSize: "14px",
                }}
              >
                Payment:{" "}
                {order.payment || "Cash on Delivery"}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}