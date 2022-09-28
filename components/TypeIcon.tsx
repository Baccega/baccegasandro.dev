import React from "react";
import { SingleCard } from "../types/types";
import { GiBarbute, GiAce, GiMailbox } from "react-icons/gi";
import { MdWork, MdSchool } from "react-icons/md";
import styles from "../styles/Card.module.css";

interface Props {
  type: SingleCard["type"];
  className: string;
}

export default function TypeIcon(props: Props) {
  const { type, className } = props;

  switch (type) {
    case "work":
      return <MdWork className={className} />;
    case "education":
      return <MdSchool className={className} />;
    case "project":
      return <GiAce className={className} />;
    case "contact":
      return <GiMailbox className={className} />;
    case "bio":
      return <GiBarbute className={className} />;
  }
}
