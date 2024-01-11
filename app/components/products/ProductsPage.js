"use client";
import React, { useState } from "react";
import ProductList from "./ProductList";
import Sorting from "../buttons/Sorting";
import Compare from "../buttons/Compare";
import Search from "../filters/Search";
import { useRouter } from "next/navigation";

const ProductPage = ({ products, category }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSort = (type) => {
    if (type === sortBy) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(type);
      setSortOrder("asc");
    }
  };

  const handleProductSelect = (productId) => {
    setSelectedProducts((prev) => {
      const index = prev.indexOf(productId);
      if (index !== -1) {
        return prev.filter((id) => id !== productId);
      } else {
        const updatedSelectedProducts = [...prev, productId];
        return updatedSelectedProducts;
      }
    });
  };

  const handleCompare = () => {
    if (selectedProducts.length >= 2) {
      // Save selectedProducts to Local Storage
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(selectedProducts)
      );
      // Redirect to the compare page
      // You can customize the route based on your application structure
      router.push("/compare");
    } else {
      console.log("Please select at least 2 products to compare.");
    }
  };

  const sortedProducts = products.sort((a, b) => {
    if (sortBy === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    } else if (sortBy === "quantity") {
      return sortOrder === "asc"
        ? a.quantity - b.quantity
        : b.quantity - a.quantity;
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <div className="mb-4">
        <Search
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search for any ${category} product...`}
        />
      </div>
      <Sorting handleSort={handleSort} sortBy={sortBy} sortOrder={sortOrder} />
      <Compare
        handleCompare={handleCompare}
        selectedProducts={selectedProducts}
        products={products}
      />
      <ProductList
        sortedProducts={filteredProducts}
        handleProductSelect={handleProductSelect}
        selectedProducts={selectedProducts}
      />
    </div>
  );
};

export default ProductPage;
