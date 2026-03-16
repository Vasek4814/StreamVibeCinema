import arrowRight from "@/assets/icons/right.svg";
import styles from "@/components/uiKit/CardFilmSection/CardFilmSection.module.css";
import type { CardProps } from "@/components/uiKit/CardFilmSection/CardFilmSection.tsx";
export const CardFilms = ({ title, images }: CardProps) => {
  return (
    <div className={styles.cardsFilmsCategoriesContainer}>
      <div className={styles.cardsFilmsCategories}>
        <div className={styles.cardsFilms}>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <div className={styles.imgContainer}>
                <a className={styles.imgContainerUrl} href="/">
                  <img
                    src={images.img1}
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <img
                    src={images.img2}
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                </a>
                <a className={styles.imgContainerUrl} href="/">
                  <img
                    src={images.img3}
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <img
                    src={images.img4}
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div className={styles.cardCategoriesUrl}>
              <a className={styles.nameCategories} href="/">
                {title}
                <img
                  src={arrowRight}
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
