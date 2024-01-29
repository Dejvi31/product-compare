import Link from "next/link";
import React from "react";

const ProductCard = ({ product, onSelect, selected, onProductSelect }) => {
  const { id, name, price, image, category } = product;

  let link = category + "/" + name;
  link = link.replace(/\s+/g, "-").toLowerCase();

  return (
    <section className="relative transition duration-300 transform hover:scale-105">
      <button
        className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 rounded-full"
        onClick={() => {
          onSelect(id);
        }}
      >
        ⇆
      </button>
      <Link href={link}>
        <section
          className={`max-w-md flex items-center justify-center border p-4 m-4 cursor-pointer  ${
            selected ? "border-gray-800" : "border-gray-300"
          }`}
          onClick={() => onProductSelect(id)}
        >
          <img
            src={image}
            alt={name}
            className="rounded-md object-cover  h-20 mr-4"
          />

          <section>
            <h3 className="text-lg font-semibold mb-1">{name}</h3>
            <p className="text-md text-gray-800 font-bold">${price}</p>
          </section>
        </section>
      </Link>
    </section>
  );
};

export default ProductCard;
