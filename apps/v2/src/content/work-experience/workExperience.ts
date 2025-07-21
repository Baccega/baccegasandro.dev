import type { Deck, Packet } from "../packets";
import leafTexture from "/public/textures/card-texture-8.jpeg";
import waveTexture from "/public/textures/card-texture-2.jpeg";
import stormTexture from "/public/textures/card-texture-7.jpeg";
import {
	AdobeExperienceManagerIcon,
	DockerIcon,
	ExpressIcon,
	GitlabCiIcon,
	JenkinsIcon,
	MaterialUiIcon,
	NextjsIcon,
	NodejsIcon,
	PlaywrightIcon,
	PrismaIcon,
	ReactIcon,
	ReduxIcon,
	TailwindCssIcon,
	TurborepoIcon,
	TypescriptIcon,
	ViteIcon,
} from "@/lib/icons";

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
		badges: [
			{ description: "Playwright", icon: PlaywrightIcon },
			{ description: "Typescript", icon: TypescriptIcon },
		],
	},
	{
		id: 7,
		wip: false,
		title: "CI/CD Pipelines development",
		description: [
			"Increase Gitlab's CI/CD pipeline speed by 4x",
			"Created Jenkins pipelines for CD on Liferay DXP with Docker",
		],
		texture: stormTexture,
		headingSize: "tiny",
		image: "/images/pipeline.jpeg",
		badges: [
			{ description: "Gitlab CI", icon: GitlabCiIcon },
			{ description: "Docker", icon: DockerIcon },
			{ description: "Jenkins", icon: JenkinsIcon },
		],
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
		badges: [
			{ description: "React", icon: ReactIcon },
			{ description: "Material UI", icon: MaterialUiIcon },
			{ description: "Redux", icon: ReduxIcon },
			{ description: "Express", icon: ExpressIcon },
		],
	},
	{
		id: 2,
		wip: false,
		title: "SMC Treviso",
		description: ["Frontend Developer", "Treviso, Italy", "2019 - 2022"],
		texture: stormTexture,
		image: "/images/smc-offices.jpeg",
		badges: [],
	},
	{
		id: 5,
		wip: false,
		title: "Internal tool creation",
		description: [
			"Automated tasks with a Node.js CLI tool",
			"Created ad-hoc Vite proxy to style a custom CMS",
		],
		texture: stormTexture,
		headingSize: "tiny",
		image: "/images/tools.jpeg",
		badges: [
			{ description: "Node.js", icon: NodejsIcon },
			{ description: "Vite", icon: ViteIcon },
		],
	},
	{
		id: 4,
		wip: false,
		title: "New projects R&D",
		description: [
			"Started new projects using state of the art technologies like: Next.js, Shadcn/ui, Tailwind CSS, Turborepo, Zustand",
		],
		texture: stormTexture,
		headingSize: "small",
		image: "/images/lab.jpeg",
		badges: [
			{ description: "Next.js", icon: NextjsIcon },
			{ description: "Tailwind CSS", icon: TailwindCssIcon },
			{ description: "Turborepo", icon: TurborepoIcon },
		],
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
		badges: [
			{ description: "React", icon: ReactIcon },
			{ description: "Tailwind CSS", icon: TailwindCssIcon },
			{
				description: "Adobe Experience Manager",
				icon: AdobeExperienceManagerIcon,
			},
		],
	},
	{
		id: 1,
		wip: false,
		title: "Wirecube GmbH",
		description: ["Fullstack developer", "Graz, Austria", "2023 - 2024"],
		texture: stormTexture,
		image: "/images/wirecube-offices.jpeg",
		badges: [],
	},
	{
		id: 10,
		wip: false,
		title: "SaaS development",
		description: [
			"Maintained a web app, built with React, Tailwind CSS and Prisma",
		],
		texture: stormTexture,
		image: "/images/saas-development.jpeg",
		badges: [
			{ description: "React", icon: ReactIcon },
			{ description: "Tailwind CSS", icon: TailwindCssIcon },
			{ description: "Prisma", icon: PrismaIcon },
		],
	},
	{
		id: 9,
		wip: false,
		title: "Storywise",
		description: ["Senior Frontend Engineer", "Graz, Austria", "2025 - Now"],
		texture: stormTexture,
		image: "/images/chax-offices.jpeg",
		badges: [],
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
