import "./MainPage.module.css";
import { Header } from "../Header/Header";
import "@a1rth/css-normalize";
import { TitleSection } from "../TitleSection/TitleSection.tsx";
import styles from "@/components/MainPage/MainPage.module.css";
import { ArrowBtn } from "@/components/uiKit/ArrowBtn/ArrowBtn.tsx";

function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Header />
      <TitleSection />
      <div>
        <ArrowBtn onClick={() => {}} />
        <ArrowBtn onClick={() => {}} direction="right" />
      </div>
    </div>
  );
}

export default MainPage;
