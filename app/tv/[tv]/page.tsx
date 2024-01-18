"use client";
import React, { useEffect, useState } from "react";

const TvDetailPage = () => {
  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    category: "",
    price: 0,
    quantity: 0,
    specifications: [],
    image: "",
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
          <div className="w-1/2 pr-8">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-auto max-w-full max-h-96"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl font-bold mb-2">{selectedProduct.name}</h1>
            <p className="text-lg mb-2">Category: {selectedProduct.category}</p>
            <p className="text-lg mb-2">Quantity: {selectedProduct.quantity}</p>
            <p className="text-lg mb-2">Price: ${selectedProduct.price}</p>
            <h2 className="text-xl font-bold mb-2">Specifications:</h2>
            <ul className="list-disc pl-4">
              {selectedProduct.specifications.map((spec, index) => (
                <li key={index} className="text-base mb-1">
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TvDetailPage;
