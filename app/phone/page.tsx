import React from "react";
import products from "../data/Products";
import ProductPage from "../components/products/ProductsPage";
import Navigation from "../components/buttons/Navigation";

const PhonePage = () => {
  const phoneProducts = products.filter(
    (product) => product.category === "phone"
  );

  return (
    <>
      <Navigation categories={["Home", "Tv"]} />
      <ProductPage products={phoneProducts} category="Phone" />
    </>
  );
};

export default PhonePage;
