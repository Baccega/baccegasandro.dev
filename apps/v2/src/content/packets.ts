import type { StaticImageData } from "next/image";
import { ABOUT_ME } from "./about-me/aboutMe";
import { CONTACT_ME } from "./contact-me/contactMe";
import { PROJECTS } from "./projects/projects";
import { WORK_EXPERIENCE } from "./work-experience/workExperience";
import type { IconType } from "react-icons";

export type Packet = {
	id: number;
	slug: string;
	title: string;
	texture: StaticImageData;
	deck: Deck;
	portrait: string;
	wip?: boolean;
};

export type Card = {
	id: number;
	title: string;
	subtitle?: string;
	description: Array<string | JSX.Element>;
	texture: StaticImageData;
	image: string;
	headingSize?: "tiny" | "small" | "medium" | "default";
	descriptionSize?: "tiny" | "small" | "medium" | "default";
	badges: Array<{ description: string; icon: IconType }>;
	wip?: boolean;
};

export type Deck = Card[];

export const PACKETS = [
	ABOUT_ME,
	WORK_EXPERIENCE,
	PROJECTS,
	CONTACT_ME,
] satisfies Packet[];
