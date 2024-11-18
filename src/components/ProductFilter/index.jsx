export const ProductFilter = (products = null) => {
  if (!products) return console.warn("No hay productos que filtrar");

  console.log(products);
  return <div>ProductFilter</div>;
};
