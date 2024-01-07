import React from "react";

const ProductCompared = ({ comparedProducts, onClose, products }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Compared Products</h2>
        <ul>
          {comparedProducts.map((productId, index) => {
            const product = products.find((p) => p.id === productId);

            return (
              <li key={index}>
                <h3>{product?.name}</h3>
                <p>Quantity: {product?.quantity}</p>
                <p>Price: ${product?.price}</p>
                <p>Specifications: {product?.specifications.join(", ")}</p>
              </li>
            );
          })}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductCompared;
