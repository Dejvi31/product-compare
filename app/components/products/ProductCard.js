import Link from "next/link";
import React from "react";

const ProductCard = ({ product, onSelect, selected, onProductSelect }) => {
  const { id, name, price, image, category } = product;

  let link = category + "/" + name;
  link = link.replace(/\s+/g, "-").toLowerCase();

  return (
    <section className="relative">
      <button
        className="absolute top-2 left-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 rounded-full"
        onClick={() => {
          onSelect(id);
        }}
      >
        ⇆
      </button>
      <Link href={link}>
        <section
          className={` max-w-md flex items-center justify-center  border p-2 m-2 cursor-pointer ${
            selected ? "border-gray-800" : ""
          }`}
          onClick={() => onProductSelect(id)}
        >
          <img src={image} alt={name} width={70} />

          <section className="ml-5">
            <h3 className="text-md font-semibold mb-1">{name}</h3>

            <p className="text-md text-gray-800 font-bold mb-2">${price}</p>
          </section>
        </section>
      </Link>
    </section>
  );
};

export default ProductCard;
