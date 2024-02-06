import { JSDOM } from "jsdom";

interface PhoneProperties {
  [key: string]: string;
}

export const dynamic = "force-dynamic";
export async function GET() {
  try {
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

    const propContainers = document.querySelectorAll(
      ".Item__cardProps___Hxy-F"
    );
    const phonePropertiesArray: PhoneProperties[] = [];

    propContainers.forEach((container) => {
      const propElements = container.querySelectorAll(
        '[data-cy="mouchoCardProps"] [data-cy="mouchoCardPropValue"]'
      );

      const phoneProperties: PhoneProperties = {};
      const propertyNames = [`Display`, `RAM`, `Pixel`, `Battery`];

      propElements.forEach((element, index) => {
        const propertyName = propertyNames[index];

        const value = element ? element.textContent?.trim() : "";
        phoneProperties[propertyName] = value!;
      });

      phonePropertiesArray.push(phoneProperties);
    });

    const productsArray = phoneNames.map((name, id) => ({
      id,
      name,
      image: phoneImages[id],
      properties: phonePropertiesArray[id],
    }));
    return Response.json({
      productsArray,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return Response.json({ error: "Failed to fetch data" });
  }
}
