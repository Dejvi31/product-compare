"use client";
import React, { useEffect, useState } from "react";

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
          <div className="w-1/2 pr-8">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-auto max-w-full max-h-96"
            />
          </div>
          <div className="w-1/2">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between">
                  <h1 className="text-3xl font-bold mb-2">
                    {selectedProduct.name}
                  </h1>
                  <p className="text-lg mb-2">{selectedProduct.category}</p>
                </div>
                <div className="flex items-start justify-between">
                  <div className="w-4/5">
                    <p className="text-sm mb-2">{selectedProduct.desc}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm mb-2 ">
                      In Stock: {selectedProduct.quantity}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <h2 className="text-xl font-bold mb-2">Specifications:</h2>
                  <ul>
                    {selectedProduct.specifications.map((spec, index) => (
                      <li key={index} className="text-base mb-1">
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <p className="text-lg mb-2">${selectedProduct.price}</p>
                <button className="bg-gray-800 ml-5 text-white px-4 py-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PhoneDetailPage;
