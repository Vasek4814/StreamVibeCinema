import "./MainPage.module.css";
import { Header } from "../Header/Header";
import "@a1rth/css-normalize";
import { TitleSection } from "../TitleSection/TitleSection.tsx";
import styles from "@/components/MainPage/MainPage.module.css";

function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Header />
      <TitleSection />
    </div>
  );
}

export default MainPage;
