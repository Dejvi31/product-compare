import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({
  sortedProducts,
  handleProductsSelect,
  selectedProducts,
  handleProductSelect,
  limit = sortedProducts.length,
}) => {
  sortedProducts = sortedProducts.slice(0, limit);
  return (
    <section className="grid grid-cols-4 gap-1">
      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={handleProductsSelect}
          selected={selectedProducts.includes(product.id)}
          onProductSelect={handleProductSelect}
        />
      ))}
    </section>
  );
};

export default ProductList;
