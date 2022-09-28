import React from "react";
import { SingleCard } from "../types/types";
import styles from "../styles/Card.module.css";
import TypeIcon from "./TypeIcon";

interface Props {
  card: SingleCard;
}

export default function CardComponent({ card }: Props) {
  const { title, subtitle, description, image, type } = card;

  return (
    <div className={styles.externalContainer}>
      <div className={styles.container}>
        <div className={styles.image}>{image}</div>

        <TypeIcon type={type} className={styles.type} />
        <h1 className={styles.title}>{title}</h1>

        <h2 className={styles.subtitle}>{subtitle}</h2>
        
        <p className={styles.description}>{description}</p>

      </div>
    </div>
  );
}
