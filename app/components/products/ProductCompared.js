import React, { useRef, useEffect } from "react";
import ChartComponent from "../filters/ChartComponent";
import PopupForm from "../forms/PopupForm";

const ProductCompared = ({ comparedProducts, products, onClose }) => {
  const popupRef = useRef(null);

  const chartLabels = comparedProducts.map((productId) => {
    const product = products.find((p) => p.id === productId);
    return product ? product.name : "";
  });

  const chartDatasets = [
    {
      label: "Price Comparison",
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(75,192,192,0.6)",
      hoverBorderColor: "rgba(75,192,192,1)",
      data: comparedProducts.map((productId) => {
        const product = products.find((p) => p.id === productId);
        return product ? product.price : 0;
      }),
    },
    {
      label: "Quantity Comparison",
      backgroundColor: "rgba(192,75,192,0.4)",
      borderColor: "rgba(192,75,192,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(192,75,192,0.6)",
      hoverBorderColor: "rgba(192,75,192,1)",
      data: comparedProducts.map((productId) => {
        const product = products.find((p) => p.id === productId);
        return product ? product.quantity : 0;
      }),
    },
  ];

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="popup">
      <div className="popup-content" ref={popupRef}>
        <h2 className="text-2xl">Compared Products</h2>
        <PopupForm comparedProducts={comparedProducts} products={products} />
        <ChartComponent labels={chartLabels} datasets={chartDatasets} />
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductCompared;
