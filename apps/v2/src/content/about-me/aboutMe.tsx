import React from "react";
import type { Deck, Packet } from "../packets";
import leafTexture from "/public/textures/card-texture-8.jpeg";
import waveTexture from "/public/textures/card-texture-6.jpeg";
import circuitTexture from "/public/textures/card-texture-3.jpeg";
import stormTexture from "/public/textures/card-texture-7.jpeg";
import magmaTexture from "/public/textures/card-texture-9.jpeg";
import { RealisticButton } from "@/components/ui/realisticButton";
import { Download, Link } from "lucide-react";

const deck = [
	// {
	// 	id: 8,
	// 	wip: true,
	// 	title: "Contact me",
	// 	description: ["See the options (This will link to the contact me pack)"],
	// 	texture: waveTexture,
	// 	image: "/images/contact-me-2.jpeg",
	// },
	{
		id: 9,
		wip: false,
		title: "Storywise",
		description: ["Senior Frontend Engineer", "Graz, Austria", "2025 - Now"],
		texture: stormTexture,
		badges: [],
		image: "/images/chax-offices.jpeg",
	},
	{
		id: 7,
		wip: false,
		title: "Wirecube GmbH",
		description: ["Fullstack developer", "Graz, Austria", "2023 - 2024"],
		texture: stormTexture,
		badges: [],
		image: "/images/wirecube-offices.jpeg",
	},
	{
		id: 4,
		wip: false,
		title: "Moved to Graz, Austria",
		description: ["January 2023"],
		texture: leafTexture,
		badges: [],
		image: "/images/graz.jpeg",
		headingSize: "small",
	},
	{
		id: 6,
		wip: false,
		title: "SMC Treviso",
		description: ["Frontend Developer", "Treviso, Italy", "2019 - 2022"],
		texture: stormTexture,
		badges: [],
		image: "/images/smc-offices.jpeg",
	},
	{
		id: 2,
		wip: false,
		title: "Master in Computer Science",
		description: ["From Ca' Foscari University of Venice", "Thesis: An Implicit Neural Representation for RTI", <RealisticButton width="wide" key="rti-link" className="text-xl border-[3px]">
			<a
				target="_blank"
				rel="noreferrer"
				href="http://dspace.unive.it/handle/10579/25914"
				className="flex items-center justify-evenly gap-2"
			>
				<Link size="20" strokeWidth={2.8} />Link to Master Thesis
			</a>
		</RealisticButton>],
		texture: leafTexture,
		badges: [],
		image: "/images/graduation2.jpeg",
		headingSize: "tiny",
		descriptionSize: "small",
	},
	{
		id: 5,
		wip: false,
		title: "Technology enthusiast",
		description: [
			"Loves videogames",
			"Started coding at 12",
			"First side jobs during high school",
		],
		texture: leafTexture,
		badges: [],
		image: "/images/kid.jpeg",
		headingSize: "small",
	},
	{
		id: 3,
		wip: false,
		title: "Born north of Padua, Italy",
		description: ["Camposampiero (PD)"],
		texture: leafTexture,
		badges: [],
		image: "/images/north-italy-plains.jpeg",
		headingSize: "tiny",
	},
	{
		id: 1,
		wip: false,
		title: "Baccega Sandro",
		description: ["Software Engineer", "Specialized in Web Development",
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
		badges: [],
		image: "/images/me-fantasy.jpeg",
	},
] satisfies Deck;

export const ABOUT_ME = {
	id: 1,
	wip: false,
	slug: "about-me",
	title: "About me",
	texture: leafTexture,
	deck: deck,
	portrait: "/images/about-me.jpeg",
} satisfies Packet;
