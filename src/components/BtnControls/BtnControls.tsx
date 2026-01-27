import addBtn from "../../assets/icons/addBtn.svg";
import likeBtn from "../../assets/icons/likeBtn.svg";
import volumeBtn from "../../assets/icons/volumeBtn.svg";
import { Button } from "@/components/uiKit/Button/Button.tsx";
export function BtnControls() {
  return (
    <>
      <Button onClick={() => {}} type="secondary">
        <img
          src={addBtn}
          alt="Icon"
          width="23"
          height="21"
          loading="lazy"
        />{" "}
      </Button>
      <Button onClick={() => {}} type="secondary">
        <img
          src={likeBtn}
          alt="Icon"
          width="28"
          height="28"
          loading="lazy"
        />{" "}
      </Button>
      <Button onClick={() => {}} type="secondary">
        <img
          src={volumeBtn}
          alt="Icon"
          width="28"
          height="28"
          loading="lazy"
        />{" "}
      </Button>
    </>
  );
}
