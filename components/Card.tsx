import React from "react";
import { SingleCard } from "../types/types";
import styles from "../styles/Card.module.css";
import TypeIcon from "./TypeIcon";
import classNames from "classnames";
import Image from "next/image";
import cartTexture from "../public/card-texture.jpg";
import ribbon from "../public/ribbon.png";

interface Props {
  card: SingleCard;
}

export default function CardComponent({ card }: Props) {
  const { title, subtitle, description, image, type, longText } =
    card;

  const titleClassname = classNames(styles.title, longText && styles.smaller);
  const imageClassname = classNames(styles.image);
  return (
    <div className={styles.externalContainer}>
      <div className={styles.container}>
        <Image
          src={cartTexture}
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
