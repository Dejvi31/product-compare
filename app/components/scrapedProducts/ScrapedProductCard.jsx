import React from "react";

const ScrapedProductCard = ({ name, index, phoneData, onSelect, onRemove }) => {
  return (
    <section className=" relative transition duration-300 transform hover:scale-105 ">
      <button
        className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 rounded-full"
        onClick={() => onRemove(index)}
      >
        ⇆
      </button>

      <section
        key={index}
        className="flex items-center border p-4 mb-4 rounded-md shadow-md"
        onClick={() => onSelect(index)}
        style={{ cursor: "pointer" }}
      >
        <img
          src={phoneData.images[index]}
          alt={name}
          className="rounded-md shadow-md w-16 h-16 mr-4"
        />

        <section className="flex flex-col">
          <p className="text-xl font-semibold mb-2">{name}</p>
          <section className="grid grid-cols-2 gap-1">
            {phoneData.properties[index] &&
              Object.entries(phoneData.properties[index]).map(
                ([property, value]) => (
                  <section key={property} className="text-sm mb-1">
                    <strong>{value}</strong>
                  </section>
                )
              )}
          </section>
        </section>
      </section>
    </section>
  );
};

export default ScrapedProductCard;
