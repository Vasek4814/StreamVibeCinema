import styles from "@/components/PlayBtn/PlayBtn.module.css";
import playIcon from "@/assets/icons/playIcon.svg";
import { Button } from "@/components/uiKit/Button/Button.tsx";

export function PlayBtn() {
  return (
    <>
      <Button onClick={() => {}}>
        <img
          className={styles.playIcon}
          src={playIcon}
          alt="playIcon"
          width="18"
          height="19"
          loading="lazy"
        />
        <span className={styles.textBtn}>Play now</span>
      </Button>
    </>
  );
}
