import Link from "next/link";
import React from "react";

const ProductCard = ({ product, onSelect, selected, onProductSelect }) => {
  const { id, name, price, image, category } = product;

  let link = category + "/" + name;
  link = link.replace(/\s+/g, "-").toLowerCase();

  return (
    <div
      className={`max-w-md border p-4 m-2 cursor-pointer ${
        selected ? "border-gray-800" : ""
      }`}
    >
      {" "}
      <div className="relative">
        <div
          className="bg-cover bg-center w-full h-40 mb-4"
          style={{ backgroundImage: `url(${image})` }}
        />

        <button
          className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 rounded-full"
          onClick={() => {
            onSelect(id);
          }}
        >
          ⇆
        </button>
      </div>
      <div>
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
