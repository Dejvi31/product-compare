"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import products from "./data/Products";
import Search from "./components/forms/Search";
import useProductManagement from "./helpers/useProductManagement";
import { useRouter } from "next/navigation";
import ProductList from "./components/products/ProductList";
import Compare from "./components/buttons/Compare";
import ScrapedProductList from "./components/scrapedProducts/ScrapedProductList";
import ScrapedCompare from "./components/scrapedProducts/ScrapedCompare";
import StartingPopup from "./components/popup/StartingPopup";
import useScrapedProductManagement from "./helpers/useScrapedProductManagement";

const HomePage = () => {
  const {
    selectedProducts,
    search,
    products: filteredProducts,
    setSearch,
    handleProductSelect,
    handleProductsSelect,
    handleCompare,
    handleProductRemove,
    handleClearList,
  } = useProductManagement({ initialProducts: products });
  const { phoneData, dataFetched } = useScrapedProductManagement();

  const [showPopup, setShowPopup] = useState(true);

  const router = useRouter();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const phoneProducts = filteredProducts.filter(
    (product) => product.category === "Phone"
  );
  const tvProducts = filteredProducts.filter(
    (product) => product.category === "TV"
  );

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* {showPopup && <StartingPopup closePopup={closePopup} />} */}
      <Search
        value={search}
        onChange={handleSearchChange}
        placeholder="Search for any product..."
      />
      <ScrapedProductList dataFetched={dataFetched} phoneData={phoneData} />

      {filteredProducts.length > 0 ? (
        <>
          <section className="mt-8 w-full border-b border-gray-800">
            <section className="flex items-center ">
              <span
                className="underline cursor-pointer hover:text-gray-500"
                onClick={() => router.push("phone")}
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

          <section className="mt-8 w-full border-t border-gray-800">
            <section className="flex items-center">
              <span
                className="underline cursor-pointer hover:text-gray-500"
                onClick={() => router.push("/tv")}
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
      <ScrapedCompare />
      {/* <Compare
        handleCompare={handleCompare}
        selectedProducts={selectedProducts}
        products={products}
        handleClearList={handleClearList}
        handleProductRemove={handleProductRemove}
      /> */}
    </>
  );
};

export default HomePage;
