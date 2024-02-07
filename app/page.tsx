"use client";
import React, { ChangeEvent, useState } from "react";
import Search from "./components/forms/Search";
import ScrapedProductList from "./components/scrapedProducts/ScrapedProductList";
import ScrapedCompare from "./components/scrapedProducts/ScrapedCompare";
import StartingPopup from "./components/popup/StartingPopup";
import useScrapedProductManagement from "./helpers/useScrapedProductManagement";

const HomePage = () => {
  const {
    selectedScrapedProducts,
    scrapedProducts: filteredProducts,
    handleScrapedProductSelect,
    handleScrapedProductsSelect,
    handleScrapedProductCompare,
    handleScrapedProductRemove,
    handleClearScrapedList,
    search,
    setSearch,
    isLoading,
  } = useScrapedProductManagement();

  const [showPopup, setShowPopup] = useState(true);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
      {isLoading ? (
        <section className="flex items-center justify-center">
          <span>Loading... ⏳</span>
        </section>
      ) : (
        <>
          {filteredProducts.length > 0 ? (
            <>
              <ScrapedProductList
                sortedScrapedProducts={filteredProducts}
                handleScrapedProductsSelect={handleScrapedProductsSelect}
                selectedScrapedProducts={selectedScrapedProducts}
                handleScrapedProductSelect={handleScrapedProductSelect}
              />
              <ScrapedCompare
                handleScrapedProductCompare={handleScrapedProductCompare}
                handleScrapedProductRemove={handleScrapedProductRemove}
                handleClearScrapedList={handleClearScrapedList}
                selectedScrapedProducts={selectedScrapedProducts}
                scrapedProducts={filteredProducts}
              />
            </>
          ) : (
            <section className="text-gray-500 mt-4">
              No Product Found With That Name
            </section>
          )}
        </>
      )}
    </>
  );
};

export default HomePage;
