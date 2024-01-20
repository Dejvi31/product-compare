"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import products from "./data/Products";
import Search from "./components/filters/Search";
import { useRouter } from "next/navigation";
import ProductList from "./components/products/ProductList";
import Compare from "./components/buttons/Compare";
import StartingPopup from "./components/popup/StartingPopup";

const HomePage = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [showPopup, setShowPopup] = useState(true);

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
    const product = products.find((product) => product.id === productId);

    if (product) {
      // Save selectedProduct to Local Storage
      localStorage.setItem("selectedProduct", JSON.stringify(product));
    } else {
      console.error(`Product with id ${productId} not found.`);
    }
  };

  const handleProductsSelect = (productId: number) => {
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
    (product) => product.category === "Phone"
  );
  const tvProducts = filteredProducts.filter(
    (product) => product.category === "TV"
  );

  const goToPhone = () => {
    router.push("/phone");
  };
  const goToTv = () => {
    router.push("/tv");
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      {showPopup && <StartingPopup closePopup={closePopup} />}
      <Search
        value={search}
        onChange={handleSearchChange}
        placeholder="Search for any product..."
      />
      {filteredProducts.length > 0 ? (
        <>
          <section className="mt-8 border">
            <section className="flex items-center ">
              <span
                className="underline cursor-pointer hover:text-gray-500"
                onClick={goToPhone}
              >
                Phone
              </span>
            </section>

            <ProductList
              sortedProducts={phoneProducts}
              handleProductsSelect={handleProductsSelect}
              selectedProducts={selectedProducts}
              handleProductSelect={handleProductSelect}
              limit="4"
            />
          </section>

          <section className="mt-8 border">
            <section className="flex items-center">
              <span
                className="underline cursor-pointer hover:text-gray-500"
                onClick={goToTv}
              >
                TV
              </span>
            </section>
            <ProductList
              sortedProducts={tvProducts}
              handleProductsSelect={handleProductsSelect}
              selectedProducts={selectedProducts}
              handleProductSelect={handleProductSelect}
              limit="4"
            />
          </section>
        </>
      ) : (
        <section className="text-gray-500 mt-4">
          No Product Found With That Name
        </section>
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
