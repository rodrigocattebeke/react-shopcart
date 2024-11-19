import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";

export const CategoryIndex = () => {
  const Location = useLocation();
  const [categoryPaths, setCategoryPaths] = useState(null);

  useEffect(() => {
    const getCategory = async () => {
      setCategoryPaths(Location.pathname.split("category/")[1].split("/")); //set categorys of URL
    };
    getCategory();
  }, [Location.pathname]);

  const pathToLiArray = (categorysArray) => {
    if (!categorysArray) return;
    let lastPath = "/category";
    let liOfCategorysArray = categorysArray.map((category, i) => {
      category = decodeURIComponent(category);
      if (i < categorysArray.length - 1) {
        lastPath += `/${category}`;
        return (
          <li key={category} className={`${styles.prevCategory + " " + styles.category}`}>
            <a href={`${lastPath}`}>{`${category}`}</a>
          </li>
        );
      } else {
        return (
          <li key={category} className={`${styles.category}`}>
            <p className="m-0">{`${category}`}</p>
          </li>
        );
      }
    });
    return liOfCategorysArray;
  };
  return (
    <div className={`${styles.indexContainer}`}>
      <div className="container">
        <ul className="d-flex m-0">
          <li className={`${styles.prevCategory + " " + styles.category}`}>
            <a href="/">Inicio</a>
          </li>
          {pathToLiArray(categoryPaths)}
        </ul>
      </div>
    </div>
  );
};
