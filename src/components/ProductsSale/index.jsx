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
  const carouselContainerRef = useRef(null);
  const firstCardRef = useRef(null);
  const timeoutRef = useRef(null);

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
    if (!carouselContainerRef.current) return;
    const carouselCopy = carouselContainerRef.current;

    // create a carousel container resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length) {
        setCarouselProductsContainerSize(entries[0].contentRect.width);
      }
    });

    // observe carousel container

    if (carouselContainerRef.current) resizeObserver.observe(carouselContainerRef.current);
    return () => resizeObserver.unobserve(carouselCopy);
  }, [saleProducts]);

  //carousel resized verify and carousel total sections setter
  useEffect(() => {
    if (!carouselContainerRef.current) return;
    const numbOfCardsViewed = Math.round(carouselProductsContainerSize / firstCardRef.current.clientWidth);
    setTotalCarouselSections(Math.round(totalCards / numbOfCardsViewed)); //Total cards|steps results are the number of groups viewed in the carousel.
    setStepsTaken(0);
  }, [carouselProductsContainerSize, totalCards]);

  // carousel arrows handle
  const handleCarouselArrows = (action) => {
    if (!carouselContainerRef.current) return;

    if (action == "back") {
      let newStepsTaken = stepsTaken - 1;
      if (newStepsTaken < 0) newStepsTaken = totalCarouselSections - 1; // 1 is substracted of totalCarouselSections because the group one is already viewed

      setStepsTaken(newStepsTaken);
      return;
    }
    if (action == "foward") {
      let newStepsTaken = stepsTaken + 1;
      if (newStepsTaken > totalCarouselSections - 1) newStepsTaken = 0; // 1 is substracted of totalCarouselSections because the group one is already viewed

      setStepsTaken(newStepsTaken);
      return;
    }
  };

  //carousel control handle
  const handleCarouselControl = (section) => {
    if (!carouselContainerRef.current) return;
    // select the carousel
    setStepsTaken(section);
  };

  const handleTouchEnd = () => {
    //select the carousel container
    const container = carouselContainerRef.current;
    const containerWidth = container.clientWidth;
    const scrollLeft = container.scrollLeft;
    //Get the actual number of slider viewed
    let newStepsTaken = scrollLeft / containerWidth;

    //add or substract 0.2 to stepstaken for rounded the step instead of waiting to reach 0.5
    if (newStepsTaken > stepsTaken + 0.2) {
      newStepsTaken = stepsTaken + 1;
    } else if (newStepsTaken < stepsTaken - 0.2) {
      if (stepsTaken == 0) return;
      newStepsTaken = stepsTaken - 1;
    }

    console.log(newStepsTaken, scrollLeft);
    setStepsTaken(newStepsTaken);
    return;
  };

  // Handle the carousel touch scroll
  const handleScroll = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const container = carouselContainerRef.current;
      const containerWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      //Get the actual number of slider viewed
      const newStepsTaken = Math.round(scrollLeft / containerWidth);

      //scroll again for evite errors
      container.scrollTo({
        left: stepsTaken * containerWidth,
        behavior: "smooth",
      });
      setStepsTaken(newStepsTaken);
    }, 80);

    return;
  };

  //Detect changes in stepsTaken and move the scroll of carousel container
  useEffect(() => {
    if (!carouselContainerRef.current) return;
    const container = carouselContainerRef.current;
    const containerWidth = container.clientWidth;
    container.scrollTo({
      left: stepsTaken * containerWidth,
      behavior: "smooth",
    });
    setControlChecked(stepsTaken);
  }, [stepsTaken]);

  //Remove Refs if the component are desarmed
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return saleProducts == undefined ? (
    ""
  ) : (
    <>
      <section className="container d-flex align-items-center justify-content-center my-5 pb-4 border-bottom">
        <div className={`${styles.saleProductsContainer} row`}>
          {/* Products sale container */}
          <div className={`${styles.saleProductsInfo} col-12 col-lg-6`}>
            <div className="container-fluid row">
              <div className="col-12 d-none d-sm-flex align-items-center justify-content-center">
                <p>¡Oferta por tiempo limitado!</p>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-center">
                <CountdownTimer limitTime={{ hour: [23, 59, 59], day: 20, month: 10, year: 2024 }} />
              </div>
            </div>
          </div>

          {/* Carousel container */}

          <div className={`${styles.carouselContainer} col-12 col-lg-6`}>
            {/* carousel elements */}
            <div className={`${styles.carouselProductsContainer} d-flex justify-content-center`}>
              <div className={`${styles.carouselScrollContaniner}`} ref={carouselContainerRef} onScroll={handleScroll}>
                <div className={`${styles.saleProductsCarousel}`} onTouchEnd={handleTouchEnd}>
                  {saleProducts.map((product, i) => (
                    <div ref={i == 0 ? firstCardRef : null} className={`${styles.cardContainer} px-1`} key={`${product.id}`}>
                      <SaleProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* carousel arrow controls */}
            <div
              className={`${styles.controlArrowContainer}`}
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
