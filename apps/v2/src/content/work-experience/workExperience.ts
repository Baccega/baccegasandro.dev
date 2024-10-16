import type { Deck, Packet } from "../packets";
import leafTexture from "/public/textures/card-texture-8.jpeg";
import waveTexture from "/public/textures/card-texture-2.jpeg";
import stormTexture from "/public/textures/card-texture-7.jpeg";

const deck = [
	{
		id: 2,
		wip: true,
		title: "SMC Treviso",
		description: ["Frontend Developer", "Treviso, Italy", "2019 - 2022"],
		texture: stormTexture,
		image: "/textures/card-texture-5.jpeg",
	},
	{
		id: 5,
		wip: true,
		title: "Created tooling for the team",
		description: [
			"Automated tasks with a Node.js CLI tool",
			"Created ad-hoc Vite proxy to style a custom CMS",
		],
		texture: stormTexture,
		headingSize: "small",
		image: "/textures/card-texture-5.jpeg",
	},
	{
		id: 4,
		wip: true,
		title: "Started modern projects",
		description: [
			"Next.js",
			"Shadcn/ui",
			"Tailwind CSS",
			"Turborepo",
			"Zustand",
		],
		texture: stormTexture,
		headingSize: "small",
		image: "/textures/card-texture-5.jpeg",
	},
	{
		id: 3,
		wip: true,
		title: "Platform development",
		headingSize: "small",
		description: ["Adobe Experience Manager", "React", "Tailwind CSS"],
		texture: stormTexture,
		image: "/textures/card-texture-5.jpeg",
	},
	{
		id: 1,
		wip: true,
		title: "Wirecube GmbH",
		description: ["Fullstack developer", "Graz, Austria", "2023 - 2024"],
		texture: stormTexture,
		image: "/textures/card-texture-5.jpeg",
	},
] satisfies Deck;

export const WORK_EXPERIENCE = {
	id: 4,
	wip: true,
	slug: "work-experience",
	title: "Work Experience",
	texture: stormTexture,
	deck: deck,
	portrait: "/images/work-experience.jpeg",
} satisfies Packet;
