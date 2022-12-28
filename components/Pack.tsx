import React from "react";
import { Pack } from "../types/types";
import styles from "../styles/Pack.module.scss";
import TypeIcon from "./TypeIcon";
import classNames from "classnames";
import Image from "next/image";
import ribbon from "../public/ribbon.png";
import PackBorder from "./PackBorder";

interface Props {
  pack: Pack;
  onClick: any;
}


export default function PackComponent({ pack, onClick }: Props) {
  const { title, type, image } = pack;

  const titleClassname = classNames(styles.title);

  return (
    // <div className={styles.externalContainer}>
    <div className={styles.container} onClick={onClick}>
      <PackBorder rotated className={styles.border} />
      <div className={styles.content}>
        <TypeIcon type={type} className={styles.type} />

        <h1>{title}</h1>
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority={false}
          alt="pack-background"
        />
      </div>
      <PackBorder className={styles.border2} />
    </div>
    // </div>
  );
}
