import { useEffect, useRef, useState } from "react";
import simpleFetch from "../../hooks/SimpleFetch";
import { apiUrls } from "../../config/apiUrls";
import styles from "./styles.module.css";
import { SaleProductCard } from "../Product/SaleProductCard";
import { CountdownTimer } from "../Common/CountdownTimer";

const d = document;

export const ProductsSale = ({ setIsLoading }) => {
  const [carouselProductsContainerSize, setCarouselProductsContainerSize] = useState(0);
  const [controlChecked, setControlChecked] = useState(0);
  const [saleProducts, setSaleProducts] = useState(undefined);
  const [stepsTaken, setStepsTaken] = useState(0);
  const [totalCards, setTotalCards] = useState(0);
  const [totalCarouselSections, setTotalCarouselSections] = useState(0);
  const carouselProductsContainerRef = useRef(null);
  const firstCardRef = useRef(null);

  // get sale products and set isLoading false
  useEffect(() => {
    const getSaleProducts = async () => {
      // totalProducts = total products in sale section
      const totalProducts = 5;
      setTotalCards(totalProducts); // totalCards = totalProducts viewed

      let res = await simpleFetch(apiUrls.saleProducts);
      res = res.data.slice(0, totalProducts);
      setSaleProducts(res);
      setIsLoading(false);
    };
    getSaleProducts();
  }, [setIsLoading]);

  // observe and set carousel total width
  useEffect(() => {
    //set carousel width and total sections of carousel
    if (!carouselProductsContainerRef.current) return;
    const carouselCopy = carouselProductsContainerRef.current;

    // create a carousel container resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length) {
        setCarouselProductsContainerSize(entries[0].contentRect.width);
      }
    });

    // observe carousel container

    if (carouselProductsContainerRef.current) resizeObserver.observe(carouselProductsContainerRef.current);
    return () => resizeObserver.unobserve(carouselCopy);
  }, [saleProducts]);

  //carousel resized verify and carousel total sections setter
  useEffect(() => {
    if (!firstCardRef.current) return;
    const numbOfCardsViewed = Math.round(carouselProductsContainerSize / firstCardRef.current.clientWidth);
    setTotalCarouselSections(Math.round(totalCards / numbOfCardsViewed)); //Total cards / steps results are the number of groups viewed in the carousel.

    const carousel = d.querySelector(`.${styles.saleProductsCarousel}`);
    carousel.style.transform = `translateX(0%)`;
    setStepsTaken(0);
    // if the carousel go to the section 0, the control checked is 0
    setControlChecked(0);
  }, [carouselProductsContainerSize, totalCards]);

  // carousel arrows handle
  const handleCarouselArrows = (action) => {
    if (!carouselProductsContainerRef.current) return;
    // select the carousel
    const carousel = d.querySelector(`.${styles.saleProductsCarousel}`);

    if (action == "back") {
      let newStepsTaken = stepsTaken - 1;
      if (newStepsTaken < 0) newStepsTaken = totalCarouselSections - 1; // 1 is substracted of totalCarouselSections because the group one is already viewed

      carousel.style.transform = `translateX(-${newStepsTaken * 100}%)`;
      setStepsTaken(newStepsTaken);
      setControlChecked(newStepsTaken);

      return;
    }
    if (action == "foward") {
      let newStepsTaken = stepsTaken + 1;
      if (newStepsTaken > totalCarouselSections - 1) newStepsTaken = 0; // 1 is substracted of totalCarouselSections because the group one is already viewed

      carousel.style.transform = `translateX(-${newStepsTaken * 100}%)`;
      setStepsTaken(newStepsTaken);
      setControlChecked(newStepsTaken);

      return;
    }
  };

  //carousel control handle
  const handleCarouselControl = (section) => {
    if (!carouselProductsContainerRef.current) return;
    // select the carousel
    const carousel = d.querySelector(`.${styles.saleProductsCarousel}`);
    carousel.style.transform = `translateX(-${section * 100}%)`;
    setStepsTaken(section);
    //set the carousel control checked
    setControlChecked(section);
  };

  return saleProducts == undefined ? (
    ""
  ) : (
    <>
      <section className="container d-flex align-items-center justify-content-center my-5 pb-4 border-bottom">
        <div className={`${styles.saleProductsContainer} row`}>
          <div className={`${styles.saleProductsInfo} col-12 col-lg-6`}>
            <div className="container-fluid row">
              <div className="col-12 d-flex align-items-center justify-content-center">
                <p>¡Oferta por tiempo limitado!</p>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-center">
                <CountdownTimer limitTime={{ hour: [23, 59, 59], day: 15, month: 10, year: 2024 }} />
              </div>
            </div>
          </div>
          <div className={`${styles.carouselContainer} col-12 col-lg-6`}>
            {/* carousel elements */}
            <div className={`${styles.carouselProductsContainer} d-flex justify-content-center`} ref={carouselProductsContainerRef}>
              <div className={`${styles.saleProductsCarousel}`}>
                {saleProducts.map((product, i) => (
                  <div ref={i == 0 ? firstCardRef : null} className={`${styles.cardContainer} px-1`} key={`${product.id}`}>
                    <SaleProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            {/* carousel arrow controls */}
            <div
              className={`${styles.controlArrowContainer + " " + styles.controlArrowContainerLeft}`}
              onClick={() => {
                handleCarouselArrows("back");
              }}
            >
              <span className={`${styles.controlArrow} material-symbols-outlined`}>arrow_back_ios</span>
            </div>
            <div className={`${styles.controlArrowContainer + " " + styles.controlArrowContainerRight}`} onClick={() => handleCarouselArrows("foward")}>
              <span className={`${styles.controlArrow} material-symbols-outlined`}>arrow_forward_ios</span>
            </div>

            {/* carousel controls */}
            <div className={`${styles.carouselControl}`}>
              {Array(totalCarouselSections)
                .fill(0)
                .map((e, i) => (
                  <span key={`${i}`} className="material-symbols-outlined" onClick={() => handleCarouselControl(i)}>
                    {controlChecked == i ? "radio_button_checked" : "radio_button_unchecked"}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
