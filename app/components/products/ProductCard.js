import Link from "next/link";
import React from "react";

const ProductCard = ({ product, onSelect, selected, onProductSelect }) => {
  const { id, name, price, image, category } = product;

  let link = category + "/" + name;
  link = link.replace(/\s+/g, "-").toLowerCase();

  return (
    <div
      className={` relative max-w-md flex items-center justify-center  border p-4 m-2 cursor-pointer ${
        selected ? "border-gray-800" : ""
      }`}
    >
      <img src={image} alt={name} width={100} />

      <button
        className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 rounded-full"
        onClick={() => {
          onSelect(id);
        }}
      >
        ⇆
      </button>

      <div className="ml-5">
        <h3 className="text-md font-semibold mb-1">{name}</h3>

        <p className="text-sm text-gray-600 mb-2">Category: {category} </p>

        <p className="text-md text-gray-800 font-bold mb-2">${price}</p>

        <Link href={link}>
          <p
            className="text-blue-500 hover:underline"
            onClick={() => onProductSelect(id)}
          >
            View Details
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
