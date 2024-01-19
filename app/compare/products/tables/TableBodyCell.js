import React from "react";

const TableBodyCell = ({ children }) => (
  <td className="border  border-slate-300 dark:border-slate-700 py-1 text-slate-500 dark:text-slate-400">
    <section className="flex items-center justify-center">{children}</section>
  </td>
);

export default TableBodyCell;
