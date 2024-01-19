const ProductDetails = ({
  name,
  category,
  desc,
  quantity,
  specifications,
  price,
}) => (
  <div className="w-1/2">
    <div className="flex flex-col h-full">
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          <p className="text-lg mb-2">-{category}</p>
        </div>
        <div className="flex items-start justify-between">
          <div className="w-4/5">
            <p className="text-sm mb-2">{desc}</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm mb-2">In Stock: {quantity}</p>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Specifications:</h2>
          <ul>
            {specifications.map((spec, index) => (
              <li key={index} className="text-base mb-1">
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <p className="text-4xl">${price}</p>
        <button className="bg-gray-800 ml-5 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default ProductDetails;
