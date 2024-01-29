"use client";
import React, { useState } from "react";
import products from "../data/Products";
import ProductPage from "../components/products/ProductsPage";
import { useBreadCrumbs } from "../helpers/useBreadCrumbs";
import Breadcrumbs from "../components/Breadcrumbs";

const PhonePage = () => {
  const phoneProducts = products.filter(
    (product) => product.category === "Phone"
  );

  const breadCrumbs = useBreadCrumbs({ category: "Phone" });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentPhoneProducts = phoneProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log("Current Page:", pageNumber);
  };

  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <ProductPage
        products={currentPhoneProducts}
        category="Phone"
        paginate={paginate}
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={phoneProducts.length}
      />
    </>
  );
};

export default PhonePage;
