import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import ProductCard from "../component/ProductCard";
import SearchBar from "../component/SearchBar";
import CategoryFilter from "../component/CategoryFilter";

import productsData from "../data/Products";

import { useSearchParams } from "react-router-dom";

export default function Products() {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );

  useEffect(() => {
    setSearch(searchParams.get("search") || "");

    setCategory(
      searchParams.get("category") || "All"
    );
  }, [searchParams]);

  const filteredProducts = productsData.filter((item) => {
    const searchText = search.toLowerCase().trim();

    const matchSearch =
      item.title?.toLowerCase().includes(searchText) ||
      item.category?.toLowerCase().includes(searchText) ||
      item.brand?.toLowerCase().includes(searchText);

    const matchCategory =
      category === "All" ||
      item.category?.toLowerCase() === category.toLowerCase();

    return matchSearch && matchCategory;
  });

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        px: {
          xs: 2,
          sm: 4,
          md: 6,
        },
        py: 6,
        mt: "76px",
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
        All Products
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "#777",
          mt: 1,
          mb: 4,
        }}
      >
        Explore our latest electronics
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

        <Box sx={{ width: "180px" }}>
          <CategoryFilter
            category={category}
            setCategory={setCategory}
          />
        </Box>
      </Box>

      {/* Products */}

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
  );
}