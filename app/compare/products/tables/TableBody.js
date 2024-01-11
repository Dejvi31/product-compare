import React from "react";
import TableBodyCell from "./TableBodyCell";

const TableBody = ({ comparedProducts, products }) => (
  <tbody>
    {comparedProducts.map((productId, index) => {
      const { name, image, quantity, price, specifications } =
        products.find((p) => p.id === productId) || {};

      return (
        <tr key={index}>
          <TableBodyCell>{name}</TableBodyCell>
          <TableBodyCell>
            <img
              src={image}
              alt={`${name} Image`}
              className="w-16 h-16 object-cover"
            />
          </TableBodyCell>
          <TableBodyCell>{quantity}</TableBodyCell>
          <TableBodyCell>${price}</TableBodyCell>
          <TableBodyCell>{specifications.join(", ")}</TableBodyCell>
        </tr>
      );
    })}
  </tbody>
);

export default TableBody;