"use client";
import React from "react";
import products from "./data/Products";
import ProductPage from "./components/products/ProductsPage";
import Navigation from "./components/buttons/Navigation";

const HomePage = () => {
  const phoneProducts = products.filter(
    (product) => product.category === "phone"
  );
  const tvProducts = products.filter((product) => product.category === "tv");
  return (
    <>
      <Navigation categories={["Phone", "Tv"]} />

      <div>
        <h2>Phone Products</h2>
        <ProductPage
          products={phoneProducts}
          category="Phone"
          searchInput={false}
          sort={false}
        />
      </div>

      <div>
        <h2>TV Products</h2>
        <ProductPage
          products={tvProducts}
          category="TV"
          searchInput={false}
          sort={false}
        />
      </div>
    </>
  );
};

export default HomePage;
