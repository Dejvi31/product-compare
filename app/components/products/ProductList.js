import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({
  sortedProducts,
  handleProductSelect,
  selectedProducts,
}) => {
  return (
    <div className="grid grid-cols-6 gap-1">
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
