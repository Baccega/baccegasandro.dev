import type { Deck, Packet } from "../packets";
import leafTexture from "/public/textures/card-texture-8.jpeg";
import waveTexture from "/public/textures/card-texture-2.jpeg";
import circuitTexture from "/public/textures/card-texture-3.jpeg";
import stormTexture from "/public/textures/card-texture-4.jpeg";

const deck = [
	{
		id: 1,
		wip: true,
		title: "Card Title",
		description: ["Card Description"],
		texture: circuitTexture,
		image: "/textures/card-texture-11.jpeg",
	},
	{
		id: 2,
		wip: true,
		title: "Card Title",
		description: ["Card Description"],
		texture: circuitTexture,
		image: "/textures/card-texture-11.jpeg",
	},
	{
		id: 3,
		wip: true,
		title: "Card Title",
		description: ["Card Description"],
		texture: circuitTexture,
		image: "/textures/card-texture-11.jpeg",
	},
	{
		id: 4,
		wip: true,
		title: "Card Title",
		description: ["Card Description"],
		texture: circuitTexture,
		image: "/textures/card-texture-11.jpeg",
	},
] satisfies Deck;

export const PROJECTS = {
	id: 3,
	wip: true,
	slug: "projects",
	title: "Projects",
	texture: circuitTexture,
	deck: deck,
	portrait: "/images/projects.jpeg",
} satisfies Packet;
