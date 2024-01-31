const puppeteer = require("puppeteer");

async function scrapeGSMarena() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to GSM Arena's URL
  await page.goto("https://www.gsmarena.com/");

  // Example: Extract the titles of all products
  const productTitles = await page.evaluate(() => {
    const titles = [];
    document.querySelectorAll(".module-header").forEach((element) => {
      titles.push(element.textContent.trim());
    });
    return titles;
  });

  // More scraping logic can be added here to get other details

  await browser.close();

  return productTitles;
}

module.exports = { scrapeGSMarena };
