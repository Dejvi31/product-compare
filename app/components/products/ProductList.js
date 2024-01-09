import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({
  sortedProducts,
  handleProductSelect,
  selectedProducts,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "1rem",
      }}
    >
      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={handleProductSelect}
          selected={selectedProducts.includes(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
