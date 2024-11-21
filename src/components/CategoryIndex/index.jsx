import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";

export const CategoryIndex = () => {
  const location = useLocation();
  const [categoryPaths, setCategoryPaths] = useState(null);
  const [uniquesPaths, setUniquesPaths] = useState(["search"]); //Add a path (in lower case) that does not have a subpath, for view in the index the name of the path.

  useEffect(() => {
    const getCategory = async () => {
      if (uniquesPaths.includes(location.pathname.split("/")[1].toLowerCase())) {
        setCategoryPaths([location.pathname.split("/")[1].toLowerCase()]);
      } else {
        setCategoryPaths(location.pathname.split("/")[2].split("/")); //set all sub categorys of URL
      }
    };
    getCategory();
  }, [location.pathname, uniquesPaths]);

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
    <div className={`${styles.indexContainer} z-3`}>
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
