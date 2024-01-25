import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  specifications: string[];
  image: string;
  category: string;
  desc: string;
}

interface UseProductManagementProps {
  initialProducts: Product[];
}

interface UseProductManagementReturn {
  selectedProducts: number[];
  sortBy: string;
  sortOrder: string;
  search: string;
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  setSearch: Dispatch<SetStateAction<string>>;
  handleSort: (type: string) => void;
  handleProductSelect: (productId: number) => void;
  handleProductsSelect: (productId: number) => void;
  handleCompare: () => void;
  handleProductRemove: (productIdToRemove: number) => void;
  handleClearList: () => void;
}

const useProductManagement = ({
  initialProducts,
}: UseProductManagementProps): UseProductManagementReturn => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<string>("price");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<Product[]>(initialProducts || []);

  const router = useRouter();

  useEffect(() => {
    // The selectedProducts are checked if they are in local storage
    const storedSelectedProducts = localStorage.getItem("selectedProducts");
    if (storedSelectedProducts) {
      setSelectedProducts(JSON.parse(storedSelectedProducts));
    }
  }, []); // Include category in the dependency array

  const handleSort = (type: string) => {
    if (type === sortBy) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(type);
      setSortOrder("asc");
    }
  };

  const handleProductSelect = (productId: number) => {
    const product = products.find((product) => product.id === productId);

    if (product) {
      // Save selectedProduct to Local Storage
      localStorage.setItem("selectedProduct", JSON.stringify(product));
    } else {
      console.error(`Product with id ${productId} not found.`);
    }
  };

  const handleProductsSelect = (productId: number) => {
    setSelectedProducts((prev) => {
      const index = prev.indexOf(productId);
      if (index !== -1) {
        return prev.filter((id) => id !== productId);
      } else {
        const updatedSelectedProducts = [...prev, productId];
        return updatedSelectedProducts;
      }
    });
  };

  const handleCompare = () => {
    if (selectedProducts.length >= 2) {
      // Save selectedProducts to Local Storage
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(selectedProducts)
      );

      router.push("/compare");
    } else {
      console.log("Please select at least 2 products to compare.");
    }
  };

  const handleProductRemove = (productIdToRemove: number) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.filter((productId) => productId !== productIdToRemove)
    );
  };

  const handleClearList = () => {
    // Clear the selection in both state and localStorage
    setSelectedProducts([]);
    localStorage.removeItem("selectedProducts");
  };

  // Sort products without modifying the original array
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    } else if (sortBy === "quantity") {
      return sortOrder === "asc"
        ? a.quantity - b.quantity
        : b.quantity - a.quantity;
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return {
    selectedProducts,
    sortBy,
    sortOrder,
    search,
    products: filteredProducts,
    setProducts,
    setSearch,
    handleSort,
    handleProductSelect,
    handleProductsSelect,
    handleCompare,
    handleProductRemove,
    handleClearList,
  };
};

export default useProductManagement;
