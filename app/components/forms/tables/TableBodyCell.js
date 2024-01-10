import React from "react";

const TableBodyCell = ({ children }) => (
  <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
    {children}
  </td>
);

export default TableBodyCell;
