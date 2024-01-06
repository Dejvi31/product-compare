import React from 'react';

const ProductCard = ({ product, onSelect, selected }) => {
  const { id, name, quantity, price, specifications } = product;

  return (
    <div
      style={{
        border: selected ? '2px solid blue' : '1px solid #ddd',
        padding: '10px',
        marginBottom: '10px',
      }}
      onClick={() => onSelect(id)}
    >
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price}</p>
      <p>Specifications: {specifications.join(', ')}</p>
      {selected && <p>Selected</p>}
    </div>
  );
};

export default ProductCard;