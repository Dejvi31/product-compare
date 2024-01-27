"use client";
import { useEffect, useState } from "react";
import ProductImage from "../../components/products/ProductImage";
import ProductDetails from "../../components/products/ProductDetails";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useBreadCrumbs } from "../../helpers/useBreadCrumbs";

const PhoneDetailPage = () => {
  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    category: "",
    price: 0,
    quantity: 0,
    specifications: [],
    image: "",
    desc: "",
  });

  useEffect(() => {
    // Retrieve selected product from Local Storage
    const storedSelectedProduct = localStorage.getItem("selectedProduct");
    if (storedSelectedProduct) {
      setSelectedProduct(JSON.parse(storedSelectedProduct));
    }
  }, []);

  const breadCrumbs = useBreadCrumbs(selectedProduct);

  return (
    <section className="container mx-auto p-4">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      {selectedProduct ? (
        <section className="flex">
          <ProductImage
            src={selectedProduct.image}
            alt={selectedProduct.name}
          />
          <ProductDetails {...selectedProduct} />
        </section>
      ) : (
        <section>Loading...</section>
      )}
    </section>
  );
};

export default PhoneDetailPage;
