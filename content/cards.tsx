import React from "react";
import { SingleCard } from "../types/types";
import profilePicture from "../public/profile-picture.png";
import smcLogo from "../public/smc-logo.png";
import univeLogo from "../public/unive-logo.png";
import contactMe from "../public/contact-me.jpg";
import portfolio from "../public/portfolio.png";
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
          <span>⚛️</span>Specialized in React web development
        </li>
        <li>
          <span>📸</span>Enjoys Computer Vision
        </li>
        <li>
          <span>🤖</span>Loves automating stuff
        </li>
        <li>
          <span>📍</span>From Padua, Italy{" "}
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
            Download my full CV here!
          </a>
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
        {/* <li>
          <span>
            <RiGithubFill size="1.5rem" />
          </span>{" "}
          <a target="_blank" rel="noreferrer" href="https://github.com/Baccega/smartphone-based-rti">
            Check out my thesis here!
          </a>
        </li> */}
      </ul>
    ),
    longText: true,
  },
  {
    image: smcLogo,
    description: (
      <ul>
        <li>
          <span>💻</span>Refined a complex data analytics dashboard product in React
        </li>
        <li>
          <span>🧪</span>Introduced a custom visual regression testing software in order to have a robust UI 
        </li>
        <li>
          <span>👨🏻‍💻</span>Mentored 3 junior devs
        </li>
        <li>
          <span>⚙️</span>Improved CI/CD pipeline performance up to 4x
        </li>
      </ul>
    ),
    type: "work",
    subtitle: "Frontend engineer - Treviso, Italy",
    title: "SMC Treviso",
  },
  {
    image: portfolio,
    description: (
      <ul>
        <li>
          <span>⚛️</span>React.js + Next.js
        </li>
        <li>
          <span>💫</span>React-Spring
        </li>
        <li>
          <span>🎨</span>SCSS
        </li>
        <li>
          <span>
            <RiGithubFill size="1.5rem" />
          </span>{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Baccega/baccegasandro.dev"
          >
            Check out the source code here!
          </a>
        </li>
      </ul>
    ),
    type: "project",
    title: "This portfolio",
  },
  {
    image: contactMe,
    description: (
      <ul>
        <li className={styles.smallerFontSize}>
          <span>
            <RiMailLine size="1.5rem" />
          </span>{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:mail.sandro.baccega@gmail.com"
          >
            mail.sandro.baccega@gmail.com
          </a>
        </li>
        <li>
          <span>
            <RiGithubFill size="1.5rem" />
          </span>{" "}
          <a target="_blank" rel="noreferrer" href="https://github.com/Baccega">
            Baccega
          </a>
        </li>
        <li>
          <span>
            <RiLinkedinBoxFill color="#0173b2" size="1.5rem" />
          </span>{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sandro-baccega"
          >
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
