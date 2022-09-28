import React from "react";
import { SingleCard } from "../types/types";
import styles from "../styles/Card.module.css";
import TypeIcon from "./TypeIcon";
import classNames from "classnames";
import Image from "next/image";

interface Props {
  card: SingleCard;
}

export default function CardComponent({ card }: Props) {
  const { title, subtitle, description, image, type, longText, scaledDown } = card;

  const titleClassname = classNames(styles.title, longText && styles.smaller);
  const imageClassname = classNames(styles.image, scaledDown && styles.scaledDown);
  return (
    <div className={styles.externalContainer}>
      <div className={styles.container}>
        <div className={imageClassname}>
          <Image alt="card image" src={image} layout="fill" />
        </div>

        <TypeIcon type={type} className={styles.type} />

        <div className={titleClassname}>
          <h1>{title}</h1>
        </div>

        <div className={styles.subtitle}>
          <h2>{subtitle}</h2>
        </div>

        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
