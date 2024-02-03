import { JSDOM } from "jsdom";

export const dynamic = "force-dynamic";
export async function GET() {
  const response = await fetch(`https://versus.com/en/phone`);

  const html = await response.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const phoneNodes = document.querySelectorAll("p.Item__name___1fPgt");
  const phoneNames = Array.from(phoneNodes).map((node) =>
    node?.textContent?.trim()
  );
  const phoneImageNodes = document.querySelectorAll(
    "img[data-cy='modernImage']"
  );
  const phoneImages = Array.from(phoneImageNodes).map((img) =>
    img.getAttribute("src")
  );

  console.log("phoneNames", phoneNames);
  console.log("phoneImages", phoneImages);

  return Response.json({
    phoneNames,
    phoneImages,
  });
}
