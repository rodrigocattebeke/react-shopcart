import "./card.css";

export const ProductCard = ({ product = {}, onAddToCart }) => {
  const handleAddToCart = (product) => {
    onAddToCart(product);
  };
  return (
    <div className="card" data-id={product.id}>
      <div className="card-img-container">
        <img src={product.image} className="card-img" alt={product.title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
          agregar al carrito
        </button>
      </div>
    </div>
  );
};
