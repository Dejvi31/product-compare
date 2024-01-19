import React from "react";
import products from "../data/Products";
import ProductPage from "../components/products/ProductsPage";

const TVPage = () => {
  const tvProducts = products.filter((product) => product.category === "TV");

  return <ProductPage products={tvProducts} category="TV" />;
};

export default TVPage;
