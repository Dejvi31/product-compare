"use client";
import React, { useEffect, useState } from "react";
import useScrapedProductManagement from "../helpers/useScrapedProductManagement";
import ProductImage from "../components/products/ProductImage";
import ProductDetails from "../components/products/ProductDetails";

const page = () => {
  const { isLoading } = useScrapedProductManagement();

  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    image: "",
    properties: [],
  });

  useEffect(() => {
    // Retrieve selected product from Local Storage
    const storedSelectedProduct = localStorage.getItem(
      "selectedScrapedProduct"
    );
    if (storedSelectedProduct) {
      setSelectedProduct(JSON.parse(storedSelectedProduct));
    }
  }, []);

  return (
    <section>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {selectedProduct ? (
            <>
              {selectedProduct ? (
                <section className="flex">
                  <ProductImage
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                  />
                  <ProductDetails {...selectedProduct} />
                </section>
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
