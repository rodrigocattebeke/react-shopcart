import { Link } from "react-router-dom";
import simpleFetch from "../../../hooks/simpleFetch";
import { apiUrls } from "../../../config/apiUrls";
import { useEffect, useState } from "react";
import styles from "./headerLinks.module.css";

export const HeaderLinks = ({ responsiveClass = "" }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    let result = await simpleFetch(apiUrls.categories);
    setCategories(result.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className={`navbar navbar-expand-md header-links-container ${responsiveClass}`}>
      <div className="container-fluid">
        <Link className="navbar-brand order-2 order-md-1" to="/">
          React Shopcart
        </Link>
        <button className="navbar-toggler order-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse order-3" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown ">
              <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </div>
              <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
                {categories.length < 1
                  ? ""
                  : categories.map((category, index) => (
                      <li key={index}>
                        <Link className="dropdown-item" to={`/category/${category}`}>
                          {category}
                        </Link>
                      </li>
                    ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
