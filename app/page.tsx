'use client'
import React, { useState } from 'react';
import ProductCard from './components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Product A',
    quantity: 10,
    price: 50.0,
    specifications: ['Spec 1', 'Spec 2', 'Spec 3'],
  },
  {
    id: 2,
    name: 'Product B',
    quantity: 15,
    price: 75.0,
    specifications: ['Spec 1', 'Spec 4', 'Spec 5'],
  },
  // Add more products with similar structure
];

const Home = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const handleProductSelect = (productId: number) => {
    const index = selectedProducts.indexOf(productId);
    if (index !== -1) {
      setSelectedProducts((prev) => prev.filter((id) => id !== productId));
    } else {
      setSelectedProducts((prev) => [...prev, productId]);
    }
  };
  
  const handleCompare = () => {
    const selectedProductsData = selectedProducts.map((productId) =>
      products.find((product) => product.id === productId)
    );
    console.log('Selected Products:', selectedProductsData);
    // Add your logic to compare the selected products
  };

  return (
    <div>
      <h1>Product Comparison</h1>
      <div style={{ display: 'flex' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={handleProductSelect}
            selected={selectedProducts.includes(product.id)}
          />
        ))}
      </div>
      {selectedProducts.length >= 2 && (
        <button onClick={handleCompare}>Compare</button>
      )}
    </div>
  );
};

export default Home;