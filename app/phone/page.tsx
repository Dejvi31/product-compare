import React from "react";
import products from "../data/Products";
import ProductPage from "../components/products/ProductsPage";
import { useBreadCrumbs } from "../helpers/useBreadCrumbs";
import Breadcrumbs from "../components/Breadcrumbs";

const PhonePage = () => {
  const phoneProducts = products.filter(
    (product) => product.category === "Phone"
  );

  const breadCrumbs = useBreadCrumbs({ category: "Phone" });

  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />

      <ProductPage products={phoneProducts} category="Phone" />
    </>
  );
};

export default PhonePage;
