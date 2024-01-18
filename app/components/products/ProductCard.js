import Link from "next/link";
import React from "react";

const ProductCard = ({ product, onSelect, selected }) => {
  const { id, name, quantity, price, specifications, image, category } =
    product;

  let link = category + "/" + name;

  link = link.replace(/\s+/g, "-").toLowerCase();
  return (
    <Link href={link}>
      <div
        className={`max-w-md border p-4 m-2 cursor-pointer ${
          selected ? "border-blue-500" : ""
        }`}
      >
        <div className="flex justify-between">
          <h3>{name}</h3>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 rounded-r"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(id);
            }}
          >
            ⇆
          </button>
        </div>

        <div
          className="flex justify-center items-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-40"></div>
        </div>
        <p className="font-semibold">
          Category: <span className="font-light">{category}</span>
        </p>
        <p className="font-semibold">
          Quantity: <span className="font-light">{quantity}</span>
        </p>
        <p className="font-semibold">
          Price: <span className="font-light">${price}</span>
        </p>
        {/* <p className="font-semibold">
        Specifications:{" "}
        <span className="font-light">{specifications.join(", ")}</span>
      </p> */}
      </div>
    </Link>
  );
};

export default ProductCard;
