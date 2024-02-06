import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { fetchScrapedProducts } from "../api/api";

interface ScrapedProduct {
  id: number;
  name: string;
  image: string;
  properties: Record<string, string>;
}

interface UseScrapedProductManagementReturn {
  selectedScrapedProducts: number[];
  scrapedProducts: ScrapedProduct[];
  setScrapedProducts: Dispatch<SetStateAction<ScrapedProduct[]>>;
  handleScrapedProductSelect: (productId: number) => void;
  handleScrapedProductsSelect: (productId: number) => void;
  handleScrapedProductCompare: () => void;
  handleScrapedProductRemove: (productIdToRemove: number) => void;
  handleClearScrapedList: () => void;
}

const useScrapedProductManagement = (): UseScrapedProductManagementReturn => {
  const [selectedScrapedProducts, setSelectedScrapedProducts] = useState<
    number[]
  >([]);
  const [scrapedProducts, setScrapedProducts] = useState<ScrapedProduct[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const scrapedProductsArray = await fetchScrapedProducts();

      setScrapedProducts(scrapedProductsArray);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedSelectedScrapedProducts = localStorage.getItem(
      "selectedScrapedProducts"
    );
    if (storedSelectedScrapedProducts) {
      setSelectedScrapedProducts(JSON.parse(storedSelectedScrapedProducts));
    }
  }, []);

  const handleScrapedProductSelect = (productId: number) => {
    const product = scrapedProducts.find((product) => product.id === productId);

    if (product) {
      // Save selected product to Local Storage
      localStorage.setItem("selectedScrapedProduct", JSON.stringify(product));
    } else {
      console.error(`Scraped product with id ${productId} not found.`);
    }
  };

  const handleScrapedProductsSelect = (productId: number) => {
    setSelectedScrapedProducts((prev) => {
      const index = prev.indexOf(productId);
      if (index !== -1) {
        return prev.filter((id) => id !== productId);
      } else {
        const updatedSelectedProducts = [...prev, productId];
        return updatedSelectedProducts;
      }
    });
  };

  const handleScrapedProductCompare = () => {
    if (selectedScrapedProducts.length >= 2) {
      // Save selected products to Local Storage
      localStorage.setItem(
        "selectedScrapedProducts",
        JSON.stringify(selectedScrapedProducts)
      );
      router.push("/compare"); // Adjust the route as needed
    } else {
      console.log("Please select at least 2 scraped products to compare.");
    }
  };

  const handleScrapedProductRemove = (productIdToRemove: number) => {
    setSelectedScrapedProducts((prevSelected) =>
      prevSelected.filter((productId) => productId !== productIdToRemove)
    );
  };

  const handleClearScrapedList = () => {
    // Clear the selection in both state and localStorage
    setSelectedScrapedProducts([]);
    localStorage.removeItem("selectedScrapedProducts");
  };

  return {
    selectedScrapedProducts,
    scrapedProducts,
    setScrapedProducts,
    handleScrapedProductSelect,
    handleScrapedProductsSelect,
    handleScrapedProductCompare,
    handleScrapedProductRemove,
    handleClearScrapedList,
  };
};

export default useScrapedProductManagement;
