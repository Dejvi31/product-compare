import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({
  sortedProducts,
  handleProductsSelect,
  selectedProducts,
  handleProductSelect,
}) => {
  return (
    <div className="grid grid-cols-5 gap-1">
      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={handleProductsSelect}
          selected={selectedProducts.includes(product.id)}
          onProductSelect={handleProductSelect}
        />
      ))}
    </div>
  );
};

export default ProductList;
