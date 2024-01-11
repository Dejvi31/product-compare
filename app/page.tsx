"use client";
import React from "react";
import products from "./data/Products";
import ProductPage from "./components/products/ProductsPage";

const HomePage = () => {
  return <ProductPage products={products} category="product" />;
};

export default HomePage;
