import React from "react";
import { SingleCard } from "../types/types";
import styles from "../styles/Card.module.css";
import TypeIcon from "./TypeIcon";
import classNames from "classnames";
import Image from "next/image";
import cardTexture1 from "../public/card-texture.jpeg";
import cardTexture2 from "../public/card-texture-2.jpeg";
import cardTexture3 from "../public/card-texture-3.jpeg";
import cardTexture4 from "../public/card-texture-4.jpeg";
import cardTexture5 from "../public/card-texture-5.jpeg";
import ribbon from "../public/ribbon.png";

interface Props {
  card: SingleCard;
}

function getCardTexture(type: SingleCard["type"]) {
  switch (type) {
    case "bio":
      return cardTexture1;
    case "work":
      return cardTexture2;
    case "project":
      return cardTexture3;
    case "education":
      return cardTexture4;
    case "contact":
      return cardTexture5;
  }
}

export default function CardComponent({ card }: Props) {
  const { title, subtitle, description, image, type, longText } = card;

  const titleClassname = classNames(styles.title, longText && styles.smaller);
  const imageClassname = classNames(styles.image);

  const texture = getCardTexture(type);
  return (
    <div className={styles.externalContainer}>
      <div className={styles.container}>
        <Image
          src={texture}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority={false}
          alt="card-background"
          style={{ borderRadius: 20, filter: "brightness(0.9)" }}
        />
        <div className={imageClassname}>
          <Image
            placeholder="blur"
            priority={false}
            alt="card-image"
            src={image}
            layout="fill"
          />
        </div>

        <TypeIcon type={type} className={styles.type} />

        <div className={titleClassname}>
          <Image
            placeholder="blur"
            priority
            src={ribbon}
            alt={title}
            layout="fill"
          />
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}
