import { useContext, useEffect, useRef, useState } from "react";
import formDataRetriever from "../../../hooks/formDataRetriever";
import { ProductsContext } from "../../../context/ProductsContext";
import styles from "./styles.module.css";
import { SearchResult } from "./SearchResult";

const SearchInput = ({ responsiveClass = "" }) => {
  const initialForm = {
    searchInput: "",
  };

  const { productsState } = useContext(ProductsContext);
  const [isFocused, setIsFocused] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const formRef = useRef(null);
  const productsContainerRef = useRef(null);
  const timeoutRef = useRef(null);
  const { onFormInputChange, formData } = formDataRetriever(initialForm);

  const handleSubmit = async (e) => {
    //filter results
    let result = productsState.filter((product) => product.title.toLowerCase().includes(formData.searchInput.toLowerCase()));
    setSearchResult(result);
  };

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleMouseDown = (e) => {
    //detect if clicked outside of search results
    if (formRef.current && !formRef.current.contains(e.target) && productsContainerRef.current && !productsContainerRef.current.contains(e.target)) {
      setIsFocused(false);
      setSearchResult(null);
    }
  };

  //IF product are clicked, remove search product result and overlay
  const handleProductClick = () => {
    setIsFocused(false);
    setSearchResult(null);
    formData.searchInput = "";
  };

  useEffect(() => {
    if (!formData.searchInput) {
      setSearchResult(null);
      setIsFocused(false);
      return;
    }
    timeoutRef.current = setTimeout(() => {
      let result = productsState.filter((product) => product.title.toLowerCase().includes(formData.searchInput.toLowerCase()));
      setIsFocused(true);
      setSearchResult(result);
    }, 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [formData.searchInput, productsState]);

  //Delete mouse event
  useEffect(() => {
    isFocused ? document.addEventListener("mousedown", handleMouseDown) : document.removeEventListener("mousedown", handleMouseDown);

    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [isFocused]);

  return (
    <>
      <div className={`${responsiveClass} position-relative d-flex justify-content-center `}>
        <form className={`container input-group`} ref={formRef}>
          <input type="text" name="searchInput" className="form-control" placeholder="Buscar producto" aria-label="search" aria-describedby="search-button" value={formData.searchInput} onChange={onFormInputChange} />
          <button name="searchButton" className="btn btn-outline-secondary" type="button" id="search-button" onClick={handleSubmit}>
            Buscar
          </button>
        </form>

        {/* Search results */}
        <div className={`${styles.productsContainer}`} ref={productsContainerRef}>
          {/* check searchResult, if it's null, don't render products, otherwise, render */}
          {searchResult ? (
            <div className="container-fluid p-0" onClick={handleProductClick}>
              <ul className="list-group">
                {searchResult.length > 0 ? (
                  searchResult.map((product) => (
                    <li key={product.id} className="list-group-item list-group-item-action">
                      <SearchResult product={product} />
                    </li>
                  ))
                ) : (
                  <p>No se encontraron resultados para la busqueda</p>
                )}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={`${styles.overlay} ${isFocused ? styles.active : ""}`}></div>
    </>
  );
};

export default SearchInput;
