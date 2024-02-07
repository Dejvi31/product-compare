// "use client";
// import React, { useEffect, useState } from "react";
// import ProductCompared from "./products/ProductCompared";
// import products from "../data/Products";

// const page = () => {
//   const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

//   useEffect(() => {
//     // Retrieve selectedProducts from Local Storage
//     const storedSelectedProducts = localStorage.getItem("selectedProducts");
//     if (storedSelectedProducts) {
//       setSelectedProducts(JSON.parse(storedSelectedProducts));
//     }
//   }, []);
//   return (
//     <>
//       <ProductCompared
//         comparedProducts={selectedProducts}
//         products={products}
//       />
//     </>
//   );
// };

// export default page;

"use client";
// pages/compare.js
import React from "react";
import ProductCompared from "./products/ProductCompared";
import useScrapedProductManagement from "../helpers/useScrapedProductManagement";

const ComparePage = () => {
  const { selectedScrapedProducts, scrapedProducts } =
    useScrapedProductManagement();

  return (
    <div>
      <h1>Compare Scraped Products</h1>
      <ProductCompared
        comparedProducts={selectedScrapedProducts}
        scrapedProducts={scrapedProducts}
      />
    </div>
  );
};

export default ComparePage;
