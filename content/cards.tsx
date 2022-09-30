import React from "react";
import { SingleCard } from "../types/types";
import profilePicture from "../public/profile-picture.png";
import smcLogo from "../public/smc-logo.png";
import univeLogo from "../public/unive-logo.png";
import contactMe from "../public/contact-me3.jpg";
import styles from "../styles/Card.module.css";
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";

export const cards: SingleCard[] = [
  {
    title: "Baccega Sandro",
    subtitle: "Software Engineer",
    type: "bio",
    image: profilePicture,
    description: (
      <ul>
        <li>
          <span>⚛️</span>Specialized in web development with React
        </li>
        <li>
          <span>📸</span>Enjoys Computer Vision
        </li>
        <li>
          <span>🤖</span>Loves automations
        </li>
        <li>
          <span>📍</span>From Padua, Italy{" "}
        </li>
      </ul>
    ),
  },
  {
    image: univeLogo,
    type: "education",
    subtitle: "Ca' Foscari University of Venice",
    title: "Master in Computer Science",
    description: (
      <ul>
        <li>
          <span>📸</span>Thesis on Computer Vision with OpenCV
        </li>
        <li>
          <span>👨🏻‍🏫</span>Teaching assistant for the Object Oriented Programming
          course
        </li>
      </ul>
    ),
    longText: true,
  },
  {
    image: smcLogo,
    description: (
      <ul>
        <li>
          <span>💻</span>Developed a complex data analytics dashboard product in
          React
        </li>
        <li>
          <span>🧪</span>Created custom visual regression testing software
        </li>
        <li>
          <span>👨🏻‍💻</span>Mentored 3 junior devs
        </li>
        <li>
          <span>⚙️</span>Revamped CI/CD pipeline
        </li>
      </ul>
    ),
    type: "work",
    subtitle: "Frontend developer",
    title: "SMC Treviso",
  },
  // {
  //   image: "/public/profile-picture.png",
  //   description: "This portfolio",
  //   type: "project",
  //   subtitle: "This portfolio",
  //   title: "Portfolio",
  // },
  {
    image: contactMe,
    description: (
      <ul>
        <li className={styles.smallerFontSize}>
          <span>
            <RiMailLine size={30} />
          </span>{" "}
          <a target="_blank" rel="noreferrer" href="mailto:mail.sandro.baccega@gmail.com">
            mail.sandro.baccega@gmail.com
          </a>
        </li>
        <li>
          <span>
            <RiGithubFill size={30} />
          </span>{" "}
          <a target="_blank" rel="noreferrer" href="https://github.com/Baccega">
            Baccega
          </a>
        </li>
        <li>
          <span>
            <RiLinkedinBoxFill color="#0173b2" size={30} />
          </span>{" "}
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sandro-baccega">
            sandro-baccega
          </a>
        </li>
      </ul>
    ),
    type: "contact",
    title: "Contact me!",
  },
];

cards.reverse();
