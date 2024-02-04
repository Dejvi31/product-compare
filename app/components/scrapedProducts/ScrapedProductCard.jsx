import React from "react";

const ScrapedProductCard = ({ name, index, phoneData }) => {
  const handleClick = () => {
    const details = {
      name: phoneData.names[index],
      image: phoneData.images[index],
      properties: phoneData.properties[index],
    };

    console.log("Selected Product Details:", details);
  };

  return (
    <section
      key={index}
      className="flex items-center border p-4 mb-4 rounded-md shadow-md"
      onClick={handleClick}
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
          {Object.entries(phoneData.properties[index]).map(
            ([property, value]) => (
              <section key={property} className="text-sm mb-1">
                <strong>{value}</strong>
              </section>
            )
          )}
        </section>
      </section>
    </section>
  );
};

export default ScrapedProductCard;
