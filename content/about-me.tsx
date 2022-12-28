import React from "react";
import { Pack, SingleCard } from "../types/types";
import profilePicture from "../public/profile-picture.png";
import smcLogo from "../public/smc-logo.png";
import univeLogo from "../public/unive-logo.png";
import contactMe from "../public/contact-me.jpg";
import portfolio from "../public/portfolio.png";
import packBackground from "../public/tree-background.jpg";
import styles from "../styles/Card.module.css";
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";

export const cards: SingleCard[] = [
  {
    title: "Baccega Sandro",
    subtitle: "Software Engineer",
    type: "bio",
    image: profilePicture,
    description: (
      <ul>
        <li>
          Welcome to my online portfolio! 
        </li>
        <li>
          I&apos;m a software engineer specialized in React web development.
        </li>
        <li>
          In this website you&apos;ll find some informations about me and my previous work.
        </li>

        <li>
          <span>
            <MdOutlineFileDownload size="1.5rem" />
          </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Baccega/baccegasandro.dev/blob/main/public/cv.pdf"
          >
            Download my full resume here!
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Baccega Sandro",
    subtitle: "Software Engineer",
    type: "bio",
    image: profilePicture,
    description: (
      <ul>
        <li>
          Welcome to my online portfolio! 
        </li>
        <li>
          I&apos;m a software engineer specialized in React web development.
        </li>
        <li>
          In this website you&apos;ll find some informations about me and my previous work.
        </li>

        <li>
          <span>
            <MdOutlineFileDownload size="1.5rem" />
          </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Baccega/baccegasandro.dev/blob/main/public/cv.pdf"
          >
            Download my full resume here!
          </a>
        </li>
      </ul>
    ),
  },
];

cards.reverse();

const deck: Pack = {
  title: "About me",
  deck: cards,
  type: "bio",
  image: packBackground
}

export default deck;