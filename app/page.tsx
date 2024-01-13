"use client";
import React, { ChangeEvent, useState } from "react";
import products from "./data/Products";
import ProductPage from "./components/products/ProductsPage";
import Navigation from "./components/buttons/Navigation";
import Search from "./components/filters/Search";

const HomePage = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const phoneProducts = filteredProducts.filter(
    (product) => product.category === "phone"
  );
  const tvProducts = filteredProducts.filter(
    (product) => product.category === "tv"
  );
  return (
    <>
      <Navigation categories={["Phone", "Tv"]} />
      <div>
        <Search
          value={search}
          onChange={handleSearchChange}
          placeholder="Search for any product..."
        />
      </div>
      {filteredProducts.length > 0 ? (
        <>
          <div className="flex justify-center items-center mt-1">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              Phone Products
            </button>
          </div>

          <div className="grid">
            <ProductPage
              products={phoneProducts}
              category="Phone"
              searchInput={false}
              sort={false}
            />
          </div>

          <div className="flex justify-center items-center mt-1">
            <h2 className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              TV Products
            </h2>
          </div>
          <div className="flex item-center">
            <ProductPage
              products={tvProducts}
              category="TV"
              searchInput={false}
              sort={false}
            />
          </div>
        </>
      ) : (
        <div className="text-gray-500 mt-4">
          No Product Found With That Name
        </div>
      )}
    </>
    // <>
    //   <Navigation categories={["Phone", "Tv"]} />
    //   <ProductPage products={products} category="" />
    // </>
  );
};

export default HomePage;
