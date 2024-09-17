import type { Deck, Packet } from "../packets";
import leafTexture from "/public/textures/card-texture-8.jpeg";
import waveTexture from "/public/textures/card-texture-2.jpeg";
import circuitTexture from "/public/textures/card-texture-3.jpeg";
import stormTexture from "/public/textures/card-texture-4.jpeg";
import magmaTexture from "/public/textures/card-texture-9.jpeg";

const deck = [
	{
		id: 8,
		title: "Contact me",
		description: ["See the options"],
		texture: magmaTexture,
	},
	{
		id: 7,
		title: "Wirecube GmbH",
		description: ["Fullstack engineer", "Graz, Austria", "Find out more!"],
		texture: stormTexture,
	},
	{
		id: 4,
		title: "Moved to Graz, Austria",
		description: ["January 2021"],
		texture: leafTexture,
		headingSize: "small",
	},
	{
		id: 6,
		title: "SMC Treviso",
		description: [
			"First internship and job as a Frontend engineer",
			"Treviso, Italy",
			"Find out more!",
		],
		texture: stormTexture,
	},
	{
		id: 2,
		title: "Master in Computer Science",
		description: ["From Ca' Foscari University of Venice"],
		texture: leafTexture,
		headingSize: "small",
	},
	{
		id: 5,
		title: "Passionate about technology",
		description: [
			"Loves videogames",
			"Started coding at 12",
			"First side jobs during high school",
		],
		texture: leafTexture,
		headingSize: "small",
	},
	{
		id: 3,
		title: "Born north of Padua, Italy",
		description: ["Camposampiero (PD)"],
		texture: leafTexture,
		headingSize: "small",
	},
	{
		id: 1,
		title: "Baccega Sandro",
		description: ["Software Engineer", "Card Description"],
		texture: leafTexture,
	},
] satisfies Deck;

export const ABOUT_ME = {
	id: 1,
	slug: "about-me",
	title: "About me",
	texture: leafTexture,
	deck: deck,
} satisfies Packet;
