import styles from "./index.module.css";
import HomeImage from "../../../static/images/HomeImage.jpg";

const Home = () => {
  return (
    <div className={styles.wrapperHome}>
      <div className={styles.background}>
        <img className={styles.image} src={HomeImage} alt="pokemon" />
      </div>
      <div className={styles.homeTitle}>
        <h2>THE BEST GIFT FOR A FAN</h2>
      </div>
    </div>
  );
};

export default Home;
