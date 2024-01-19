"use client";
import { useEffect, useState } from "react";
import ProductImage from "../../components/products/ProductImage";
import ProductDetails from "../../components/products/ProductDetails";

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

  return (
    <div className="container mx-auto p-4">
      {selectedProduct ? (
        <div className="flex">
          <ProductImage
            src={selectedProduct.image}
            alt={selectedProduct.name}
          />
          <ProductDetails {...selectedProduct} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PhoneDetailPage;
