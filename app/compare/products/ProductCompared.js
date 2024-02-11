import React from "react";
import ChartComponent from "./ChartComponent";
import ProductComparedDetails from "./ProductComparedDetails";
import Link from "next/link";

const ProductCompared = ({ selectedProductsDetails, scrapedProducts }) => {
  const getMaxValue = (property, selectedProductsDetails, scrapedProducts) => {
    return Math.max(
      ...selectedProductsDetails.map((product) => {
        const productDetails = scrapedProducts.find((p) => p.id === product.id);
        return productDetails &&
          typeof productDetails.properties[property] === "string"
          ? parseInt(productDetails.properties[property])
          : 0;
      })
    );
  };

  const maxBattery = getMaxValue(
    "Battery",
    selectedProductsDetails,
    scrapedProducts
  );
  const maxPixel = getMaxValue(
    "Pixel",
    selectedProductsDetails,
    scrapedProducts
  );
  const maxDisplay = getMaxValue(
    "Display",
    selectedProductsDetails,
    scrapedProducts
  );
  const maxRam = getMaxValue("RAM", selectedProductsDetails, scrapedProducts);

  const data = {
    labels: ["Battery (mAh)", "Pixel (ppi)", "Display (inch)", "RAM (GB)"],
    datasets: selectedProductsDetails.map((product) => {
      const productDetails = scrapedProducts.find((p) => p.id === product.id);
      const color = `rgba(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      },0.2)`;

      const specificationsData = [
        parseInt(productDetails?.properties?.Battery) || 0,
        parseInt(productDetails?.properties?.Pixel) || 0,
        parseFloat(productDetails?.properties?.Display) || 0,
        parseInt(productDetails?.properties?.RAM) || 0,
      ];

      const scaledData = specificationsData.map((value, index) =>
        Math.min(
          (value / [maxBattery, maxPixel, maxDisplay, maxRam][index]) * 100,
          100
        )
      );

      return {
        label: productDetails ? productDetails.name : "",
        data: scaledData,
        originalData: specificationsData,
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
        // suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const originalValue =
              context.dataset.originalData[context.dataIndex];
            return `${context.label}: ${originalValue}`;
          },
          title: (tooltipItems) => {
            const item = tooltipItems[0];
            return `${item.dataset.label}`;
          },
        },
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        bodyFont: {
          size: 12,
        },
        bodySpacing: 2,
        padding: 10,
        cornerRadius: 25,
      },
    },
  };

  return (
    <section>
      <Link className="text-gray-500 hover:underline" href="/">
        Go back
      </Link>
      <section className="flex">
        <section className="w-2/3">
          <ProductComparedDetails
            selectedProductsDetails={selectedProductsDetails}
          />
        </section>
        <section className="w-1/3">
          <ChartComponent data={data} options={options} />
        </section>
      </section>
    </section>
  );
};

export default ProductCompared;
