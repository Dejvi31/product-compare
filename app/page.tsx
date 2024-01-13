"use client";
import React, { ChangeEvent, useState } from "react";
import products from "./data/Products";
import ProductPage from "./components/products/ProductsPage";
import Navigation from "./components/buttons/Navigation";
import Search from "./components/filters/Search";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [search, setSearch] = useState<string>("");

  const router = useRouter();

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

  const goToPhone = () => {
    router.push("/phone");
  };
  const goToTv = () => {
    router.push("/tv");
  };
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
            <button
              onClick={goToPhone}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              Phone Products
            </button>

            <ProductPage
              products={phoneProducts}
              category="Phone"
              searchInput={false}
              sort={false}
            />
          </div>
          <div className="flex justify-center items-center mt-1">
            <button
              onClick={goToTv}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              TV Products
            </button>

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
