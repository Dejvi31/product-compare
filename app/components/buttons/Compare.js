import React from "react";

const Compare = ({ handleCompare, selectedProducts }) => {
  return (
    (selectedProducts.length >= 2 && (
      <div className="flex items-center">
        <div className="mr-2">
          {selectedProducts.map((product, index) => (
            <span key={product.id}>
              {product.name}
              {index !== selectedProducts.length - 1 && ", "}
            </span>
          ))}
        </div>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l fixed bottom-4 right-4"
          onClick={handleCompare}
        >
          Compare
        </button>
      </div>
    )) || (
      <div className="fixed bottom-4 right-4 text-gray-500">
        Select at least 2 products to compare.
      </div>
    )
  );
};

export default Compare;
