import axios from "axios";

export const getProducts = async () => {
  const [laptops, smartphones, accessories] = await Promise.all([
    axios.get("https://dummyjson.com/products/category/laptops"),
    axios.get("https://dummyjson.com/products/category/smartphones"),
    axios.get("https://dummyjson.com/products/category/mobile-accessories"),
  ]);

  return [
    ...laptops.data.products,
    ...smartphones.data.products,
    ...accessories.data.products,
  ];
};