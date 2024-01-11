import React from "react";

const Compare = ({ handleCompare, selectedProducts, products }) => {
  return (
    (selectedProducts.length >= 2 && (
      <div className="flex items-center">
        <div className="fixed bottom-7 right-4 text-gray-800">
          {selectedProducts.map((productId, index) => {
            const product = products.find((p) => p.id === productId);
            return (
              <span className="text-xs" key={productId}>
                {product?.name}
                {index !== selectedProducts.length - 1 && "⇆"}
              </span>
            );
          })}
        </div>
        <div className="fixed bottom-12 right-4 text-gray-800">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={handleCompare}
          >
            Compare
          </button>
        </div>
      </div>
    )) || (
      <div className="fixed bottom-4 right-4 text-gray-500">
        Select at least 2 products to compare.
      </div>
    )
  );
};

export default Compare;
