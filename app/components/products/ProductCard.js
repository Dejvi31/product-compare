import React from "react";

const ProductCard = ({ product, onSelect, selected }) => {
  const { id, name, quantity, price, specifications, image } = product;

  return (
    <div
      className={`max-w-md ${
        selected ? "border-2 border-blue-500" : "border"
      } p-4 m-2 cursor-pointer`}
      onClick={() => onSelect(id)}
    >
      <div className="flex justify-between">
        <h3>{name}</h3>
        {selected && <p>✅</p>}
      </div>
      <img src={image} alt={`${name} Image`} style={{ width: "100%" }} />
      <p className="font-semibold">
        Quantity: <span className="font-light">{quantity}</span>
      </p>
      <p className="font-semibold">
        Price: <span className="font-light">${price}</span>
      </p>
      <p className="font-semibold">
        Specifications:{" "}
        <span className="font-light">{specifications.join(", ")}</span>
      </p>
    </div>
  );
};

export default ProductCard;
