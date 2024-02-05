// import { JSDOM } from "jsdom";

// export const dynamic = "force-dynamic";
// export async function GET() {
//   const response = await fetch(`https://versus.com/en/phone`);

//   const html = await response.text();
//   const dom = new JSDOM(html);
//   const document = dom.window.document;

//   const phoneNodes = document.querySelectorAll("p.Item__name___1fPgt");
//   const phoneNames = Array.from(phoneNodes).map((node) =>
//     node?.textContent?.trim()
//   );
//   const phoneImageNodes = document.querySelectorAll(
//     "img[data-cy='modernImage']"
//   );
//   const phoneImages = Array.from(phoneImageNodes).map((img) =>
//     img.getAttribute("src")
//   );

//   const itemContainer = document.querySelector(".Item__cardProps___Hxy-F");
//   const propElements = itemContainer?.querySelectorAll(
//     '[data-cy="mouchoCardProps"] [data-cy="mouchoCardPropValue"]'
//   );
//   const properties = ["Display", "RAM", "Pixel Density", "Battery"];
//   const phoneProperties: Record<string, string> = {};
//   properties.forEach((property, index) => {
//     const element = propElements?.[index];
//     const value = element ? element.textContent?.trim() : "";
//     phoneProperties[property] = value!;
//   });

//   console.log("phoneNames", phoneNames);
//   console.log("phoneImages", phoneImages);
//   console.log("Phone Properties:", phoneProperties);

//   return Response.json({
//     phoneNames,
//     phoneImages,
//     phoneProperties,
//   });
// }

import { JSDOM } from "jsdom";

interface PhoneProperties {
  [key: string]: string;
}

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

  const propContainers = document.querySelectorAll(".Item__cardProps___Hxy-F");
  const phonePropertiesArray: PhoneProperties[] = [];

  propContainers.forEach((container) => {
    const propElements = container.querySelectorAll(
      '[data-cy="mouchoCardProps"] [data-cy="mouchoCardPropValue"]'
    );

    const phoneProperties: PhoneProperties = {};

    propElements.forEach((element, index) => {
      const value = element ? element.textContent?.trim() : "";
      phoneProperties[`Property${index + 1}`] = value!;
    });

    phonePropertiesArray.push(phoneProperties);
  });

  // console.log("phoneNames", phoneNames);
  // console.log("phoneImages", phoneImages);
  // console.log("Phone Properties:", phonePropertiesArray);

  return Response.json({
    phoneNames,
    phoneImages,
    phoneProperties: phonePropertiesArray,
  });
}
