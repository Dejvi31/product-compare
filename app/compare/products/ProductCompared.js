import React from "react";
import ChartComponent from "./ChartComponent";
import TableHeader from "./tables/TableHeader";
import TableBody from "./tables/TableBody";
import Link from "next/link";

const ProductCompared = ({ comparedProducts, products }) => {
  const getMaxValue = (property, comparedProducts, products) => {
    return Math.max(
      ...comparedProducts.map((productId) => {
        const product = products.find((p) => p.id === productId);
        return product && typeof product.specifications[property] === "number"
          ? product.specifications[property]
          : 0;
      })
    );
  };

  const maxBattery = getMaxValue("battery", comparedProducts, products);
  const maxPrice = Math.max(
    ...comparedProducts.map((productId) => {
      const product = products.find((p) => p.id === productId);
      return product ? product.price : 0;
    })
  );
  const maxStorage = getMaxValue("storage", comparedProducts, products);
  const maxDisplay = getMaxValue("display", comparedProducts, products);
  const maxRam = getMaxValue("ram", comparedProducts, products);

  const data = {
    labels: ["Price", "Battery", "Storage", "Display", "RAM"],
    datasets: comparedProducts.map((productId) => {
      const product = products.find((p) => p.id === productId);
      const color = `rgba(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      },0.2)`;

      const specificationsData = [
        product.price,
        product.specifications.battery,
        product.specifications.storage,
        product.specifications.display,
        product.specifications.ram,
      ];

      const scaledData = specificationsData.map(
        (value, index) =>
          (value /
            [maxPrice, maxBattery, maxStorage, maxDisplay, maxRam][index]) *
          100
      );

      return {
        label: product ? product.name : "",
        data: scaledData,
        fill: true,
        backgroundColor: color,
        borderColor: color,
        pointBackgroundColor: color,
        pointBorderColor: color,
        pointHoverBackgroundColor: color,
        pointHoverBorderColor: color,
      };
    }),
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        suggestedMin: 50,
        suggestedMax: 100,
      },
    },
  };

  return (
    <section>
      <Link className="text-gray-500 hover:underline" href="/">
        Go back
      </Link>
      <h2 className="text-2xl text-center">Compared Products</h2>
      <section className="flex">
        <section className="w-2/3">
          <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
            <TableHeader />
            <TableBody
              comparedProducts={comparedProducts}
              products={products}
            />
          </table>
        </section>
        <section className="w-1/3">
          <ChartComponent data={data} options={options} />
        </section>
      </section>
    </section>
  );
};

export default ProductCompared;
