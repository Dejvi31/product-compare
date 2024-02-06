import React from "react";
import Link from "next/link";

const ScrapedProductCard = ({
  scrapedProduct,
  onSelect,
  selected,
  onScrapedProductSelect,
}) => {
  const { id, name, image, properties } = scrapedProduct;

  // let link = "scraped/" + name;
  // link = link.replace(/\s+/g, "-").toLowerCase();

  return (
    <section className="relative transition duration-300 transform hover:scale-105">
      <button
        className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 rounded-full"
        onClick={() => {
          onSelect(id);
        }}
      >
        ⇆
      </button>
      {/* <Link href={link}> */}
      <section
        className={`max-w-md flex items-center justify-center border p-4 m-4 cursor-pointer  ${
          selected ? "border-gray-800" : "border-gray-300"
        }`}
        onClick={() => onScrapedProductSelect(id)}
      >
        <img
          src={image}
          alt={name}
          className="rounded-md object-cover  h-20 mr-4"
        />

        <section className="flex flex-col">
          <p className="text-xl font-semibold mb-2">{name}</p>
          <section className="grid grid-cols-2 gap-1">
            {properties &&
              Object.entries(properties).map(([property, value]) => (
                <section key={property} className="text-xs mb-1">
                  {property}: {value}
                </section>
              ))}
          </section>
        </section>
      </section>
      {/* </Link> */}
    </section>
  );
};

export default ScrapedProductCard;
