import { useContext, useEffect, useState } from "react";
import { ProductsSlider } from "../ProductsSlider";
import { ProductsContext } from "../../../contextTemp/ProductsContext";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { deliveryGratisImg, nuevosProductosImg } from "../../../assets/img";

export const HomeSliders = ({ setIsLoading = null }) => {
  const { productsState } = useContext(ProductsContext);
  const [productStateCopy, setProductStateCopy] = useState(null);

  useEffect(() => {
    if (!productsState) return;
    setProductStateCopy(productsState);
    if (setIsLoading) setIsLoading(false);
  }, [productsState, setIsLoading]);

  return !productStateCopy ? null : (
    <div className="container-fluid">
      <div className="row row-gap-5 my-5">
        {/* first slider */}
        <div className="col-12 col-lg-6">
          <div className="container d-flex flex-column justify-content-around" style={{ minHeight: "550px" }}>
            <div className={`${styles.sliderTitle}`}>
              <img src={`${nuevosProductosImg}`} className={`${styles.sliderTitleImg}`}></img>
              <p>Nuevos Productos</p>
            </div>
            <ProductsSlider products={productStateCopy.slice(5)} />
            <div className={`${styles.viewAllButtonContainer}`}>
              <Link to={`/category/electronics`}>
                <button className="btn button-color-primary">
                  Ver todos
                  <span className="material-symbols-outlined ms-1">arrow_forward</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* // slider */}

        <div className="col-12 col-lg-6">
          <div className="container d-flex flex-column justify-content-around" style={{ minHeight: "550px" }}>
            <div className={`${styles.sliderTitle}`}>
              <img src={`${deliveryGratisImg}`} className={`${styles.sliderTitleImg}`}></img>
              <p>
                Productos Con <span className={`${styles.sliderTitleBold}`}>Envío Gratis A Todo El País</span>
              </p>
            </div>
            <ProductsSlider products={productStateCopy.slice(7)} />
            <div className={`${styles.viewAllButtonContainer}`}>
              <Link to={`/category/electronics`}>
                <button className="btn button-color-primary">
                  Ver todos
                  <span className="material-symbols-outlined ms-1">arrow_forward</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* // slider */}

        <div className="col-12 col-lg-6">
          <div className="container d-flex flex-column justify-content-around" style={{ minHeight: "550px" }}>
            <div className={`${styles.sliderTitle}`}>
              <p>Ropa Moderna</p>
            </div>
            <ProductsSlider products={productStateCopy.slice(2)} />
            <div className={`${styles.viewAllButtonContainer}`}>
              <Link to={`/category/electronics`}>
                <button className="btn button-color-primary">
                  Ver todos
                  <span className="material-symbols-outlined ms-1">arrow_forward</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* // slider */}

        <div className="col-12 col-lg-6">
          <div className="container d-flex flex-column justify-content-around" style={{ minHeight: "550px" }}>
            <div className={`${styles.sliderTitle}`}>
              <p>Electronicos</p>
            </div>
            <ProductsSlider products={productStateCopy.slice(9)} />
            <div className={`${styles.viewAllButtonContainer}`}>
              <Link to={`/category/electronics`}>
                <button className="btn button-color-primary">
                  Ver todos
                  <span className="material-symbols-outlined ms-1">arrow_forward</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
