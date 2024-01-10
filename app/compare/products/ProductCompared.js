import React from "react";
import ChartComponent from "./ChartComponent";
import TableHeader from "./tables/TableHeader";
import TableBody from "./tables/TableBody";

const ProductCompared = ({ comparedProducts, products }) => {
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

  return (
    <div>
      <div>
        <h2 className="text-2xl">Compared Products</h2>
        <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
          <TableHeader />
          <TableBody comparedProducts={comparedProducts} products={products} />
        </table>

        <ChartComponent labels={chartLabels} datasets={chartDatasets} />
      </div>
    </div>
  );
};

export default ProductCompared;
