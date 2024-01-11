import React from "react";
import products from "../data/Products";
import ProductPage from "../components/products/ProductsPage";

const PhonePage = () => {
  const phoneProducts = products.filter(
    (product) => product.category === "phone"
  );

  return <ProductPage products={phoneProducts} category="Phone" />;
};

export default PhonePage;
