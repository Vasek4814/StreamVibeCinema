import img1 from "@/assets/images/Image.png";
import img2 from "../../../../../assets/images/Image2.png";
import img3 from "../../../../../assets/images/Image3.png";
import img4 from "../../../../../assets/images/Image4.png";
import arrowRight from "@/assets/icons/right.svg";
import styles from "./CardsFilms.module.css";
export const CardsFilms = ({ text }) => {
  return (
    <div className={styles.cardsFilms}>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <div className={styles.imgContainer}>
            <a className={styles.imgContainerUrl} href="/">
              <img src={img1} alt="" width="" height="" loading="lazy" />
              <img src={img2} alt="" width="" height="" loading="lazy" />
            </a>
            <a className={styles.imgContainerUrl} href="/">
              <img src={img3} alt="" width="" height="" loading="lazy" />
              <img src={img4} alt="" width="" height="" loading="lazy" />
            </a>
          </div>
        </div>
        <div className={styles.cardCategoriesUrl}>
          <a className={styles.nameCategories} href="/">
            {text}
            <img src={arrowRight} alt="" width="" height="" loading="lazy" />
          </a>
        </div>
      </div>
    </div>
  );
};
