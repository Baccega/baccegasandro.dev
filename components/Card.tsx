import React from "react";
import { SingleCard } from "../types/types";
import styles from "../styles/Card.module.css";
import TypeIcon from "./TypeIcon";
import classNames from "classnames";

interface Props {
  card: SingleCard;
}

export default function CardComponent({ card }: Props) {
  const { title, subtitle, description, image, type, longText } = card;

  const titleClassname = classNames(styles.title, longText && styles.smaller);
  return (
    <div className={styles.externalContainer}>
      <div className={styles.container}>
        <div className={styles.image}>{image}</div>

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
