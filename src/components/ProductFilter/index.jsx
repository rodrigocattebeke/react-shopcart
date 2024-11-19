import styles from "./styles.module.css";

export const ProductFilter = ({ products = null, setFilteredProducts }) => {
  if (!products) return console.warn("No hay productos que filtrar");
  if (typeof setFilteredProducts !== "function") return console.warn("Hay que especificar una funcion para setear los productos filtrados en un state.");

  //se necesita un onchange que maneje los cambios en los filtros

  // setFilteredProducts(products);

  return (
    <div className="container-fluid">
      <div className="container">
        <div>
          <div className={`${styles.filterOptionsContainer}`}>
            <p className="mb-0 me-1">Ordenar por</p>
            <select name="filter" value={"relevance"} title="products filter">
              <option value="relevance" title="relevance">
                Relevancia
              </option>
              <option value="price" title="price">
                Precio
              </option>
            </select>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
