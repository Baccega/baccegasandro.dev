import type { Deck, Packet } from "../packets";
import leafTexture from "/public/textures/card-texture-8.jpeg";
import waveTexture from "/public/textures/card-texture-2.jpeg";
import circuitTexture from "/public/textures/card-texture-11.jpeg";
import stormTexture from "/public/textures/card-texture-4.jpeg";
import { RealisticButton } from "@/components/ui/realisticButton";
import { Link } from "lucide-react";

const deck = [
	{
		id: 5,
		wip: false,
		title: "Various automation scripts",
		description: [
			<RealisticButton width="wide" key="covid-link" className="text-xl border-[3px]">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Baccega/check-vaccine-prenotation-available"
					className="flex items-center justify-evenly gap-2"
				>
					<Link size="30" strokeWidth={2.8} /> <span className="leading-5">Check COVID-19 vaccine availability</span>
				</a>
			</RealisticButton>,
			<RealisticButton width="wide" key="backup-link" className="text-xl border-[3px]">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Baccega/altervista-backup-automation"
					className="flex items-center justify-evenly gap-2"
				>
					<Link size="30" strokeWidth={2.8} /> <span className="leading-5">Automatically backup Altervista websites</span>
				</a>
			</RealisticButton>,
			<RealisticButton width="wide" key="custom-heading-link" className="text-xl border-[3px]">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Baccega/add-custom-heading-to-videos"
					className="flex items-center justify-evenly gap-2"
				>
					<Link size="30" strokeWidth={2.8} /> <span className="leading-5">Add custom heading to videos with FFMPEG</span>
				</a>
			</RealisticButton>
		],
		headingSize: "small",
		texture: circuitTexture,
		image: "/images/machinery.jpeg",
	},
	{
		id: 1,
		wip: false,
		title: "Page Rank and HITS",
		description: [
			"C++ implementation of PageRank (Google) and HITS (Ask.com)",
			<RealisticButton width="wide" key="page-rank-link" className="text-xl border-[3px]">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Baccega/page-rank-and-hits"
					className="flex items-center justify-evenly gap-2"
				>
					<Link size="20" strokeWidth={2.8} /> See Github repository
				</a>
			</RealisticButton>
		],

		texture: circuitTexture,
		image: "/images/google-crawler.jpeg",
	},
	{
		id: 2,
		wip: false,
		title: "Le Giumelle",
		description: [
			"My family's farm website, built with Next.js, Stripe and Shadcn/ui",
			<RealisticButton width="wide" key="kiwi-farm-link" className="text-xl border-[3px]">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Baccega/kiwi-farm"
					className="flex items-center justify-evenly gap-2"
				>
					<Link size="20" strokeWidth={2.8} /> See Github repository
				</a>
			</RealisticButton>
		],

		texture: circuitTexture,
		image: "/images/kiwi.jpeg",
	},
	{
		id: 3,
		wip: false,
		title: "Smartphone based RTI",
		description: [
			"Reflectance Transformation Imaging using OpenCV in Python",
			<RealisticButton width="wide" key="rti-link" className="text-xl border-[3px]">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Baccega/smartphone-based-rti"
					className="flex items-center justify-evenly gap-2"
				>
					<Link size="20" strokeWidth={2.8} /> See Github repository
				</a>
			</RealisticButton>
		],
		headingSize: "small",
		texture: circuitTexture,
		image: "/images/camera.jpeg",
	},
	{
		id: 4,
		wip: false,
		title: "Baccegasandro.dev",
		description: [
			"This website! Created with Next.js, Tailwind CSS and react-spring",
			<RealisticButton width="wide" key="portfolio-link" className="text-xl border-[3px]">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Baccega/baccegasandro.dev"
					className="flex items-center justify-evenly gap-2"
				>
					<Link size="20" strokeWidth={2.8} /> See Github repository
				</a>
			</RealisticButton>
		],

		texture: circuitTexture,
		image: "/images/brand-with-bg.jpeg",
	},
] satisfies Deck;

export const PROJECTS = {
	id: 3,
	wip: false,
	slug: "projects",
	title: "My Projects",
	texture: circuitTexture,
	deck: deck,
	portrait: "/images/projects.jpeg",
} satisfies Packet;
