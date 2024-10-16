import type { Deck, Packet } from "../packets";
import leafTexture from "/public/textures/card-texture-8.jpeg";
import waveTexture from "/public/textures/card-texture-2.jpeg";
import stormTexture from "/public/textures/card-texture-7.jpeg";

const deck = [
	{
		id: 8,
		wip: false,
		title: "Visual Regression Testing",
		description: [
			"Created a custom visual regression testing tool using Playwright to detect regressions in the UI",
		],
		texture: stormTexture,
		headingSize: "small",
		image: "/images/testing.jpeg",
	},
	{
		id: 7,
		wip: false,
		title: "CI/CD Pipeline development",
		description: ["Increase the Gitlab's CI/CD pipeline speed by 4x"],
		texture: stormTexture,
		headingSize: "small",
		image: "/images/pipeline.jpeg",
	},
	{
		id: 6,
		wip: false,
		title: "Dashboard development",
		description: [
			"Built complex features for a dashboard that used React, with Material UI and Redux, and Node.js with Express",
		],
		texture: stormTexture,
		headingSize: "small",
		image: "/images/dashboard.jpeg",
	},
	{
		id: 2,
		wip: false,
		title: "SMC Treviso",
		description: ["Frontend Developer", "Treviso, Italy", "2019 - 2022"],
		texture: stormTexture,
		image: "/images/smc-offices.jpeg",
	},
	{
		id: 5,
		wip: false,
		title: "Created tooling for the team",
		description: [
			"Automated tasks with a Node.js CLI tool",
			"Created ad-hoc Vite proxy to style a custom CMS",
		],
		texture: stormTexture,
		headingSize: "small",
		image: "/images/tools.jpeg",
	},
	{
		id: 4,
		wip: false,
		title: "Started modern projects",
		description: [
			"Created brand new projects using new technologies like: Next.js, Shadcn/ui, Tailwind CSS, Turborepo, Zustand",
		],
		texture: stormTexture,
		headingSize: "small",
		image: "/images/lab.jpeg",
	},
	{
		id: 3,
		wip: false,
		title: "Platform development",
		headingSize: "small",
		description: [
			"Developed websites with React and Tailwind CSS, managed with Adobe Experience Manager",
		],
		texture: stormTexture,
		image: "/images/platform-development.jpeg",
	},
	{
		id: 1,
		wip: false,
		title: "Wirecube GmbH",
		description: ["Fullstack developer", "Graz, Austria", "2023 - 2024"],
		texture: stormTexture,
		image: "/images/wirecube-offices.jpeg",
	},
] satisfies Deck;

export const WORK_EXPERIENCE = {
	id: 4,
	wip: false,
	slug: "work-experience",
	title: "Work Experience",
	texture: stormTexture,
	deck: deck,
	portrait: "/images/work-experience.jpeg",
} satisfies Packet;
