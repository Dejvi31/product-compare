import React from "react";
import products from "../data/Products";
import ProductPage from "../components/products/ProductsPage";
import Navigation from "../components/buttons/Navigation";

const TVPage = () => {
  const tvProducts = products.filter((product) => product.category === "tv");

  return (
    <>
      <Navigation categories={["Home", "Phone"]} />
      <ProductPage products={tvProducts} category="TV" />;
    </>
  );
};

export default TVPage;
