import { useContext, useEffect, useState } from "react";
import { QuantitySelector } from "../../Common/QuantitySelector";
import styles from "./ViewProduct.module.css";
import simpleFetch from "../../../hooks/simpleFetch";
import { CartContext } from "../../../Context/CartContext";
import { Loader } from "../../Common/Loader";
import { ErrorScreen } from "../../Common/ErrorScreen";
import { Link, useLocation } from "react-router-dom";
import { apiUrls } from "../../../config/apiUrls";

export const ViewProduct = () => {
  const { addProductToCart } = useContext(CartContext);

  const location = useLocation();

  const [isSuccess, setIsSuccess] = useState(true);
  const [productQuantity, setProductQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  const handleQuantity = (quantity) => {
    setProductQuantity(quantity);
  };

  const handleAddToCart = () => {
    const shopProduct = { ...product, quantity: productQuantity };
    addProductToCart(shopProduct);
  };

  useEffect(() => {
    const productId = location.pathname.split("/products/")[1];
    const productUrl = apiUrls.productDetails(productId);
    const getProduct = async () => {
      setProduct(null);
      const result = await simpleFetch(productUrl);
      setIsSuccess(result.isSuccess);
      setProduct(result.data);
    };
    getProduct();
  }, [location.pathname]);

  // VALIDATE PRODUCT
  if (!isSuccess) return <ErrorScreen />;

  return !product ? (
    <Loader />
  ) : (
    <section className="container">
      <div className={`${styles.titleContainer}`}>
        <h2>{product?.title}</h2>
      </div>
      <div className={`${styles.productSection1} row pt-4 border-top border-1`}>
        <div className={`${styles.productImgContainer} col-12 col-sm-6 mb-4`}>
          <img src={product?.image}></img>
        </div>
        <div className={`${styles.productInfoContainer} col-12 col-sm-6 mb-4`}>
          <div className={`${styles.productInfo}`}>
            <small>
              Categoría:{" "}
              <Link to={`/category/${product?.category}`} className="product-link">
                {product?.category}
              </Link>
            </small>
            <p>Precio: ${product?.price}</p>
          </div>
          <div className={`${styles.addCartContainer}`}>
            <QuantitySelector initialQuantity={1} onQuantityChange={handleQuantity} />
            <button className="btn button-color-primary" onClick={handleAddToCart}>
              <span className="material-symbols-outlined">add_shopping_cart</span> Comprar
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.productSection2} mt-5`}>
        <p>Descripción del producto</p>
        <hr></hr>
        <div className={`${styles.productDescription}`}>
          <p>{product?.description}</p>
        </div>
      </div>
    </section>
  );
};
