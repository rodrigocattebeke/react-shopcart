import styles from "./styles.module.css";
import whatsappIcon from "../../../assets/whatsapp-icon.svg";
import facebookIcon from "../../../assets/facebook-icon.svg";
import instagramIcon from "../../../assets/instagram-icon.svg";

export const Footer = () => {
  return (
    <footer className="container-fluid border-top border-1 py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <p>React Shopcart</p>
            <p>Todos los derechos reservados</p>
          </div>
          <div className="col-12 col-sm-6">
            <div>
              <p>Contáctanos:</p>
            </div>
            <ul>
              <li>
                <div className={`${styles.iconContainer} d-flex gap-2`}>
                  <p>Whatsapp</p>
                  <img src={whatsappIcon} className={styles.icon}></img>
                </div>
              </li>
              <li>
                <div className={`${styles.iconContainer} d-flex gap-2`}>
                  <p>Instagram</p>
                  <img src={instagramIcon} className={styles.icon}></img>
                </div>
              </li>
              <li>
                <div className={`${styles.iconContainer} d-flex gap-2`}>
                  <p>Facebook</p>
                  <img src={facebookIcon} className={styles.icon}></img>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
