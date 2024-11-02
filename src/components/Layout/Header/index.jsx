import { useEffect, useRef } from "react";
import { NavBar } from "../NavBar";
import styles from "./styles.module.css";
export const Header = () => {
  const headerRef = useRef(null);
  const prevScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      //120px is the height of the header when it is at the md breakpoint
      if (headerRef.current.clientHeight < 120) return;

      const currentScroll = window.scrollY;

      if (currentScroll > prevScrollRef.current) {
        headerRef.current.classList.add(`${styles.compactHeader}`);
      } else {
        headerRef.current.classList.remove(`${styles.compactHeader}`);
      }
      prevScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header ref={headerRef}>
      <NavBar></NavBar>
    </header>
  );
};
