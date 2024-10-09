import styles from "./styles.module.css";
import whatsappIcon from "../../../assets/whatsapp-icon.svg";

export const Footer = () => {
  return (
    <footer>
      <div>
        <p>React Shopcart</p>
        <p>Todos los derechos reservados</p>
      </div>
      <div>
        <div>
          <p>Whatsapp</p>
          <img src={whatsappIcon} className={styles.whatsappIcon}></img>
        </div>
      </div>
    </footer>
  );
};
