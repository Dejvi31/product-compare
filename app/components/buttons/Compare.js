import React from "react";

const Compare = ({ handleCompare, selectedProducts }) => {
  return (
    selectedProducts.length >= 2 && (
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l fixed bottom-4 right-4"
        onClick={handleCompare}
      >
        Compare
      </button>
    )
  );
};

export default Compare;
