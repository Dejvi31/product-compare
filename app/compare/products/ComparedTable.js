import React from "react";

const ComparedTable = ({ comparedProducts, products }) => {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="py-2 px-4 border">Specifications</th>
          {comparedProducts.map((productId, index) => {
            const { name } = products.find((p) => p.id === productId) || {};
            return (
              <th key={index} className="py-2 px-4 border">
                {name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border">Display (inches)</td>
          {comparedProducts.map((productId, index) => {
            const { specifications } =
              products.find((p) => p.id === productId) || {};
            return (
              <td key={index} className="py-2 px-4 border">
                {specifications.display}
              </td>
            );
          })}
        </tr>
        <tr>
          <td className="py-2 px-4 border">SOC</td>
          {comparedProducts.map((productId, index) => {
            const { specifications } =
              products.find((p) => p.id === productId) || {};
            return (
              <td key={index} className="py-2 px-4 border">
                {specifications.SOC}
              </td>
            );
          })}
        </tr>
        <tr>
          <td className="py-2 px-4 border">Battery (mAh)</td>
          {comparedProducts.map((productId, index) => {
            const { specifications } =
              products.find((p) => p.id === productId) || {};
            return (
              <td key={index} className="py-2 px-4 border">
                {specifications.battery}
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default ComparedTable;
