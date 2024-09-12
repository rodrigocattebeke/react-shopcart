import { QuantitySelector } from "../../Common/QuantitySelector";
import "./ViewProduct.css";

export const ViewProduct = () => {
  const handleQuantity = (quantity) => {
    console.log(quantity);
  };

  return (
    <section className="container">
      <div className="product-section-1">
        <div className="product-img bg-primary">
          <p>Product image</p>
        </div>
        <div className="product-info">
          <h2>Product name</h2>
          <p>Product price</p>
          <div>
            <QuantitySelector initialQuantity={1} onQuantityChange={handleQuantity}></QuantitySelector>
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
