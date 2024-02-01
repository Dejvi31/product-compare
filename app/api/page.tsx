import { NextApiRequest, NextApiResponse } from "next";
import { JSDOM } from "jsdom";

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch("https://www.npmjs.com/package/puppeteer");
  const html = await response.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const downloads = document.querySelector("._9ba9a726")?.textContent;
  console.log("downloads", downloads);

  res.status(200).json({ downloads });
};

export default getProducts;
