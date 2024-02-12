"use client";
import React from "react";
import Login from "../components/buttons/Login";
import HeaderSearch from "../components/forms/HeaderSearch";
import useScrapedProductManagement from "../helpers/useScrapedProductManagement";

const Header = () => {
  const {
    search,
    setSearch,
    handleSearchSuggestions,
    searchSuggestions,
    handleClearSearch,
    handleScrapedProductSelect,
    handleScrapedProductsSelect,
    handleScrapedProductCompare,
    selectedScrapedProducts,
    handleClearScrapedList,
  } = useScrapedProductManagement();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    handleSearchSuggestions(e.target.value);
  };

  const handleClearSearchInput = () => {
    handleClearSearch();
  };
  return (
    <header className="bg-gray-800  flex justify-between items-center fixed w-full top-0 z-10 ">
      <section className="flex items-center">
        <span className="text-xl text-white font-bold cursor-pointer">
          Home
        </span>
      </section>

      <nav className="flex items-center space-x-4 justify-center">
        <HeaderSearch
          value={search}
          onChange={handleSearchChange}
          placeholder="Search for any product..."
          suggestions={searchSuggestions}
          onClearSearch={handleClearSearchInput}
          onScrapedProductSelect={handleScrapedProductSelect}
          handleScrapedProductsSelect={handleScrapedProductsSelect}
          handleScrapedProductCompare={handleScrapedProductCompare}
          selectedScrapedProducts={selectedScrapedProducts}
          handleClearScrapedList={handleClearScrapedList}
        />
      </nav>

      <section className="flex items-center">
        <Login />
      </section>
    </header>
  );
};

export default Header;
