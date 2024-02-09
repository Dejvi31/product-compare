"use client";
import React, { useState } from "react";
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

    isLoading,
  } = useScrapedProductManagement();

  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* {showPopup && <StartingPopup closePopup={closePopup} />} */}

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
