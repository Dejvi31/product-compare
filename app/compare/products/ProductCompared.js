// import React from "react";
// import ChartComponent from "./ChartComponent";
// import ProductComparedDetails from "./ProductComparedDetails";
// import Link from "next/link";

// const ProductCompared = ({ selectedProductsDetails, scrapedProducts }) => {
//   const getMaxValue = (property, selectedProductsDetails, scrapedProducts) => {
//     return Math.max(
//       ...selectedProductsDetails.map((product) => {
//         const productDetails = scrapedProducts.find((p) => p.id === product.id);
//         return productDetails &&
//           typeof productDetails.properties[property] === "string"
//           ? parseInt(productDetails.properties[property])
//           : 0;
//       })
//     );
//   };

//   const maxBattery = getMaxValue(
//     "Battery",
//     selectedProductsDetails,
//     scrapedProducts
//   );
//   const maxPixel = getMaxValue(
//     "Pixel",
//     selectedProductsDetails,
//     scrapedProducts
//   );
//   const maxDisplay = getMaxValue(
//     "Display",
//     selectedProductsDetails,
//     scrapedProducts
//   );
//   const maxRam = getMaxValue("RAM", selectedProductsDetails, scrapedProducts);

//   const data = {
//     labels: ["Battery (mAh)", "Pixel (ppi)", "Display (inch)", "RAM (GB)"],
//     datasets: selectedProductsDetails.map((product) => {
//       const productDetails = scrapedProducts.find((p) => p.id === product.id);
//       const color = `rgba(${Math.random() * 255},${Math.random() * 255},${
//         Math.random() * 255
//       },0.2)`;

//       const specificationsData = [
//         parseInt(productDetails.properties?.Battery) || 0,
//         parseInt(productDetails.properties?.Pixel) || 0,
//         parseFloat(productDetails.properties?.Display) || 0,
//         parseInt(productDetails.properties?.RAM) || 0,
//       ];

//       const scaledData = specificationsData.map((value, index) =>
//         Math.min(
//           (value / [maxBattery, maxPixel, maxDisplay, maxRam][index]) * 100,
//           100
//         )
//       );

//       return {
//         label: productDetails ? productDetails.name : "",
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
//         suggestedMax: 100,
//       },
//     },
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             const originalValue =
//               context.dataset.originalData[context.dataIndex];
//             return `${context.dataset.label}: ${originalValue}`;
//           },
//           title: (tooltipItems) => {
//             const item = tooltipItems[0];
//             return `${item.label} `;
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
//             selectedProductsDetails={selectedProductsDetails}
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

// import React from "react";
// import Link from "next/link";
// import Radial from "./Radial";
// import ProductComparedDetails from "./ProductComparedDetails";

// const ProductCompared = ({ selectedProductsDetails, scrapedProducts }) => {
//   const products = [
//     {
//       name: "Ram",
//       "Xiaomi 14": 12,
//       "Xiaomi 13 Ultra": 12,
//     },
//     {
//       name: "PPI",
//       "Xiaomi 14": 48,
//       "Xiaomi 13 Ultra": 50,
//     },
//     {
//       name: "Display",
//       "Xiaomi 14": 6.65,
//       "Xiaomi 13 Ultra": 6.76,
//     },
//     {
//       name: "Battery",
//       "Xiaomi 14": 23,
//       "Xiaomi 13 Ultra": 42,
//     },
//   ];
//   const keys = ["Xiaomi 14", "Xiaomi 13 Ultra"];

//   return (
//     <section>
//       <Link className="text-gray-500 hover:underline" href="/">
//         Go back
//       </Link>
//       <section className="flex">
//         <section className="w-2/3">
//           <ProductComparedDetails
//             selectedProductsDetails={selectedProductsDetails}
//           />
//         </section>
//         <section className="w-1/3">
//           <Radial data={products} keys={keys} indexBy="name" />
//         </section>
//       </section>
//     </section>
//   );
// };

// export default ProductCompared;

// import React from "react";
// import Link from "next/link";
// import Radial from "./Radial";
// import ProductComparedDetails from "./ProductComparedDetails";

// const ProductCompared = ({ selectedProductsDetails, scrapedProducts }) => {
//   const properties = ["RAM", "PPI", "Display", "Battery"];

//   const products = properties.map((property) => ({
//     name: property,
//     ...Object.fromEntries(
//       selectedProductsDetails.map((product) => {
//         const productDetails = scrapedProducts.find((p) => p.id === product.id);
//         return [
//           productDetails ? productDetails.name : "",
//           parseFloat(productDetails.properties[property]) || 0,
//         ];
//       })
//     ),
//   }));

//   const keys = selectedProductsDetails.map((product) => {
//     const productDetails = scrapedProducts.find((p) => p.id === product.id);
//     return productDetails ? productDetails.name : "";
//   });

//   return (
//     <section>
//       <Link className="text-gray-500 hover:underline" href="/">
//         Go back
//       </Link>
//       <section className="flex">
//         <section className="w-2/3">
//           <ProductComparedDetails
//             selectedProductsDetails={selectedProductsDetails}
//           />
//         </section>
//         <section className="w-1/3">
//           <Radial data={products} keys={keys} indexBy="name" />
//         </section>
//       </section>
//     </section>
//   );
// };

// export default ProductCompared;

import React from "react";
import Link from "next/link";
import Radial from "./Radial";
import ProductComparedDetails from "./ProductComparedDetails";

const ProductCompared = ({ selectedProductsDetails, scrapedProducts }) => {
  const properties = ["RAM", "PPI", "Display", "Battery"];

  // Find the maximum value for each property
  const maxValues = properties.map((property) => {
    return Math.max(
      ...selectedProductsDetails.map((product) => {
        const productDetails = scrapedProducts.find((p) => p.id === product.id);
        return (
          (productDetails && parseFloat(productDetails.properties[property])) ||
          0
        );
      })
    );
  });

  // Scale the data to have a maximum value of 100
  const scaleData = (value, maxValue) => {
    return (value / maxValue) * 100;
  };

  const products = properties.map((property, index) => ({
    name: property,
    ...Object.fromEntries(
      selectedProductsDetails.map((product) => {
        const productDetails = scrapedProducts.find((p) => p.id === product.id);
        const value =
          (productDetails && parseFloat(productDetails.properties[property])) ||
          0;
        return [
          productDetails ? productDetails.name : "",
          scaleData(value, maxValues[index]),
        ];
      })
    ),
  }));

  const originalData = properties.map((property) => ({
    name: property,
    ...Object.fromEntries(
      selectedProductsDetails.map((product) => {
        const productDetails = scrapedProducts.find((p) => p.id === product.id);
        return [
          productDetails ? productDetails.name : "",
          parseFloat(productDetails.properties[property]) || 0,
        ];
      })
    ),
  }));
  const keys = selectedProductsDetails.map((product) => {
    const productDetails = scrapedProducts.find((p) => p.id === product.id);
    return productDetails ? productDetails.name : "";
  });
  // let result = Object.keys(products[2]).map((key) => [key, products[2][key]]);
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
          <Radial
            data={originalData}
            keys={keys}
            indexBy="name"
            originalData={originalData}
          />
        </section>
      </section>
    </section>
  );
};

export default ProductCompared;
