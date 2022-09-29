import { Link } from "react-router-dom";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div>
        <Link>PokeMon GO</Link>
      </div>
    </div>
  );
};
export default Footer;
