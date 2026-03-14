import styles from "./CardFilmHeader.module.css";
import { Slyder } from "@/components/uiKit/Slyder/Slyder.tsx";

export const CardFilmHeder = () => {
  return (
    <div className={styles.CardFilmHeder}>
      <h2 className={styles.h2}>Our Genres</h2>
      <Slyder />
    </div>
  );
};
