import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchScrapedProducts } from "../api/api";
import {
  ScrapedProduct,
  UseScrapedProductManagementReturn,
} from "./interfaces";

const useScrapedProductManagement = (): UseScrapedProductManagementReturn => {
  const [selectedScrapedProducts, setSelectedScrapedProducts] = useState<
    number[]
  >([]);
  const [selectedProduct, setSelectedProduct] = useState<ScrapedProduct | null>(
    null
  );
  const [scrapedProducts, setScrapedProducts] = useState<ScrapedProduct[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 12;
  const router = useRouter();

  // Custom hook for fetching scraped products
  const fetchScrapedProductsData = async () => {
    try {
      setIsLoading(true);
      const scrapedProductsArray = await fetchScrapedProducts();
      setScrapedProducts(scrapedProductsArray);
    } catch (error) {
      console.error("Error fetching scraped products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Custom hook for handling selection of a specific scraped product by ID
  const handleScrapedProductSelect = (productId: number): void => {
    const product = scrapedProducts.find((product) => product.id === productId);

    if (product) {
      // Save the selected product to local storage and state
      localStorage.setItem("selectedScrapedProduct", JSON.stringify(product));
      setSelectedProduct(product);
    } else {
      // Throw an error if the product is not found
      throw new Error(`Scraped product with id ${productId} not found.`);
    }
  };

  // Custom hook for handling selection/deselection of multiple scraped products
  const handleScrapedProductsSelect = (productId: number): void => {
    try {
      setSelectedScrapedProducts((prev) => {
        const index = prev.indexOf(productId);
        if (index !== -1) {
          // Deselect the product if already selected
          return prev.filter((id) => id !== productId);
        } else {
          // Select the product if not already selected
          const updatedSelectedProducts = [...prev, productId];
          return updatedSelectedProducts;
        }
      });
    } catch {
      // Throw an error if an issue occurs during selection/deselection
      throw new Error(`Error handling product selection for id ${productId}.`);
    }
  };

  // Custom hook for redirecting to the compare page with selected products
  const handleScrapedProductCompare = () => {
    if (selectedScrapedProducts.length >= 2) {
      // Save selected products to local storage and navigate to the compare page
      localStorage.setItem(
        "selectedScrapedProducts",
        JSON.stringify(selectedScrapedProducts)
      );
      router.push("/compare");
    } else {
      // Log a message if fewer than 2 products are selected
      console.log("Please select at least 2 scraped products to compare.");
    }
  };

  // Custom hook for removing a specific product from the selected scraped products list
  const handleScrapedProductRemove = (productIdToRemove: number) => {
    setSelectedScrapedProducts((prevSelected) =>
      prevSelected.filter((productId) => productId !== productIdToRemove)
    );
  };

  // Custom hook for clearing the list of selected scraped products
  const handleClearScrapedList = () => {
    setSelectedScrapedProducts([]);
    localStorage.removeItem("selectedScrapedProducts");
  };

  // Custom hook for generating an array of random scraped products
  const generateRandomProducts = (count: number): ScrapedProduct[] => {
    const shuffledProducts = [...scrapedProducts].sort(
      () => 0.5 - Math.random()
    );
    return shuffledProducts.slice(0, count);
  };

  // Custom hook for handling selection of a random scraped product by ID
  const handleRandomProductSelect = (productId: number): void => {
    const product = scrapedProducts.find((product) => product.id === productId);

    if (product) {
      // Save the randomly selected product to local storage and state
      localStorage.setItem("selectedScrapedProduct", JSON.stringify(product));
      setSelectedProduct(product);
    } else {
      // Throw an error if the randomly selected product is not found
      throw new Error(`Random product with id ${productId} not found.`);
    }
  };

  // Custom hook for filtering scraped products based on the search input
  const filteredScrapedProducts = scrapedProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Function to get the products for the current page, considering the search query
  const getCurrentPageProducts = () => {
    const filteredAndSlicedProducts = filteredScrapedProducts.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );

    return filteredAndSlicedProducts;
  };

  // useEffect for fetching scraped products data on component mount
  useEffect(() => {
    fetchScrapedProductsData();
  }, []);

  // useEffect for loading selected scraped product from local storage on component mount
  useEffect(() => {
    const storedSelectedProduct = localStorage.getItem(
      "selectedScrapedProduct"
    );

    if (storedSelectedProduct) {
      const parsedSelectedProduct = JSON.parse(storedSelectedProduct);
      setSelectedProduct(parsedSelectedProduct);
    }
  }, []);

  // useEffect for loading selected scraped products from local storage on component mount
  useEffect(() => {
    const storedSelectedProducts = localStorage.getItem(
      "selectedScrapedProducts"
    );

    if (storedSelectedProducts) {
      const parsedSelectedProducts = JSON.parse(storedSelectedProducts);
      setSelectedScrapedProducts(parsedSelectedProducts);
    }
  }, []);

  return {
    selectedScrapedProducts,
    selectedProduct,
    scrapedProducts: filteredScrapedProducts,
    setScrapedProducts,
    search,
    setSearch,
    isLoading,
    handleScrapedProductSelect,
    handleScrapedProductsSelect,
    handleScrapedProductCompare,
    handleScrapedProductRemove,
    handleClearScrapedList,
    generateRandomProducts,
    handleRandomProductSelect,
    currentPage,
    setCurrentPage,
    productsPerPage,
    getCurrentPageProducts,
  };
};

export default useScrapedProductManagement;
