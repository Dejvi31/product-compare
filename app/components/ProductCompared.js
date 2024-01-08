import React, {useRef, useEffect} from "react";

const ProductCompared = ({ comparedProducts, onClose, products }) => {
  const popupRef = useRef(null)

  useEffect(()=> {
    const handleClickOutside = (event) => {
      if(popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    }
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside)
    }
  },[onClose])


  return (
    <div className="popup">
      <div className="popup-content" ref={popupRef}>
        <h2 className="text-2xl">Compared Products</h2>
        <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
          <thead className="bg-slate-50 dark:bg-slate-700">
            <tr>
              <th className="w-1/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                Name
              </th>
              <th className="w-1/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                Image
              </th>
              <th className="w-1/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                Quantity
              </th>
              <th className="w-1/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                Price
              </th>
              <th className="w-2/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                Specifications
              </th>
            </tr>
          </thead>
          <tbody>
            {comparedProducts.map((productId, index) => {
              const product = products.find((p) => p.id === productId);

              return (
                <tr key={index}>
                  <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    {product?.name}
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                  <img src={product?.image} alt={`${product?.name} Image`} style={{ width: '100%' }} />
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    {product?.quantity}
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    ${product?.price}
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    {product?.specifications.join(", ")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={onClose} >Close</button>
      </div>
    </div>
  );
};

export default ProductCompared;
