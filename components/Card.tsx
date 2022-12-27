import React from "react";
import { SingleCard } from "../types/types";
import styles from "../styles/Card.module.css";
import TypeIcon from "./TypeIcon";
import classNames from "classnames";
import Image from "next/image";
import cartTexture from "../public/card-texture.jpg";
import cartTexture1 from "../public/card-texture.jpg";
import cartTexture2 from "../public/card-texture2.jpg";
import cartTexture3 from "../public/card-texture3.jpg";
import cartTexture4 from "../public/card-texture5.jpg";
import cartTexture5 from "../public/card-texture6.jpg";
import ribbon from "../public/ribbon.png";

interface Props {
  card: SingleCard;
}

function getCardTexture(type: SingleCard["type"]) {
  switch (type) {
    case "bio":
    case "contact":
      return cartTexture1;
    case "work":
      return cartTexture2;
    case "education":
      return cartTexture3;
    case "project":
      return cartTexture4;
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
          style={{ borderRadius: 20 }}
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
