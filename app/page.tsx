"use client";
import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductCompared from "./components/ProductCompared";

const products = [
  {
    id: 1,
    name: "TV Samsung",
    quantity: 5,
    price: 1500,
    specifications: ["55 inch", "Hdmi", "Smart TV"],
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71RxCmvnrbL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    name: "TV LG",
    quantity: 22,
    price: 400,
    specifications: ["42 inch", "Hdmi", "Smart TV"],
    image:
      "https://www.lg.com/levant_en/images/tvs/md06140818/gallery/TV-FHD-32-32H-LM63-B-Gallery-1100-01.jpg",
  },
  {
    id: 3,
    name: "TV LG",
    quantity: 10,
    price: 155,
    specifications: ["32 inch", "Hdmi", "Smart TV"],
    image:
      "https://www.lg.com/levant_en/images/tvs/md06140818/gallery/TV-FHD-32-32H-LM63-B-Gallery-1100-01.jpg",
  },
  {
    id: 4,
    name: "TV Samsung",
    quantity: 15,
    price: 350,
    specifications: ["32 inch", "Hdmi", "Smart TV"],
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71RxCmvnrbL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    name: "TV Samsung",
    quantity: 5,
    price: 755,
    specifications: ["52 inch", "Hdmi", "Smart TV"],
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71RxCmvnrbL._AC_UF1000,1000_QL80_.jpg",
  },
];

const Home = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleProductSelect = (productId: number) => {
    setSelectedProducts((prev) => {
      const index = prev.indexOf(productId);
      if (index !== -1) {
        return prev.filter((id) => id !== productId);
      } else {
        const updatedSelectedProducts = [...prev, productId];
        return updatedSelectedProducts;
      }
    });
  };

  const handleCompare = () => {
    if (selectedProducts.length >= 2) {
      setShowPopup(true);
    } else {
      console.log("Please select at least 2 products to compare.");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <h1 className="text-3xl">Product Comparison</h1>
      <div style={{ display: "flex", gap: "3px" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={handleProductSelect}
            selected={selectedProducts.includes(product.id)}
          />
        ))}
      </div>
      {selectedProducts.length >= 2 && (
        <button onClick={handleCompare}>Compare</button>
      )}

      {showPopup && (
        <ProductCompared
          comparedProducts={selectedProducts}
          onClose={handleClosePopup}
          products={products}
        />
      )}
    </div>
  );
};

export default Home;
