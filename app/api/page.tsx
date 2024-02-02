import { JSDOM } from "jsdom";

const getProducts = async () => {
  const response = await fetch(
    `https://www.gsmarena.com/samsung_galaxy_s24_ultra-12771.php`
  );

  const html = await response.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const downloads = document.querySelector(
    "h1.specs-phone-name-title"
  )?.textContent;
  console.log("downloads", downloads);

  return "";
};

export default getProducts;
