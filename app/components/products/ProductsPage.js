"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Sorting from "../buttons/Sorting";
import Compare from "../buttons/Compare";
import Search from "../filters/Search";
import { useRouter } from "next/navigation";

const ProductPage = ({
  products,
  category,
  searchInput = true,
  sort = true,
}) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");

  const router = useRouter();

  useEffect(() => {
    // The selectedProducts are checked if they are in local storage
    const storedSelectedProducts = localStorage.getItem("selectedProducts");
    if (storedSelectedProducts) {
      setSelectedProducts(JSON.parse(storedSelectedProducts));
    }
  }, []);

  const handleSort = (type) => {
    if (type === sortBy) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(type);
      setSortOrder("asc");
    }
  };

  const handleProductSelect = (productId) => {
    const product = products.find((product) => product.id === productId);

    if (product) {
      // Save selectedProduct to Local Storage
      localStorage.setItem("selectedProduct", JSON.stringify(product));
    } else {
      console.error(`Product with id ${productId} not found.`);
    }
  };

  const handleProductsSelect = (productId) => {
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

  const handleProductRemove = (productIdToRemove) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.filter((productId) => productId !== productIdToRemove)
    );
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

  const handleClearList = () => {
    // Clear the selection in both state and localStorage
    setSelectedProducts([]);
    localStorage.removeItem("selectedProducts");
  };

  return (
    <div className="App">
      {searchInput == true && (
        <div className="mb-4">
          <Search
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search for any ${category} product...`}
          />
        </div>
      )}
      {sort == true && (
        <Sorting
          handleSort={handleSort}
          sortBy={sortBy}
          sortOrder={sortOrder}
        />
      )}

      <Compare
        handleCompare={handleCompare}
        selectedProducts={selectedProducts}
        products={products}
        handleClearList={handleClearList}
        handleProductRemove={handleProductRemove}
      />
      {filteredProducts.length > 0 ? (
        <ProductList
          sortedProducts={filteredProducts}
          handleProductsSelect={handleProductsSelect}
          selectedProducts={selectedProducts}
          handleProductSelect={handleProductSelect}
        />
      ) : (
        <div className="text-gray-500 mt-4">
          No Product Found With That Name
        </div>
      )}
    </div>
  );
};

export default ProductPage;
