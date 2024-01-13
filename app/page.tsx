"use client";
import React from "react";
import products from "./data/Products";
import ProductPage from "./components/products/ProductsPage";
import Navigation from "./components/buttons/Navigation";

const HomePage = () => {
  return (
    <>
      <Navigation categories={["Phone", "Tv"]} />

      <ProductPage products={products} category="" />
    </>
  );
};

export default HomePage;
