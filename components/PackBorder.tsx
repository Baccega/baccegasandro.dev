import classNames from "classnames";
import React from "react";
import styles from "../styles/Pack.module.scss";

type Props = {
    className: string;
    rotated?: boolean;
}

export default function PackBorderComponent(props: Props) {
  const { className, rotated=false } = props
    const combined = classNames(styles.divider, className);

  if(rotated) return (
    <div className={styles.rotated}>
      <div className={combined}/>
    </div>
  )
  
  return (
    <div className={combined}/>
  );
}
