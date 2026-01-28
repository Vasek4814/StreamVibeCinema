import { Button } from "@/components/uiKit/Button/Button.tsx";
import left from "@/assets/icons/left.svg";
import React from "react";
import cls from "classnames";
import styles from "./ArrowBtn.module.css";

type Props = {
  onClick: () => void;
  direction?: "left" | "right";
};

export const ArrowBtn: React.FC<Props> = ({ onClick, direction = "left" }) => {
  return (
    <>
      <Button onClick={onClick} type="secondary">
        <img
          className={cls(styles.icon, {
            [styles.left]: direction === "left",
            [styles.rigth]: direction === "right",
          })}
          src={left}
          alt="Icon"
          width="20"
          loading="lazy"
        />
      </Button>
    </>
  );
};
