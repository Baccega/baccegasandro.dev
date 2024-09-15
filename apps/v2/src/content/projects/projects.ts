import type { Deck, Packet } from "../packets";
import leafTexture from "/public/textures/card-texture-8.jpeg";
import waveTexture from "/public/textures/card-texture-2.jpeg";
import circuitTexture from "/public/textures/card-texture-3.jpeg";
import stormTexture from "/public/textures/card-texture-4.jpeg";

const deck = [
	{
		id: 1,
		title: "Card Title",
		description: ["Card Description"],
		texture: circuitTexture,
	},
	{
		id: 2,
		title: "Card Title",
		description: ["Card Description"],
		texture: circuitTexture,
	},
	{
		id: 3,
		title: "Card Title",
		description: ["Card Description"],
		texture: circuitTexture,
	},
	{
		id: 4,
		title: "Card Title",
		description: ["Card Description"],
		texture: circuitTexture,
	},
] satisfies Deck;

export const PROJECTS = {
	id: 3,
	slug: "projects",
	title: "Projects",
	texture: circuitTexture,
	deck: deck,
} satisfies Packet;
