import React from 'react';

const ProductCard = ({ product, onSelect, selected }) => {
  const { id, name, quantity, price, specifications, image } = product;

  return (
    <div
      style={{
        border: selected ? '2px solid blue' : '1px solid #ddd',
        padding: '10px',
        marginBottom: '10px',
        cursor: 'pointer'
      }}
      onClick={() => onSelect(id)}
    >
      <h3>{name}</h3>
      <img src={image} alt={`${name} Image`} style={{ width: '100%' }} />
      <p>Quantity: {quantity}</p>
      <p>Price: ${price}</p>
      <p>Specifications: {specifications.join(', ')}</p>
      {selected && <p>✅</p>}
    </div>
  );
};

export default ProductCard;