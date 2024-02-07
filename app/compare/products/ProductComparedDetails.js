import React from "react";
import { BatterySvg, DisplaySvg, PixelSvg, RamSvg } from "../../components/svg";

const ProductComparedDetails = ({ selectedProductsDetails }) => {
  return (
    <section className="grid grid-cols-2 gap-1">
      {selectedProductsDetails.map((product, index) => (
        <section key={index}>
          <img src={product?.image} alt={product?.name} />
          <h3 className="font-bold">{product?.name}</h3>
          <section className="grid grid-cols-2 gap-1 w-3/4">
            {Object.entries(product?.properties || {}).map(
              ([property, value]) => (
                <section key={property}>
                  {property === "Display" && <DisplaySvg />}
                  {property === "RAM" && <RamSvg />}
                  {property === "Pixel" && <PixelSvg />}
                  {property === "Battery" && <BatterySvg />}
                  {value}
                </section>
              )
            )}
          </section>
        </section>
      ))}
    </section>
  );
};

export default ProductComparedDetails;
