import React from "react";
import { SingleCard } from "../types/types";
import { GiAce } from "react-icons/gi";
import { RiBracesFill } from "react-icons/ri";
import { MdOutlineWork, MdSchool, MdOutlineMessage } from "react-icons/md";
import styles from "../styles/Card.module.css";

interface Props {
  type: SingleCard["type"];
  className: string;
}

export default function TypeIcon(props: Props) {
  const { type, className } = props;

  switch (type) {
    case "work":
      return <MdOutlineWork className={className} />;
    case "education":
      return <MdSchool className={className} />;
    case "project":
      return <GiAce className={className} />;
    case "contact":
      return <MdOutlineMessage className={className} />;
    case "bio":
      return <RiBracesFill className={className} />;
  }
}
