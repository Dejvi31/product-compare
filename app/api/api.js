export const fetchScrapedProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api");
    const data = await response.json();

    if (data.productsArray) {
      const scrapedProductsArray = data.productsArray.map((productObject) => ({
        id: productObject.id,
        name: productObject.name,
        image: productObject.image,
        properties: productObject.properties,
      }));

      return scrapedProductsArray;
    } else {
      console.error("Error: No product data found in the response");
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
