"use client";
import React from "react";
import useScrapedProductManagement from "../helpers/useScrapedProductManagement";
import ProductImage from "../components/products/ProductImage";
import ProductDetails from "../components/products/ProductDetails";
import { useBreadCrumbs } from "../helpers/useBreadCrumbs";
import Breadcrumbs from "../components/Breadcrumbs";

const page = () => {
  const { selectedProduct, isLoading } = useScrapedProductManagement();

  const breadcrumbs = useBreadCrumbs(selectedProduct);
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
