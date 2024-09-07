import "./ViewProduct.css";

export const ViewProduct = ({ product = {} }) => {
  return (
    <section className="container">
      <div className="product-section-1">
        <div className="product-img">
          <p>Product image</p>
        </div>
        <div className="product-info">
          <h2>Product name</h2>
          <p>Product price</p>
          <div>
            <div>
              <button>-</button>
              <input type="text"></input>
              <button>+</button>
            </div>
            <button>Agregar al carrito</button>
          </div>
        </div>
      </div>
      <div className="product-section-2">
        <p>mas informacion en caso de que la hubiera</p>
      </div>
    </section>
  );
};
