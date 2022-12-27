import React from "react";
import { SingleCard } from "../types/types";
import styles from "../styles/Packet.module.scss";
import TypeIcon from "./TypeIcon";
import classNames from "classnames";
import Image from "next/image";
import cartTexture from "../public/card-texture.jpg";
import ribbon from "../public/ribbon.png";
import PacketBorder from "./PacketBorder";

type Packet = {
  title: string;
  type: "work" | "education" | "project" | "contact" | "bio";
}

interface Props {
  packet: Packet;
  onClick: any;
}


export default function Packet({ packet, onClick }: Props) {
  const { title, type } = packet;

  const titleClassname = classNames(styles.title);
  const texture = cartTexture;

  return (
    // <div className={styles.externalContainer}>
    <div className={styles.container} onClick={onClick}>
      <PacketBorder rotated className={styles.border} />
      <div className={styles.content}>
        {/* <Image
          src={texture}
          layout="fill"
          objectFit="fill"
          placeholder="blur"
          priority={false}
          alt="packet-background"
        /> */}
        <TypeIcon type={type} className={styles.type} />

        <h1>About Me</h1>
        <h2>vsd</h2>
      </div>
      <PacketBorder className={styles.border2} />
    </div>
    // </div>
  );
}
