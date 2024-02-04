import React from "react";
import ScrapedProductCard from "./ScrapedProductCard";

const ScrapedProductList = ({ dataFetched, phoneData }) => {
  return (
    <section className="grid grid-cols-4 gap-2">
      {dataFetched ? (
        phoneData.names.map((name, index) => (
          <ScrapedProductCard
            key={index}
            name={name}
            index={index}
            phoneData={phoneData}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-4">
          Loading phone data...
        </p>
      )}
    </section>
  );
};

export default ScrapedProductList;
