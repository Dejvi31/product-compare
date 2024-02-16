"use client";
import React from "react";
import Login from "../components/buttons/Login";
import HeaderSearch from "../components/forms/HeaderSearch";
import useScrapedProductManagement from "../helpers/useScrapedProductManagement";
import { useRouter } from "next/navigation";

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
    recentlyVisitedProducts,
    setSearchSuggestions,
  } = useScrapedProductManagement();

  const router = useRouter();
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
        <span
          className="text-xl text-white font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Home
        </span>
      </section>

      <nav className="flex items-center justify-center w-72">
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
          recentlyVisitedProducts={recentlyVisitedProducts}
          setSearchSuggestions={setSearchSuggestions}
        />
      </nav>

      <section className="flex items-center">
        <Login />
      </section>
    </header>
  );
};

export default Header;
