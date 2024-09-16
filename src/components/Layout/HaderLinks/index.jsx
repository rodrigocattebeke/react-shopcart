import { Link } from "react-router-dom";
export const HeaderLinks = ({ responsiveClass = "" }) => {
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
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
