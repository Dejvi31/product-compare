import React from "react";
import TableHeader from "./TableHeader";

const PopupForm = ({ comparedProducts, products }) => {
  return (
    <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
      <TableHeader />
      <tbody>
        {comparedProducts.map((productId, index) => {
          const { name, image, quantity, price, specifications } =
            products.find((p) => p.id === productId) || {};

          return (
            <tr key={index}>
              <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                {name}
              </td>
              <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <img
                  src={image}
                  alt={`${name} Image`}
                  style={{ width: "100%" }}
                />
              </td>
              <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                {quantity}
              </td>
              <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                ${price}
              </td>
              <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                {specifications.join(", ")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PopupForm;
