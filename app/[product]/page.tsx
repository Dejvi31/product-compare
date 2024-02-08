"use client";
import React, { useEffect, useState } from "react";
import useScrapedProductManagement from "../helpers/useScrapedProductManagement";
import ProductImage from "../components/products/ProductImage";
import ProductDetails from "../components/products/ProductDetails";
import { useBreadCrumbs } from "../helpers/useBreadCrumbs";
import Breadcrumbs from "../components/Breadcrumbs";
import RandomSuggest from "../components/RandomSuggest";
import { ScrapedProduct } from "../helpers/interfaces";

const page = () => {
  const {
    selectedProduct,
    isLoading,
    generateRandomProducts,
    handleRandomProductSelect,
  } = useScrapedProductManagement();
  const [randomProducts, setRandomProducts] = useState<ScrapedProduct[]>([]);

  const breadcrumbs = useBreadCrumbs(selectedProduct);

  useEffect(() => {
    if (!isLoading) {
      const randomProduct = generateRandomProducts(4);
      setRandomProducts(randomProduct);
    }
  }, [isLoading]);

  return (
    <section>
      {isLoading ? (
        <section className="flex items-center justify-center">
          <span>Loading... ⏳</span>
        </section>
      ) : (
        <>
          {selectedProduct ? (
            <>
              {selectedProduct ? (
                <>
                  <Breadcrumbs breadCrumbs={breadcrumbs} />
                  <section className="flex">
                    <ProductImage
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                    />
                    <ProductDetails {...selectedProduct} />
                  </section>
                  <section className="border-t-2 mt-2">
                    <h2>Random Suggestions</h2>
                    <RandomSuggest
                      randomProducts={randomProducts}
                      onRandomProductSelect={handleRandomProductSelect}
                    />
                  </section>
                </>
              ) : (
                <div>No selected product.</div>
              )}
            </>
          ) : (
            "No selected product."
          )}
        </>
      )}
    </section>
  );
};

export default page;
