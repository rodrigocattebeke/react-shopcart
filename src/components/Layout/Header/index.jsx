import { useEffect, useRef } from "react";
import { NavBar } from "../NavBar";
import styles from "./styles.module.css";
import { useElementRefSize } from "../../../hooks/useElementRefSize";
export const Header = () => {
  const headerRef = useRef(null);
  const { height, width } = useElementRefSize(headerRef);
  const prevScrollRef = useRef(0);
  const timeout = useRef(null);

  const maxExpandHeaderHeight = 110; //110px is the max height of expand header. More than 110, it is in mobile view
  const minExpandHeaderWidth = 768; //md breakpoint break in >768px, view in bootstrap docs.

  //move the header when scrolling for view only search bar
  useEffect(() => {
    const handleScroll = () => {
      //120px is the height of the header when it is at the md breakpoint
      if (headerRef.current.clientHeight < 120) return;

      const currentScroll = window.scrollY;

      if (currentScroll > prevScrollRef.current) {
        headerRef.current.classList.add(`${styles.compactHeader}`);
        document.querySelector(".offcanvas").style.display = "none";
      } else {
        headerRef.current.classList.remove(`${styles.compactHeader}`);
        if (!timeout.current) {
          timeout.current = setTimeout(() => {
            document.querySelector(".offcanvas").style.display = "flex";
            timeout.current = null;
          }, 500);
        }
      }
      prevScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //if the window is resized, check that it is applied to the header translateX(0), for avoid visual bugs
  useEffect(() => {
    if (height < maxExpandHeaderHeight && width >= minExpandHeaderWidth) {
      // if (headerRef.current) headerRef.current.style.transform = "translateY(0)"; //If the header leaves 50% of the top, and the screen is resized, to avoid visual bugs, the position of the header at Y is reset.
      if (headerRef.current) {
        if (headerRef.current.classList.contains(`${styles.compactHeader}`)) {
          headerRef.current.classList.remove(`${styles.compactHeader}`);
        }
      }
    }
  }, [height, width]);

  //clear timeout
  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  return (
    <header ref={headerRef}>
      <NavBar></NavBar>
    </header>
  );
};
