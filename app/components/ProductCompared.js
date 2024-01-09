import React, { useRef, useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

const ProductCompared = ({ comparedProducts, onClose, products }) => {
  const popupRef = useRef(null);
  Chart.register(...registerables);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Price Comparison",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [],
      },
      {
        label: "Quantity Comparison",
        backgroundColor: "rgba(192,75,192,0.4)",
        borderColor: "rgba(192,75,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(192,75,192,0.6)",
        hoverBorderColor: "rgba(192,75,192,1)",
        data: [],
      },
    ],
  });

  useEffect(() => {
    const prices = comparedProducts.map((productId) => {
      const product = products.find((p) => p.id === productId);
      return product ? product.price : 0;
    });

    const quantities = comparedProducts.map((productId) => {
      const product = products.find((p) => p.id === productId);
      return product ? product.quantity : 0;
    });

    setChartData((prevChartData) => ({
      ...prevChartData,
      labels: comparedProducts.map((productId) => {
        const product = products.find((p) => p.id === productId);
        return product ? product.name : "";
      }),
      datasets: [
        {
          ...prevChartData.datasets[0],
          data: prices,
        },
        {
          ...prevChartData.datasets[1],
          data: quantities,
        },
      ],
    }));
  }, [comparedProducts, products]);

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

  const options = {
    scales: {
      x: {
        type: "category",
        labels: chartData.labels,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="popup">
      <div className="popup-content" ref={popupRef}>
        <h2 className="text-2xl">Compared Products</h2>
        <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
          <thead className="bg-slate-50 dark:bg-slate-700">
            <tr>
              <th className="w-1/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                Name
              </th>
              <th className="w-1/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                Image
              </th>
              <th className="w-1/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                Quantity
              </th>
              <th className="w-1/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                Price
              </th>
              <th className="w-2/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                Specifications
              </th>
            </tr>
          </thead>
          <tbody>
            {comparedProducts.map((productId, index) => {
              const product = products.find((p) => p.id === productId);

              return (
                <tr key={index}>
                  <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    {product?.name}
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    <img
                      src={product?.image}
                      alt={`${product?.name} Image`}
                      style={{ width: "100%" }}
                    />
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    {product?.quantity}
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    ${product?.price}
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    {product?.specifications.join(", ")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Bar data={chartData} options={options} />
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
