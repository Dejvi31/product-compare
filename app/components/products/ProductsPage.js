"use client";
import React from "react";
import ProductList from "./ProductList";
import Sorting from "../buttons/Sorting";
import Compare from "../buttons/Compare";
import Search from "../forms/Search";
import useProductManagement from "../../helpers/useProductManagement";
import Pagination from "../Pagination";

const ProductPage = ({
  products,
  category,
  searchInput = true,
  sort = true,
  paginate,
  currentPage,
  productsPerPage,
  totalProducts,
}) => {
  const {
    selectedProducts,
    sortBy,
    sortOrder,
    search,
    products: filteredProducts,
    setSearch,
    handleSort,
    handleProductSelect,
    handleProductsSelect,
    handleCompare,
    handleProductRemove,
    handleClearList,
  } = useProductManagement({
    initialProducts: products || [],
  });

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <section className="App">
      {searchInput == true && (
        <section className="mb-4">
          <Search
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search for any ${category} product...`}
          />
        </section>
      )}
      {sort == true && (
        <Sorting
          handleSort={handleSort}
          sortBy={sortBy}
          sortOrder={sortOrder}
        />
      )}

      <Compare
        handleCompare={handleCompare}
        selectedProducts={selectedProducts}
        products={products}
        handleClearList={handleClearList}
        handleProductRemove={handleProductRemove}
      />
      {filteredProducts.length > 0 ? (
        <ProductList
          sortedProducts={filteredProducts}
          handleProductsSelect={handleProductsSelect}
          selectedProducts={selectedProducts}
          handleProductSelect={handleProductSelect}
        />
      ) : (
        <section className="text-gray-500 mt-4">
          No Product Found With That Name
        </section>
      )}
      {totalPages > 1 && (
        <section className="mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
          />
        </section>
      )}
    </section>
  );
};

export default ProductPage;
