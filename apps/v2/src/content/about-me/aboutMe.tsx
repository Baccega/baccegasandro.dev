import React from "react";
import type { Deck, Packet } from "../packets";
import leafTexture from "/public/textures/card-texture-8.jpeg";
import waveTexture from "/public/textures/card-texture-6.jpeg";
import circuitTexture from "/public/textures/card-texture-3.jpeg";
import stormTexture from "/public/textures/card-texture-7.jpeg";
import magmaTexture from "/public/textures/card-texture-9.jpeg";
import { RealisticButton } from "@/components/ui/realisticButton";
import { Download } from "lucide-react";

const deck = [
	{
		id: 8,
		wip: true,
		title: "Contact me",
		description: ["See the options"],
		texture: waveTexture,
		image: "/textures/card-texture-1.jpeg",
	},
	{
		id: 7,
		wip: true,
		title: "Wirecube GmbH",
		description: ["Fullstack developer", "Graz, Austria", "2023 - 2024"],
		texture: stormTexture,
		image: "/textures/card-texture-11.jpeg",
	},
	{
		id: 4,
		wip: true,
		title: "Moved to Graz, Austria",
		description: ["January 2023"],
		texture: leafTexture,
		image: "/textures/card-texture-2.jpeg",
		headingSize: "small",
	},
	{
		id: 6,
		wip: true,
		title: "SMC Treviso",
		description: ["Frontend Developer", "Treviso, Italy", "2019 - 2022"],
		texture: stormTexture,
		image: "/textures/card-texture-11.jpeg",
	},
	{
		id: 2,
		wip: true,
		title: "Master in Computer Science",
		description: ["From Ca' Foscari University of Venice"],
		texture: leafTexture,
		image: "/textures/card-texture-4.jpeg",
		headingSize: "small",
	},
	{
		id: 5,
		wip: true,
		title: "Technology enthusiast",
		description: [
			"Loves videogames",
			"Started coding at 12",
			"First side jobs during high school",
		],
		texture: leafTexture,
		image: "/textures/card-texture-5.jpeg",
		headingSize: "small",
	},
	{
		id: 3,
		wip: true,
		title: "Born north of Padua, Italy",
		description: ["Camposampiero (PD)"],
		texture: leafTexture,
		image: "/textures/card-texture-6.jpeg",
		headingSize: "small",
	},
	{
		id: 1,
		wip: true,
		title: "Baccega Sandro",
		description: ["Software Engineer",
			<RealisticButton width="wide" key="cv-link" className="text-xl border-[3px]">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Baccega/baccegasandro.dev/blob/main/packages/common/assets/cv.pdf"
					className="flex items-center justify-evenly gap-2"
				>
					<Download size="20" strokeWidth={2.8} /> Download my CV here!
				</a>
			</RealisticButton>
		],
		texture: leafTexture,
		image: "/textures/card-texture-7.jpeg",
	},
] satisfies Deck;

export const ABOUT_ME = {
	id: 1,
	wip: true,
	slug: "about-me",
	title: "About me",
	texture: leafTexture,
	deck: deck,
	portrait: "/images/about-me.jpeg",
} satisfies Packet;
