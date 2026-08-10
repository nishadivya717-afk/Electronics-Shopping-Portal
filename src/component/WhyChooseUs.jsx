import {
  Box,
  Typography,
} from "@mui/material";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <LocalShippingOutlinedIcon />,
      title: "Fast Delivery",
      description:
        "Get your favorite electronics delivered quickly and safely.",
    },
    {
      icon: <SecurityOutlinedIcon />,
      title: "Secure Payment",
      description:
        "Your payments are protected with safe and secure checkout.",
    },
    {
      icon: <SupportAgentOutlinedIcon />,
      title: "24/7 Support",
      description:
        "Our support team is always ready to help you.",
    },
    {
      icon: <VerifiedOutlinedIcon />,
      title: "Quality Products",
      description:
        "Shop genuine and high-quality electronics with confidence.",
    },
  ];

  return (
    <Box
      sx={{
        px: {
          xs: 2,
          sm: 4,
          md: 6,
        },
        py: 7,
        backgroundColor: "#fafafa",
      }}
    >
      {/* Heading */}

      <Typography
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "28px",
            md: "36px",
          },
          fontWeight: 800,
          color: "#111",
          mb: 1,
        }}
      >
        Why Choose Us?
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "#777",
          mb: 5,
        }}
      >
        We make your shopping experience simple and reliable.
      </Typography>

      {/* Features */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {features.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "18px",
              p: 4,
              textAlign: "center",
              boxShadow:
                "0 5px 20px rgba(0,0,0,0.06)",
              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow:
                  "0 12px 30px rgba(0,0,0,0.12)",
              },
            }}
          >
            {/* Icon */}

            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "#fff0ed",
                color: "#e53935",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              {item.icon}
            </Box>

            {/* Title */}

            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                mb: 1,
              }}
            >
              {item.title}
            </Typography>

            {/* Description */}

            <Typography
              sx={{
                fontSize: "14px",
                color: "#777",
                lineHeight: 1.7,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}