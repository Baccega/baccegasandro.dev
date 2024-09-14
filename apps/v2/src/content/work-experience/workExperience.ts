import type { Deck, Packet } from "../packets";
import leafTexture from "/public/textures/card-texture-1.jpeg";
import waveTexture from "/public/textures/card-texture-2.jpeg";
import circuitTexture from "/public/textures/card-texture-3.jpeg";
import stormTexture from "/public/textures/card-texture-4.jpeg";

const deck = [
	{
		id: 1,
		title: "Card Title",
		description: ["Card Description"],
		texture: stormTexture,
	},
	{
		id: 2,
		title: "Card Title",
		description: ["Card Description"],
		texture: stormTexture,
	},
	{
		id: 3,
		title: "Card Title",
		description: ["Card Description"],
		texture: stormTexture,
	},
	{
		id: 4,
		title: "Card Title",
		description: ["Card Description"],
		texture: stormTexture,
	},
] satisfies Deck;

export const WORK_EXPERIENCE = {
	id: 4,
	slug: "work-experience",
	title: "Work Experience",
	texture: stormTexture,
	deck: deck,
} satisfies Packet;
