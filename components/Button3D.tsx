import React from "react";
import { IconType } from "react-icons";
import styles from "../styles/Button3D.module.scss";

interface Props {
  onClick: (event: any) => void;
  text: string;
  icon: IconType;
  disabled: boolean;
}

export default function Button3D(props: Props) {
  const { onClick, text, disabled, icon } = props;
  return (
    <button
      disabled={disabled}
      className={styles.button30}
      onClick={onClick}
      role="button"
    >
      <>
        {text}
        {icon}
      </>
    </button>
  );
}
