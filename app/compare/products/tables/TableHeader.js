import React from "react";
import TableHeaderCell from "./TableHeaderCell";

const TableHeader = () => (
  <thead className="bg-slate-50 dark:bg-slate-700">
    <tr>
      <TableHeaderCell width="1/5" label="Name" />
      <TableHeaderCell width="1/5" label="Image" />
      <TableHeaderCell width="1/5" label="Quantity" />
      <TableHeaderCell width="1/5" label="Price" />
      <TableHeaderCell width="2/5" label="Specifications" />
    </tr>
  </thead>
);

export default TableHeader;
