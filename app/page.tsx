"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import products from "./data/Products";
import Search from "./components/forms/Search";
import useProductManagement from "./helpers/useProductManagement";
import { useRouter } from "next/navigation";
import ProductList from "./components/products/ProductList";
import Compare from "./components/buttons/Compare";
import StartingPopup from "./components/popup/StartingPopup";

const HomePage = () => {
  const {
    selectedProducts,
    search,
    products: filteredProducts,
    setSearch,
    handleProductSelect,
    handleProductsSelect,
    handleCompare,
    handleProductRemove,
    handleClearList,
    phoneData,
    dataFetched,
  } = useProductManagement({ initialProducts: products });

  const [showPopup, setShowPopup] = useState(true);

  const router = useRouter();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const phoneProducts = filteredProducts.filter(
    (product) => product.category === "Phone"
  );
  const tvProducts = filteredProducts.filter(
    (product) => product.category === "TV"
  );

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      {/* {showPopup && <StartingPopup closePopup={closePopup} />} */}
      <Search
        value={search}
        onChange={handleSearchChange}
        placeholder="Search for any product..."
      />
      <section className="grid grid-cols-4 gap-2">
        {dataFetched ? (
          phoneData.names.map((name, index) => (
            <div
              key={index}
              className="flex items-center border p-4 mb-4 rounded-md shadow-md"
            >
              <img
                src={phoneData.images[index]}
                alt={name}
                className="rounded-md shadow-md w-16 h-16 mr-4"
              />

              <div className="flex flex-col">
                <p className="text-xl font-semibold mb-2">{name}</p>
                <section className="grid grid-cols-2 gap-1">
                  {Object.entries(phoneData.properties[index]).map(
                    ([property, value]) => (
                      <section key={property} className="text-sm mb-1">
                        <strong>{value}</strong>
                      </section>
                    )
                  )}
                </section>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-4">
            Loading phone data...
          </p>
        )}
      </section>

      {filteredProducts.length > 0 ? (
        <>
          <section className="mt-8 w-full border-b border-gray-800">
            <section className="flex items-center ">
              <span
                className="underline cursor-pointer hover:text-gray-500"
                onClick={() => router.push("phone")}
              >
                Phone
              </span>
            </section>

            <ProductList
              sortedProducts={phoneProducts}
              handleProductsSelect={handleProductsSelect}
              selectedProducts={selectedProducts}
              handleProductSelect={handleProductSelect}
              limit="4"
            />
          </section>

          <section className="mt-8 w-full border-t border-gray-800">
            <section className="flex items-center">
              <span
                className="underline cursor-pointer hover:text-gray-500"
                onClick={() => router.push("/tv")}
              >
                TV
              </span>
            </section>
            <ProductList
              sortedProducts={tvProducts}
              handleProductsSelect={handleProductsSelect}
              selectedProducts={selectedProducts}
              handleProductSelect={handleProductSelect}
              limit="4"
            />
          </section>
        </>
      ) : (
        <section className="text-gray-500 mt-4">
          No Product Found With That Name
        </section>
      )}
      <Compare
        handleCompare={handleCompare}
        selectedProducts={selectedProducts}
        products={products}
        handleClearList={handleClearList}
        handleProductRemove={handleProductRemove}
      />
    </>
  );
};

export default HomePage;
