import type { StaticImageData } from "next/image";
import { ABOUT_ME } from "./about-me/aboutMe";
import { CONTACT_ME } from "./contact-me/contactMe";
import { PROJECTS } from "./projects/projects";
import { WORK_EXPERIENCE } from "./work-experience/workExperience";

export type Packet = {
	id: number;
	slug: string;
	title: string;
	texture: StaticImageData;
	deck: Deck;
};

export type Card = {
	id: number;
	title: string;
	subtitle?: string;
	description: string[];
	texture: StaticImageData;
	headingSize?: "small" | "default";
};

export type Deck = Card[];

export const PACKETS = [
	ABOUT_ME,
	WORK_EXPERIENCE,
	PROJECTS,
	CONTACT_ME,
] satisfies Packet[];
