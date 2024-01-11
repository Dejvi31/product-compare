import React from "react";

const TableHeaderCell = ({ width, label }) => (
  <th
    className={`w-${width} text-center border border-slate-300 dark:border-slate-600 font-semibold p-2 text-slate-900 dark:text-slate-200 text-left`}
  >
    {label}
  </th>
);

export default TableHeaderCell;
