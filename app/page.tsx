"use client";
import React, { useState } from "react";
import Products from "./data/Products";
import ProductCard from "./components/products/ProductCard";
import Sorting from "./components/buttons/Sorting";
import Compare from "./components/buttons/Compare";
import { useRouter } from "next/navigation";

const Home = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSort = (type: string) => {
    if (type === sortBy) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(type);
      setSortOrder("asc");
    }
  };

  const handleProductSelect = (productId: number) => {
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

      router.push("/compare");
    } else {
      console.log("Please select at least 2 products to compare.");
    }
  };

  const sortedProducts = [...Products].sort((a, b) => {
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
        <input
          type="text"
          placeholder="Search products ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Sorting handleSort={handleSort} sortBy={sortBy} sortOrder={sortOrder} />
      <Compare
        handleCompare={handleCompare}
        selectedProducts={selectedProducts}
        products={Products}
      />
      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={handleProductSelect}
            selected={selectedProducts.includes(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
