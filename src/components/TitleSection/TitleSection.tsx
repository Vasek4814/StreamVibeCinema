import styles from "./TitleSection.module.css";
import { TitleImage } from "@/components/TitleImage/TitleImage.tsx";
import { Text } from "@/components/TitleText/Text.tsx";
import { PlayBtn } from "@/components/PlayBtn/PlayBtn.tsx";
import { BtnControls } from "@/components/BtnControls/BtnControls.tsx";
import { Slyder } from "@/components/uiKit/Slyder/Slyder.tsx";

export function TitleSection() {
  return (
    <>
      <div className={styles.container}>
        <TitleImage />
      </div>
      <div className={styles.subContainer}>
        <Text />
        <div className={styles.controls}>
          <PlayBtn />
          <BtnControls />
        </div>
        <Slyder />
      </div>
    </>
  );
}
