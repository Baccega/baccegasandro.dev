import React from "react";
import styles from "../styles/Button3D.module.scss";

interface Props {
  onClick: (event: any) => void;
  text: string;
  icon: string;
}

export default function Button3D(props: Props) {
  const { onClick, text } = props;
  return (
    <button onClick={onClick} className={styles.button3D}>
      {text}
    </button>
  );
}
