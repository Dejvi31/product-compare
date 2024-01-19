const ProductImage = ({ src, alt }) => (
  <section className="w-1/2 pr-8 ">
    <img src={src} alt={alt} className="w-2/3 object-cover" />
  </section>
);

export default ProductImage;
