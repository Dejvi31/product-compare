"use client";
import React from "react";
import Login from "../components/buttons/Login";
import Search from "./forms/Search";
import useScrapedProductManagement from "../helpers/useScrapedProductManagement";

const Header = () => {
  const {
    search,
    setSearch,
    scrapedProducts: filteredProducts,
  } = useScrapedProductManagement();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(filteredProducts);
  };
  return (
    <header className="bg-gray-800  flex justify-between items-center fixed w-full top-0 z-10 ">
      <section className="flex items-center">
        <span className="text-xl text-white font-bold cursor-pointer">
          Logo
        </span>
      </section>

      <nav className="flex items-center space-x-4 justify-center">
        <Search
          value={search}
          onChange={handleSearchChange}
          placeholder="Search for any product..."
        />
      </nav>

      <section className="flex items-center">
        <Login />
      </section>
    </header>
  );
};

export default Header;
