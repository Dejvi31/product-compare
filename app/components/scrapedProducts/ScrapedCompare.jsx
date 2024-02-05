import React from "react";
import ScrapedProductCard from "../scrapedProducts/ScrapedProductCard";
import useScrapedProductManagement from "../../helpers/useScrapedProductManagement";

const ScrapedCompare = () => {
  const {
    selectedProducts,
    handleScrapedProductCompare,
    handleClearScrapedList,
    handleScrapedProductSelect,
    handleScrapedProductRemove,
  } = useScrapedProductManagement();

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {selectedProducts.map((phone, index) => (
          <ScrapedProductCard
            key={index}
            name={phone.name}
            index={index}
            phoneData={{
              names: [phone.name],
              images: [phone.image],
              properties: [phone.properties],
            }}
            onSelect={handleScrapedProductSelect}
            onRemove={handleScrapedProductRemove}
          />
        ))}
      </div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={handleClearScrapedList}
      >
        Clear Selection
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={handleScrapedProductCompare}
      >
        Compare Selected Phones
      </button>
    </div>
  );
};

export default ScrapedCompare;
