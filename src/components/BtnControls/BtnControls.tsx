import addBtn from "../../assets/icons/addBtn.svg";
import likeBtn from "../../assets/icons/likeBtn.svg";
import volumeBtn from "../../assets/icons/volumeBtn.svg";
import { Button } from "@/components/uiKit/Button/Button.tsx";
import styles from "@/components/TitleSection/TitleSection.module.css";

export function BtnControls() {
  return (
    <div className={styles.btnControls}>
      <Button onClick={() => {}} type="secondary">
        <img src={addBtn} alt="Icon" width="45" loading="lazy" />{" "}
      </Button>
      <Button onClick={() => {}} type="secondary">
        <img src={likeBtn} alt="Icon" width="50" loading="lazy" />{" "}
      </Button>
      <Button onClick={() => {}} type="secondary">
        <img src={volumeBtn} alt="Icon" width="50" loading="lazy" />{" "}
      </Button>
    </div>
  );
}
