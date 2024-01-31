import React from "react";

const ProductComparedDetails = ({ comparedProducts, products }) => {
  return (
    <section className="w-full grid grid-cols-2 gap-1">
      {comparedProducts.map((productId, index) => {
        const { name, image, price, specifications } =
          products.find((p) => p.id === productId) || {};

        const isLastProduct = index === comparedProducts.length - 1;

        return (
          <section
            key={index}
            className={`relative flex flex-col items-center ${
              isLastProduct ? "" : "border-r pr-4"
            }`}
          >
            <h1 className="text-lg font-bold mb-2">{name}</h1>
            <section className="relative flex items-center justify-center w-full">
              <img src={image} alt={`${name} Image`} className="w-full h-72" />
              <p className="absolute left-0 top-0 p-2 bg-gray-800 text-white bg-opacity-75">
                {specifications.storage}GB / {specifications.ram}GB RAM
              </p>
              <p className="absolute right-3 bottom-2 text-xl font-bold bg-gray-800 text-white bg-opacity-75 px-3">
                ${price}
              </p>
            </section>
          </section>
        );
      })}
    </section>
  );
};

export default ProductComparedDetails;
