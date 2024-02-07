// import { useSession } from "next-auth/react";

// const ProductDetails = ({
//   name,
//   category,
//   desc,
//   quantity,
//   specifications,
//   price,
// }) => {
//   const session = useSession();
//   return (
//     <>
//       <section className="w-1/2">
//         <section className="flex flex-col h-full">
//           <section>
//             <section className="flex justify-between">
//               <h1 className="text-3xl font-bold mb-2">{name}</h1>
//               <p className="text-lg mb-2">-{category}</p>
//             </section>
//             <section className="flex items-start justify-between">
//               <section className="w-4/5">
//                 <p className="text-sm mb-2">{desc}</p>
//               </section>
//               <section className="flex items-center">
//                 <p className="text-sm mb-2">In Stock: {quantity}</p>
//               </section>
//             </section>

//             <section className="mt-4">
//               <h2 className="text-xl font-bold mb-2">Specifications:</h2>
//               <ul>
//                 <li>Display: {specifications.display} inches</li>
//                 <li>Storage: {specifications.storage} GB</li>
//                 <li>Camera: {specifications.camera} MP</li>
//                 <li>RAM: {specifications.ram} GB</li>
//                 <li>SOC: {specifications.SOC}</li>
//                 <li>Battery: {specifications.battery} mAh</li>
//               </ul>
//             </section>
//           </section>
//           <section className="mt-4 flex items-center justify-center">
//             <p className="text-4xl">${price}</p>
//             <button className=" ml-5  px-4 py-2 rounded">
//               {session?.status === "authenticated" ? (
//                 <img
//                   src="/shopping-cart.svg"
//                   alt="shopping cart"
//                   width={24}
//                   height={24}
//                 />
//               ) : (
//                 "Log in to add to cart"
//               )}
//             </button>
//           </section>
//         </section>
//       </section>
//     </>
//   );
// };

// export default ProductDetails;

import React from "react";
import { BatterySvg, DisplaySvg, PixelSvg, RamSvg } from "../svg";

const ProductDetails = ({ name, properties }) => {
  return (
    <section className="flex flex-col">
      <p className="text-lg font-semibold mb-2">{name}</p>
      <section className="grid grid-cols-2 gap-1">
        {properties &&
          Object.entries(properties).map(([property, value]) => (
            <section
              key={property}
              className="flex items-center gap-1 text-xs mb-1"
            >
              {property === "Display" && <DisplaySvg />}
              {property === "RAM" && <RamSvg />}
              {property === "Pixel" && <PixelSvg />}
              {property === "Battery" && <BatterySvg />}
              {value}
            </section>
          ))}
      </section>
    </section>
  );
};

export default ProductDetails;
