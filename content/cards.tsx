import Link from "next/link";
import React from "react";
import { SingleCard } from "../types/types";
import profilePicture from "../public/profile-picture.png";
import smcLogo from "../public/smc-logo.png";
import univeLogo from "../public/unive-logo4.png";
import contactMe from "../public/contact-me.png";

export const cards: SingleCard[] = [
  {
    title: "Baccega Sandro",
    subtitle: "Web Developer",
    type: "bio",
    image: profilePicture,
    description: <>test</>,
  },
  {
    image: univeLogo,
    type: "education",
    subtitle: "Ca' Foscari University of Venice",
    title: "Master in Computer Science",
    description: (
      <ul>
        <li>Thesis on Computer Vision with OpenCV</li>
        <li>Teaching assistant for OOP</li>
      </ul>
    ),
    longText: true,
    imageFitNone: true,
  },
  {
    image: smcLogo,
    description: <>test</>,
    type: "work",
    subtitle: "Frontend developer",
    title: "SMC Treviso",
    imageFitNone: true,
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
        <li>Github: <Link target='_blank' href="https://github.com/Baccega">Baccega</Link></li>
        <li>LinkedIn: <Link target='_blank' href="https://www.linkedin.com/in/sandro-baccega">sandro-baccega</Link></li>
      </ul>
    ),
    type: "contact",
    title: "Contact me!",
    imageFitNone: true,
  },
];

cards.reverse();
