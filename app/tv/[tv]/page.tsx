"use client";
import { useEffect, useState } from "react";
import ProductImage from "../../components/products/ProductImage";
import ProductDetails from "../../components/products/ProductDetails";

const TvDetailPage = () => {
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

  return (
    <section className="container mx-auto p-4">
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

export default TvDetailPage;
