import { useContext, useEffect, useState } from "react";
import { QuantitySelector } from "../../Common/QuantitySelector";
import "./ViewProduct.css";
import simpleFetch from "../../../hooks/SimpleFetch";
import { CartContext } from "../../../Context/CartContext";
import { Loader } from "../../Common/Loader";
import { ErrorScreen } from "../../Common/ErrorScreen";

export const ViewProduct = () => {
  const { addProductToCart } = useContext(CartContext);

  const [productQuantity, setProductQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [isSucces, setIsSucces] = useState(true);

  const fakeStoreApiMainUrl = "https://fakestoreapi.com";
  const fakeStoreApiProducts = "https://fakestoreapi.com/products/";

  const handleQuantity = (quantity) => {
    setProductQuantity(quantity);
  };

  const handleAddToCart = () => {
    let shopProduct = product;
    shopProduct.quantity = productQuantity;
    addProductToCart(shopProduct);
  };

  const getProduct = async () => {
    const productId = location.pathname.split("/products/")[1];
    const productUrl = `${fakeStoreApiProducts + productId}`;
    const result = await simpleFetch(productUrl);
    setIsSucces(result.isSucces);
    setProduct(result.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  // VALIDATE PRODUCT
  if (!isSucces) return <ErrorScreen></ErrorScreen>;

  return Object.keys(product) == 0 ? (
    <Loader></Loader>
  ) : (
    <section className="container">
      <div className="product-section-1 mt-3">
        <div className="product-img">
          <img src={product.image}></img>
        </div>
        <div className="product-info-container">
          <div className="product-info">
            <h2>{product.title}</h2>
            <p>Precio: ${product.price}</p>
          </div>
          <div className="addCart-container">
            <QuantitySelector initialQuantity={1} onQuantityChange={handleQuantity}></QuantitySelector>
            <button className="btn button-color-primary" onClick={handleAddToCart}>
              <span className="material-symbols-outlined">add_shopping_cart</span> Comprar
            </button>
          </div>
        </div>
      </div>
      <div className="product-section-2 mt-5">
        <p>Descripción del producto</p>
        <hr></hr>
        <div className="product-description">
          <p>{product.description}</p>
        </div>
      </div>
    </section>
  );
};
