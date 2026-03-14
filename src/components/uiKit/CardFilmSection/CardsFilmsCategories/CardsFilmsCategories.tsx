import styles from "./CardsFilmsCategories.module.css";
import { CardsFilms } from "@/components/uiKit/CardFilmSection/CardsFilmsCategories/CardsFilms/CardsFilms.tsx";

export const CardsFilmsCategories = () => {
  return (
    <>
      <div className={styles.cardsFilmsCategoriesContainer}>
        <div className={styles.cardsFilmsCategories}>
          <CardsFilms text={"Ужасы"} />
        </div>
      </div>
    </>
  );
};
