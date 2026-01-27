import styles from "./Button.module.css";
import React, { ReactNode } from "react";
import cls from "classnames";

type Props = {
  onClick: () => void;
  children: ReactNode;
  type?: "primary" | "secondary";
};
export const Button: React.FC<Props> = ({ children, type = "primary" }) => {
  return (
    <>
      <button
        className={cls(styles.btn, {
          [styles.primary]: type === "primary",
          [styles.secondary]: type === "secondary",
        })}
      >
        {children}
      </button>
    </>
  );
};
