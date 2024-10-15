import type { Deck, Packet } from "../packets";
import leafTexture from "/public/textures/card-texture-8.jpeg";
import waveTexture from "/public/textures/card-texture-2.jpeg";
import circuitTexture from "/public/textures/card-texture-3.jpeg";
import stormTexture from "/public/textures/card-texture-4.jpeg";
import { RealisticButton } from "@/components/ui/realisticButton";
import { Link, Mail } from "lucide-react";

const deck = [
	{
		id: 3,
		wip: true,
		title: "Twitter (X)",
		description: [
			<RealisticButton width="wide" key="twitter-link" className="text-xl border-[3px]">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://x.com/Sandro_Bac"
					className="flex items-center justify-evenly gap-2"
				>
					<Link size="20" strokeWidth={2.8} /> See my Twitter profile
				</a>
			</RealisticButton>
		],
		texture: waveTexture,
		image: "/textures/card-texture-11.jpeg",
	},
	{
		id: 2,
		wip: true,
		title: "LinkedIn",
		description: [
			<RealisticButton width="wide" key="linkedin-link" className="text-xl border-[3px]">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/sandro-baccega/"
					className="flex items-center justify-evenly gap-2"
				>
					<Link size="20" strokeWidth={2.8} /> See my LinkedIn profile
				</a>
			</RealisticButton>
		],
		texture: waveTexture,
		image: "/textures/card-texture-11.jpeg",
	},
	{
		id: 1,
		wip: true,
		title: "E-Mail",
		description: [
			<RealisticButton width="wide" key="mail-link" className="text-xl border-[3px]">
				<a
					target="_blank"
					rel="noreferrer"
					href="mailto:mail.sandro.baccega@gmail.com"
					className="flex items-center justify-evenly gap-2"
				>
					<Mail size="20" strokeWidth={2.8} /> Send me an email
				</a>
			</RealisticButton>
		],
		texture: waveTexture,
		image: "/textures/card-texture-11.jpeg",
	},
] satisfies Deck;

export const CONTACT_ME = {
	id: 2,
	wip: true,
	slug: "contact-me",
	title: "Contact me",
	texture: waveTexture,
	deck: deck,
	portrait: "/images/contact-me.jpeg",
} satisfies Packet;
