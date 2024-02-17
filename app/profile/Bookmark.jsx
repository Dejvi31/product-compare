import React from "react";
import useScrapedProductManagement from "../helpers/useScrapedProductManagement";

const Bookmark = () => {
  const { scrapedProducts, bookmarkedProducts } = useScrapedProductManagement();

  // Filter scraped products based on bookmarked product IDs
  const bookmarkedScrapedProducts = scrapedProducts.filter((product) =>
    bookmarkedProducts.includes(product.id)
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bookmarked Products</h2>
      {bookmarkedScrapedProducts.length > 0 ? (
        bookmarkedProducts.map((bookmarks) => bookmarks.name)
      ) : (
        <p>No bookmarked products yet.</p>
      )}
    </div>
  );
};

export default Bookmark;
