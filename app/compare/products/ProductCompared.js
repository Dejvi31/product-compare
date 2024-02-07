// import React from "react";
// import ChartComponent from "./ChartComponent";
// import ProductComparedDetails from "./ProductComparedDetails";
// import Link from "next/link";
// import ComparedTable from "./ComparedTable";

// const ProductCompared = ({ comparedProducts, products }) => {
//   const getMaxValue = (property, comparedProducts, products) => {
//     return Math.max(
//       ...comparedProducts.map((productId) => {
//         const product = products.find((p) => p.id === productId);
//         return product && typeof product.specifications[property] === "number"
//           ? product.specifications[property]
//           : 0;
//       })
//     );
//   };

//   const maxBattery = getMaxValue("battery", comparedProducts, products);
//   const maxPrice = Math.max(
//     ...comparedProducts.map((productId) => {
//       const product = products.find((p) => p.id === productId);
//       return product ? product.price : 0;
//     })
//   );
//   const maxStorage = getMaxValue("storage", comparedProducts, products);
//   const maxDisplay = getMaxValue("display", comparedProducts, products);
//   const maxRam = getMaxValue("ram", comparedProducts, products);

//   const data = {
//     labels: [
//       "Price",
//       "Battery (mAh)",
//       "Storage (GB)",
//       "Display (inch)",
//       "RAM (GB)",
//     ],
//     datasets: comparedProducts.map((productId) => {
//       const product = products.find((p) => p.id === productId);
//       const color = `rgba(${Math.random() * 255},${Math.random() * 255},${
//         Math.random() * 255
//       },0.2)`;

//       const specificationsData = [
//         product.price,
//         product.specifications.battery,
//         product.specifications.storage,
//         product.specifications.display,
//         product.specifications.ram,
//       ];

//       const scaledData = specificationsData.map(
//         (value, index) =>
//           (value /
//             [maxPrice, maxBattery, maxStorage, maxDisplay, maxRam][index]) *
//           100
//       );

//       return {
//         label: product ? product.name : "",
//         data: scaledData,
//         originalData: specificationsData,
//         fill: true,
//         backgroundColor: color,
//         borderColor: color,
//         pointBackgroundColor: color,
//         pointBorderColor: color,
//         pointHoverBackgroundColor: color,
//         pointHoverBorderColor: color,
//       };
//     }),
//   };

//   const options = {
//     scales: {
//       r: {
//         beginAtZero: true,
//         suggestedMin: 0,
//         suggestedMax: 100,
//       },
//     },
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             const originalValue =
//               context.dataset.originalData[context.dataIndex];
//             return `${context.label}: ${originalValue}`;
//           },
//           title: (tooltipItems) => {
//             const item = tooltipItems[0];
//             return `${item.dataset.label}`;
//           },
//         },
//         backgroundColor: "rgba(0, 0, 0, 0.7)",
//         bodyFont: {
//           size: 12,
//         },
//         bodySpacing: 2,
//         padding: 10,
//         cornerRadius: 25,
//       },
//     },
//   };

//   return (
//     <section>
//       <Link className="text-gray-500 hover:underline" href="/">
//         Go back
//       </Link>
//       <section className="flex">
//         <section className="w-2/3">
//           <ProductComparedDetails
//             comparedProducts={comparedProducts}
//             products={products}
//           />
//           <ComparedTable
//             comparedProducts={comparedProducts}
//             products={products}
//           />
//         </section>
//         <section className="w-1/3">
//           <ChartComponent data={data} options={options} />
//         </section>
//       </section>
//     </section>
//   );
// };

// export default ProductCompared;

import React from "react";
import ChartComponent from "./ChartComponent";
import ProductComparedDetails from "./ProductComparedDetails";
import Link from "next/link";
import ComparedTable from "./ComparedTable";

const ProductCompared = ({ comparedProducts, scrapedProducts }) => {
  console.log(scrapedProducts);
  const getMaxValue = (property, comparedProducts, scrapedProducts) => {
    return Math.max(
      ...comparedProducts.map((productId) => {
        const product = scrapedProducts.find((p) => p.id === productId);
        return product && typeof product.properties[property] === "string"
          ? parseInt(product.properties[property])
          : 0;
      })
    );
  };

  const maxBattery = getMaxValue("battery", comparedProducts, scrapedProducts);
  const maxStorage = getMaxValue("storage", comparedProducts, scrapedProducts);
  const maxDisplay = getMaxValue("display", comparedProducts, scrapedProducts);
  const maxRam = getMaxValue("ram", comparedProducts, scrapedProducts);

  const data = {
    labels: ["Battery (mAh)", "Storage (GB)", "Display (inch)", "RAM (GB)"],
    datasets: comparedProducts.map((productId) => {
      const product = scrapedProducts.find((p) => p.id === productId);
      const color = `rgba(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      },0.2)`;

      const specificationsData = [
        parseInt(product.properties.battery),
        parseInt(product.properties.storage),
        parseInt(product.properties.display),
        parseInt(product.properties.ram),
      ];

      const scaledData = specificationsData.map(
        (value, index) =>
          (value / [maxBattery, maxStorage, maxDisplay, maxRam][index]) * 100
      );

      return {
        label: product ? product.name : "",
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
        suggestedMin: 0,
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
            comparedProducts={comparedProducts}
            scrapedProducts={scrapedProducts}
          />
          <ComparedTable
            comparedProducts={comparedProducts}
            scrapedProducts={scrapedProducts}
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
