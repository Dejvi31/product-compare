"use client";
import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductCompared from "./components/ProductCompared";

const products = [
  {
    id: 1,
    name: "TV Samsung",
    quantity: 58,
    price: 1500,
    specifications: ["55 inch", "Hdmi", "Smart TV"],
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71RxCmvnrbL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    name: "TV LG",
    quantity: 79,
    price: 400,
    specifications: ["42 inch", "Hdmi", "Smart TV"],
    image:
      "https://www.lg.com/levant_en/images/tvs/md06140818/gallery/TV-FHD-32-32H-LM63-B-Gallery-1100-01.jpg",
  },
  {
    id: 3,
    name: "TV LG",
    quantity: 100,
    price: 155,
    specifications: ["32 inch", "Hdmi", "Smart TV"],
    image:
      "https://www.lg.com/levant_en/images/tvs/md06140818/gallery/TV-FHD-32-32H-LM63-B-Gallery-1100-01.jpg",
  },
  {
    id: 4,
    name: "TV Samsung",
    quantity: 95,
    price: 350,
    specifications: ["32 inch", "Hdmi", "Smart TV"],
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71RxCmvnrbL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    name: "TV Samsung",
    quantity: 85,
    price: 755,
    specifications: ["52 inch", "Hdmi", "Smart TV"],
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71RxCmvnrbL._AC_UF1000,1000_QL80_.jpg",
  },
];

const Home = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (type: string) => {
    if (type === sortBy) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(type);
      setSortOrder("asc");
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    } else if (sortBy === "quantity") {
      return sortOrder === "asc"
        ? a.quantity - b.quantity
        : b.quantity - a.quantity;
    }
    return 0;
  });

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

  const handleCompare = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (selectedProducts.length >= 2) {
      setShowPopup(true);
      event.stopPropagation();
    } else {
      console.log("Please select at least 2 products to compare.");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <div className="flex justify-end py-1">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={() => handleSort("price")}
        >
          Sort by Price {sortBy === "price" && sortOrder === "asc" ? "↑" : "↓"}
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={() => handleSort("quantity")}
        >
          Sort by Quantity{" "}
          {sortBy === "quantity" && sortOrder === "asc" ? "↑" : "↓"}
        </button>
      </div>
      {selectedProducts.length >= 2 && (
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={handleCompare}
        >
          Compare
        </button>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
        }}
      >
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={handleProductSelect}
            selected={selectedProducts.includes(product.id)}
          />
        ))}
      </div>
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
