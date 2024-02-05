import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface ScrapedProduct {
  name: string;
  image: string;
  properties: Record<string, string>;
}

interface UseScrapedProductManagementReturn {
  selectedProducts: ScrapedProduct[];
  setScrapedProducts: Dispatch<SetStateAction<ScrapedProduct[]>>;
  handleScrapedProductSelect: (productId: number) => void;
  handleScrapedProductsSelect: (productId: number) => void;
  handleScrapedProductCompare: () => void;
  handleScrapedProductRemove: (productIdToRemove: number) => void;
  handleClearScrapedList: () => void;
  phoneData: {
    names: string[];
    images: string[];
    properties: Record<string, string>;
  };
  dataFetched: boolean;
  setDataFetched: Dispatch<SetStateAction<boolean>>;
}

const useScrapedProductManagement = (): UseScrapedProductManagementReturn => {
  const [selectedProducts, setSelectedProducts] = useState<ScrapedProduct[]>(
    []
  );
  const [scrapedProducts, setScrapedProducts] = useState<ScrapedProduct[]>([]);
  const [phoneData, setPhoneData] = useState({
    names: [],
    images: [],
    properties: {},
  });
  const [dataFetched, setDataFetched] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api");
        const data = await response.json();
        setPhoneData({
          names: data.phoneNames,
          images: data.phoneImages,
          properties: data.phoneProperties,
        });
        setDataFetched(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedSelectedProducts = localStorage.getItem(
      "selectedScrapedProducts"
    );
    if (storedSelectedProducts) {
      setSelectedProducts(JSON.parse(storedSelectedProducts));
    }
  }, []);

  const handleScrapedProductSelect = (productId: number) => {
    if (scrapedProducts.length > productId) {
      const selectedProduct = scrapedProducts[productId];

      if (selectedProduct) {
        // Save selected product to Local Storage
        localStorage.setItem(
          "selectedScrapedProduct",
          JSON.stringify(selectedProduct)
        );
      } else {
        console.error(`Scraped product with index ${productId} not found.`);
      }
    } else {
      console.error(
        `Scraped product with index ${productId} not found. The scrapedProducts array may be empty or not yet fetched.`
      );
    }
  };

  const handleScrapedProductsSelect = (productId: number) => {
    setSelectedProducts((prev) => {
      const index = prev.findIndex(
        (p) => p.name === scrapedProducts[productId].name
      );
      if (index !== -1) {
        return prev.filter((p) => p.name !== scrapedProducts[productId].name);
      } else {
        const updatedSelectedProducts = [...prev, scrapedProducts[productId]];
        return updatedSelectedProducts;
      }
    });
  };

  const handleScrapedProductCompare = () => {
    if (selectedProducts.length >= 2) {
      // Save selected products to Local Storage
      localStorage.setItem(
        "selectedScrapedProducts",
        JSON.stringify(selectedProducts)
      );

      router.push("/compare");
    } else {
      console.log("Please select at least 2 products to compare.");
    }
  };

  const handleScrapedProductRemove = (productIdToRemove: number) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.filter(
        (product) => product.name !== scrapedProducts[productIdToRemove].name
      )
    );
  };

  const handleClearScrapedList = () => {
    setSelectedProducts([]);
    localStorage.removeItem("selectedScrapedProducts");
  };

  return {
    selectedProducts,
    setScrapedProducts,
    handleScrapedProductSelect,
    handleScrapedProductsSelect,
    handleScrapedProductCompare,
    handleScrapedProductRemove,
    handleClearScrapedList,
    phoneData,
    dataFetched,
    setDataFetched,
  };
};

export default useScrapedProductManagement;
