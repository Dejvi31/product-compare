const ProductImage = ({ src, alt }) => (
  <div className="w-1/2 pr-8 ">
    <img src={src} alt={alt} className="w-2/3 object-cover" />
  </div>
);

export default ProductImage;
