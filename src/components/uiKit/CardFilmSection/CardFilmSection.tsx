import styles from "@/components/uiKit/CardFilmSection/CardFilmSection.module.css";
import { CardFilmHeder } from "@/components/uiKit/CardFilmSection/CardFilmHeader/CardFilmHeder.tsx";
import { CardsFilms } from "@/components/uiKit/CardFilmSection/CardsFilmsCategories/CardsFilms/CardsFilms.tsx";
import img1 from "@/assets/images/Image.png";
import img2 from "@/assets/images/Image2.png";
import img3 from "@/assets/images/Image3.png";
import img4 from "@/assets/images/Image4.png";
import arrowRight from "@/assets/icons/right.svg";

export const CardFilmSection = () => {
  return (
    <div className={styles.cardfilm}>
      <CardFilmHeder />
      <div className={styles.categories}>
        <div className={styles.cardsFilmsCategoriesContainer}>
          <div className={styles.cardsFilmsCategories}>
            <div className={styles.cardsFilms}>
              <div className={styles.card}>
                <div className={styles.cardImg}>
                  <div className={styles.imgContainer}>
                    <a className={styles.imgContainerUrl} href="/">
                      <img
                        src={img1}
                        alt=""
                        width=""
                        height=""
                        loading="lazy"
                      />
                      <img
                        src={img2}
                        alt=""
                        width=""
                        height=""
                        loading="lazy"
                      />
                    </a>
                    <a className={styles.imgContainerUrl} href="/">
                      <img
                        src={img3}
                        alt=""
                        width=""
                        height=""
                        loading="lazy"
                      />
                      <img
                        src={img4}
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
                    dsada
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
      </div>
    </div>
  );
};
