import formDataRetriever from "../../../hooks/formDataRetriever";
import simpleFetch from "../../../hooks/simpleFetch";

const mainUrl = "https://fakestoreapi.com",
  productsUrl = "https://fakestoreapi.com/products";

const SearchInput = ({ responsiveClass = "" }) => {
  const initialForm = {
    searchInput: "",
  };

  const { onFormInputChange, formData } = formDataRetriever(initialForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const products = await simpleFetch(productsUrl);
    console.log(products);
    // console.log(formData.searchInput);
  };

  return (
    <div className={`${responsiveClass}`}>
      <form className={`container input-group`}>
        <input type="text" name="searchInput" className="form-control" placeholder="Buscar producto" aria-label="search" aria-describedby="search-button" value={formData.searchInput} onChange={onFormInputChange} />
        <button name="searchButton" className="btn btn-outline-secondary" type="button" id="search-button" onClick={handleSubmit}>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
