import { useState } from "react";
import { Box, Typography } from "@mui/material";

import Hero from "../component/Hero";
import ProductCard from "../component/ProductCard";
import SearchBar from "../component/SearchBar";
import CategoryFilter from "../component/CategoryFilter";
import LaptopSection from "../component/LaptopSection";
import WhyChooseUs from "../component/WhyChooseUs";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";

import productsData from "../data/Products";

function Home() {
  const [products] = useState(productsData);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Search + Category Filter
  const filteredProducts = products.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      {/* ================= HERO ================= */}

      <Hero />

      {/* ================= TRUSTED BRANDS ================= */}

      <Box
        sx={{
          py: 5,
          px: 3,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "13px",
            color: "#777",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Trusted by over 50K Customers Worldwide
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: {
              xs: 3,
              sm: 6,
              md: 9,
            },
            flexWrap: "wrap",
          }}
        >
          <Typography sx={{ fontWeight: 800 }}>
            SAMSUNG
          </Typography>

          <Typography
            sx={{
              fontWeight: 800,
              color: "#e53935",
            }}
          >
            ONEPLUS
          </Typography>

          <Typography sx={{ fontWeight: 800 }}>
            iPhone
          </Typography>

          <Typography
            sx={{
              fontWeight: 800,
              color: "#e53935",
            }}
          >
            vivo
          </Typography>

          <Typography
            sx={{
              fontWeight: 800,
              color: "#e53935",
            }}
          >
            HUAWEI
          </Typography>
        </Box>
      </Box>

      {/* ================= PRODUCTS ================= */}

      <Box
        sx={{
          px: {
            xs: 2,
            sm: 4,
            md: 6,
          },
          py: 5,
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
          }}
        >
          Our Latest Products
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#777",
            mt: 1,
            mb: 4,
          }}
        >
          Discover our latest and trending electronics
        </Typography>

        {/* Search + Category */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mb: 5,
            flexWrap: "wrap",
          }}
        >
          {/* Search */}

          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "350px",
              },
            }}
          >
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
          </Box>

          {/* Category */}

          <Box
            sx={{
              width: "180px",
            }}
          >
            <CategoryFilter
              category={category}
              setCategory={setCategory}
            />
          </Box>
        </Box>

        {/* Product Cards */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 3,
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))
          ) : (
            <Typography
              sx={{
                gridColumn: "1 / -1",
                textAlign: "center",
                color: "#777",
                py: 5,
              }}
            >
              No products found
            </Typography>
          )}
        </Box>
      </Box>

      {/* ================= LAPTOP SECTION ================= */}

      <LaptopSection />

      {/* WHY CHOOSE US */}

      <WhyChooseUs />

      <Newsletter />

      <Footer />


    </Box>
  );
}

export default Home;