import type { Deck, Packet } from "../packets";
import leafTexture from "/public/textures/card-texture-8.jpeg";
import waveTexture from "/public/textures/card-texture-2.jpeg";
import circuitTexture from "/public/textures/card-texture-3.jpeg";
import stormTexture from "/public/textures/card-texture-4.jpeg";

const deck = [
	{
		id: 3,
		title: "Twitter (X)",
		description: ["Card Description"],
		texture: waveTexture,
		image: "/textures/card-texture-11.jpeg",
	},
	{
		id: 2,
		title: "LinkedIn",
		description: ["Card Description"],
		texture: waveTexture,
		image: "/textures/card-texture-11.jpeg",
	},
	{
		id: 1,
		title: "E-Mail",
		description: ["Card Description"],
		texture: waveTexture,
		image: "/textures/card-texture-11.jpeg",
	},
] satisfies Deck;

export const CONTACT_ME = {
	id: 2,
	slug: "contact-me",
	title: "Contact me",
	texture: waveTexture,
	deck: deck,
	portrait: "/textures/card-texture-10.jpeg",
} satisfies Packet;
