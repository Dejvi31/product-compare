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
import { BatterySvg, DisplaySvg, PixelSvg, RamSvg } from "../components/svg";

const ComparePage = () => {
  const { selectedScrapedProducts, scrapedProducts } =
    useScrapedProductManagement();

  const selectedProductsDetails = selectedScrapedProducts.map((productId) => {
    const selectedProduct = scrapedProducts.find(
      (product) => product.id === productId
    );
    return selectedProduct;
  });
  return (
    <section>
      <h1>Compare Scraped Products</h1>

      <ProductCompared
        selectedProductsDetails={selectedProductsDetails}
        scrapedProducts={scrapedProducts}
      />
    </section>
  );
};

export default ComparePage;
