import Link from "next/link";
import React from "react";

const RandomSuggest = ({ randomProducts, onRandomProductSelect }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {randomProducts.map((product) => (
        <Link
          key={product.id}
          href={`/${product.category.toLowerCase()}/${product.name
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          onClick={() => onRandomProductSelect(product)}
        >
          <section className="max-w-md flex items-center justify-center border p-4 cursor-pointer transition duration-300 transform hover:scale-105">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-md object-cover h-20 mr-4"
            />
            <section>
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-md text-gray-800 font-bold">
                ${product.price}
              </p>
            </section>
          </section>
        </Link>
      ))}
    </section>
  );
};

export default RandomSuggest;
