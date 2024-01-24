"use client";
import ProductList from "./ProductList";
import Sorting from "../buttons/Sorting";
import Compare from "../buttons/Compare";
import Search from "../forms/Search";
import useProductManagement from "../../hooks/useProductManagement";

const ProductPage = ({
  products,
  category,
  searchInput = true,
  sort = true,
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
      {products.length > 0 ? (
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
    </section>
  );
};

export default ProductPage;
