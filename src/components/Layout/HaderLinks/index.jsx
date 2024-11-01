import { Link } from "react-router-dom";
import simpleFetch from "../../../hooks/simpleFetch";
import { apiUrls } from "../../../config/apiUrls";
import { useEffect, useState } from "react";
import styles from "./headerLinks.module.css";
import logo from "../../../assets/logo-sin-fondo.png";

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
    <section className={`navbar navbar-expand-md header-links-container py-0 ${responsiveClass}`}>
      <div className="container-fluid justify-content-md-evenly">
        <div className="order-2 order-md-1  d-flex justify-content-center w-50">
          <Link className="navbar-brand" to="/">
            <img src={logo} className={`${styles.navbarImg}`} />
          </Link>
        </div>
        <div className="order-1 w-50">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse order-3 mt-3 mt-md-0 w-50" id="navbarNavDropdown">
          <ul className="navbar-nav position-relative">
            <li className="nav-item dropdown position-relative">
              <div className={`nav-link dropdown-toggle ${styles.categoriesDropdown}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </div>
              <ul className={`${styles.dropdownMenu} dropdown-menu position-absolute`}>
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
