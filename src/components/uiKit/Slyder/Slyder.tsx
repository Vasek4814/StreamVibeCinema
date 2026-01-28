import { ArrowBtn } from "@/components/uiKit/ArrowBtn/ArrowBtn.tsx";
import styles from "@/components/uiKit/Slyder/Slyder.module.css";
import { SlyderIndicators } from "@/components/uiKit/Slyder/SlyderIndicators/SlyderIndicators.tsx";

export const Slyder = () => {
  return (
    <div className={styles.slyder}>
      <ArrowBtn onClick={() => {}} />
      <SlyderIndicators />
      <ArrowBtn onClick={() => {}} direction="right" />
    </div>
  );
};
