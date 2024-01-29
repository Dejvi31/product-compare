"use client";
import React, { useEffect, useState } from "react";
import ProductImage from "../../components/products/ProductImage";
import ProductDetails from "../../components/products/ProductDetails";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useBreadCrumbs } from "../../helpers/useBreadCrumbs";
import products from "../../data/Products";
import RandomSuggest from "../../components/RandomSuggest";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  specifications: string[] | { [key: string]: any };
  image: string;
  desc: string;
}

const PhoneDetailPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(() => ({
    id: 0,
    name: "",
    category: "",
    price: 0,
    quantity: 0,
    specifications: [],
    image: "",
    desc: "",
  }));

  const [randomProducts, setRandomProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Retrieve selected product from Local Storage
    const storedSelectedProduct = localStorage.getItem("selectedProduct");
    if (storedSelectedProduct) {
      setSelectedProduct(JSON.parse(storedSelectedProduct));
    }

    const getRandomSuggestions = () => {
      const numberOfSuggestions = 4;
      const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
      const suggestions = shuffledProducts.slice(0, numberOfSuggestions);
      setRandomProducts(suggestions);
    };

    getRandomSuggestions();
  }, []);

  const breadCrumbs = useBreadCrumbs(selectedProduct);

  const handleRandomProductSelect = (selectedProduct: Product) => {
    console.log("Selected random product:", selectedProduct);

    setSelectedProduct(selectedProduct);
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
  };

  return (
    <section className="container mx-auto p-4">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      {selectedProduct ? (
        <section className="flex flex-wrap">
          <ProductImage
            src={selectedProduct.image}
            alt={selectedProduct.name}
          />
          <ProductDetails {...selectedProduct} />
          <section className="mt-5 w-full border-t border-gray-800">
            <section>
              <h1 className="text-2xl my-3">Products you may like</h1>
              <RandomSuggest
                randomProducts={randomProducts}
                onRandomProductSelect={handleRandomProductSelect}
              />
            </section>
          </section>
        </section>
      ) : (
        <section>Loading...</section>
      )}
    </section>
  );
};

export default PhoneDetailPage;
