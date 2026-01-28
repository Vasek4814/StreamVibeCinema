import styles from "@/components/uiKit/Slyder/SlyderIndicators/SlyderIndicator.module.css";
import shape from "@/assets/icons/Shape.png";
export const SlyderIndicators = () => {
  return (
    <div className={styles.indicator}>
      <img
        className={styles.SlyderIcon}
        src={shape}
        alt=""
        height="4"
        width="4"
        loading="lazy"
      />
      <img
        className={styles.SlyderIcon}
        src={shape}
        alt=""
        height="4"
        width="10"
        loading="lazy"
      />
      <img
        className={styles.SlyderIcon}
        src={shape}
        alt=""
        height="4"
        width="10"
        loading="lazy"
      />
      <img
        className={styles.SlyderIcon}
        src={shape}
        alt=""
        height="4"
        width="10"
        loading="lazy"
      />
    </div>
  );
};
