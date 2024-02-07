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
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setScrapedProducts: Dispatch<SetStateAction<ScrapedProduct[]>>;
  isLoading: boolean;
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
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
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
      router.push("/compare");
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
    setSelectedScrapedProducts([]);
    localStorage.removeItem("selectedScrapedProducts");
  };

  const filteredScrapedProducts = scrapedProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return {
    selectedScrapedProducts,
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
  };
};

export default useScrapedProductManagement;
