"use client";
import React, { useEffect, useState } from "react";
import ProductCompared from "./products/ProductCompared";
import products from "../components/data/Products";

const page = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  useEffect(() => {
    // Retrieve selectedProducts from Local Storage
    const storedSelectedProducts = localStorage.getItem("selectedProducts");
    if (storedSelectedProducts) {
      setSelectedProducts(JSON.parse(storedSelectedProducts));
    }
  }, []);
  return (
    <div>
      <ProductCompared
        comparedProducts={selectedProducts}
        products={products}
      />
    </div>
  );
};

export default page;
