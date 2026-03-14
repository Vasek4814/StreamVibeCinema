import styles from "@/components/TitleImage/TitleImage.module.css";
import titleImage from "@/assets/images/titleImage.jpg";

export function TitleImage() {
  return (
    <div className={styles.imgContainer}>
      <img
        className={styles.image}
        src={titleImage}
        alt="Avengers: Endgame"
        loading="lazy"
      />
    </div>
  );
}
