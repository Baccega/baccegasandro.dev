import Link from "next/link";
import React from "react";
import { SingleCard } from "../types/types";
import profilePicture from "../public/profile-picture.png";
import smcLogo from "../public/smc-logo2.png";
import univeLogo from "../public/unive-logo5.png";
import contactMe from "../public/contact-me2.png";

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
          <span>🇮🇹</span>From Padua, Italy{" "}
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
          <span>💻</span>Developed complex data analytics dashboard in React
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
        <li>Email: mail.sandro.baccega@gmail.com</li>
        <li>
          Github:{" "}
          <Link target="_blank" href="https://github.com/Baccega">
            Baccega
          </Link>
        </li>
        <li>
          LinkedIn:{" "}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/sandro-baccega"
          >
            sandro-baccega
          </Link>
        </li>
      </ul>
    ),
    type: "contact",
    title: "Contact me!",
  },
];

cards.reverse();
