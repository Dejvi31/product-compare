import React from "react";
import TableHeader from "./tables/TableHeader";
import TableBody from "./tables/TableBody";

const PopupForm = ({ comparedProducts, products }) => {
  return (
    <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
      <TableHeader />
      <TableBody comparedProducts={comparedProducts} products={products} />
    </table>
  );
};

export default PopupForm;
