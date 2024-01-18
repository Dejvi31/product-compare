"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import products from "./data/Products";
import Search from "./components/filters/Search";
import { useRouter } from "next/navigation";
import ProductList from "./components/products/ProductList";
import Compare from "./components/buttons/Compare";

const HomePage = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const router = useRouter();

  useEffect(() => {
    const storedSelectedProducts = localStorage.getItem("selectedProducts");
    if (storedSelectedProducts) {
      setSelectedProducts(JSON.parse(storedSelectedProducts));
    }
  }, []);
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

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
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(selectedProducts)
      );

      router.push("/compare");
    } else {
      console.log("Please select at least 2 products to compare.");
    }
  };

  const handleProductRemove = (productIdToRemove: number) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.filter((productId) => productId !== productIdToRemove)
    );
  };
  const handleClearList = () => {
    setSelectedProducts([]);
    localStorage.removeItem("selectedProducts");
  };
  const phoneProducts = filteredProducts.filter(
    (product) => product.category === "phone"
  );
  const tvProducts = filteredProducts.filter(
    (product) => product.category === "tv"
  );

  const goToPhone = () => {
    router.push("/phone");
  };
  const goToTv = () => {
    router.push("/tv");
  };

  return (
    <>
      <Search
        value={search}
        onChange={handleSearchChange}
        placeholder="Search for any product..."
      />
      {filteredProducts.length > 0 ? (
        <>
          <div className="flex justify-center items-center mt-1">
            <button
              onClick={goToPhone}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              Phone Products
            </button>

            <ProductList
              sortedProducts={phoneProducts}
              handleProductSelect={handleProductSelect}
              selectedProducts={selectedProducts}
            />
          </div>
          <div className="flex justify-center items-center mt-1">
            <button
              onClick={goToTv}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              TV Products
            </button>

            <ProductList
              sortedProducts={tvProducts}
              handleProductSelect={handleProductSelect}
              selectedProducts={selectedProducts}
            />
          </div>
        </>
      ) : (
        <div className="text-gray-500 mt-4">
          No Product Found With That Name
        </div>
      )}
      <Compare
        handleCompare={handleCompare}
        selectedProducts={selectedProducts}
        products={products}
        handleClearList={handleClearList}
        handleProductRemove={handleProductRemove}
      />
    </>
  );
};

export default HomePage;
