import React from "react";

const Sorting = ({ handleSort, sortBy, sortOrder }) => {
  return (
    <section className="flex justify-end py-1">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        onClick={() => handleSort("price")}
      >
        Sort by Price {sortBy === "price" && sortOrder === "asc" ? "↑" : "↓"}
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={() => handleSort("quantity")}
      >
        Sort by Quantity{" "}
        {sortBy === "quantity" && sortOrder === "asc" ? "↑" : "↓"}
      </button>
    </section>
  );
};

export default Sorting;
