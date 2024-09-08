import type { StaticImageData } from "next/image";
import { ABOUT_ME } from "./about-me/aboutMe";
import { CONTACT_ME } from "./contact-me/contactMe";
import { PROJECTS } from "./projects/projects";
import { WORK_EXPERIENCE } from "./work-experience/workExperience";

export type Deck = {
	id: number;
	title: string;
	description: string;
	texture: StaticImageData;
}[];

export const PACKETS = [ABOUT_ME, WORK_EXPERIENCE, PROJECTS, CONTACT_ME];
