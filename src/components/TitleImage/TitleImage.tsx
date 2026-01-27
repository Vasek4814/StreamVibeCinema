import styles from "@/components/TitleSection/TitleSection.module.css";
import titleImage from "@/assets/images/titleImage.jpg";

export function TitleImage () {
  return (<>
    <img
      className={styles.image}
      src={titleImage}
      alt='Avengers: Endgame'
      loading="lazy"
    />
  </>)
}