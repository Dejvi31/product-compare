import React from "react";
import ScrapedProductCard from "./ScrapedProductCard";

const ScrapedProductList = ({
  sortedScrapedProducts,
  handleScrapedProductsSelect,
  selectedScrapedProducts,
  handleScrapedProductSelect,
}) => {
  return (
    <section className="grid grid-cols-4 gap-1">
      {sortedScrapedProducts.map((scrapedProduct) => (
        <ScrapedProductCard
          key={scrapedProduct.id}
          scrapedProduct={scrapedProduct}
          onSelect={handleScrapedProductsSelect}
          selected={selectedScrapedProducts.includes(scrapedProduct.id)}
          onScrapedProductSelect={handleScrapedProductSelect}
        />
      ))}
    </section>
  );
};

export default ScrapedProductList;
