"use client"
import { animated, to, useSprings, config } from "@react-spring/web";
import { Packet } from "@/components/packet";

import texture1 from "/public/textures/card-texture-1.jpeg";
import texture2 from "/public/textures/card-texture-2.jpeg";
import texture3 from "/public/textures/card-texture-3.jpeg";
import texture4 from "/public/textures/card-texture-4.jpeg";
import type React from "react";
import { useEffect, useRef } from "react";
import { AnimatedDeck } from "@/components/animatedDeck";
import { above_position, stacked_position } from "@/lib/positions";
import { usePortfolioStore } from "@/lib/store";
import { NavigationButtons } from "@/components/navigationButtons";
import { AnimatedPackets } from "@/components/animatedPackets";

export const PACKETS = [
	{
		id: 1,
		title: "About me",
		texture: texture1,
	},
	{
		id: 2,
		title: "Work Experience",
		texture: texture2,
	},
	{
		id: 3,
		title: "Projects",
		texture: texture3,
	},
	{
		id: 4,
		title: "Contact me",
		texture: texture4,
	},
];

const TEST_CARDS = [
	{
		id: 1,
		title: "Card Title",
		description: "Card Description",
		texture: texture1,
	},
	{
		id: 2,
		title: "Card Title",
		description: "Card Description",
		texture: texture2,
	},
	{
		id: 3,
		title: "Card Title",
		description: "Card Description",
		texture: texture3,
	},
	{
		id: 4,
		title: "Card Title",
		description: "Card Description",
		texture: texture4,
	},
	{
		id: 5,
		title: "Card Title",
		description: "Card Description",
		texture: texture1,
	},
	{
		id: 6,
		title: "Card Title",
		description: "Card Description",
		texture: texture2,
	},
	{
		id: 7,
		title: "Card Title",
		description: "Card Description",
		texture: texture3,
	},
	{
		id: 8,
		title: "Card Title",
		description: "Card Description",
		texture: texture4,
	},
];

export const CARDS = {
	0: TEST_CARDS,
	1: TEST_CARDS,
	2: TEST_CARDS,
	3: TEST_CARDS,
	4: TEST_CARDS,
} as const


export const trans = (r: number, s: number) =>
	`rotateY(${r / 10
	}deg) rotateZ(${r}deg) scale(${s}) translate3d(0px, -30px, 0px)`;


export default function Home() {
	const selectedPacket = usePortfolioStore((state) => state.selectedPacket);
	const [packetsProps, packetsApi] = useSprings(PACKETS.length, (i) => ({
		...above_position(i)
	}));


	const selectedDeck = selectedPacket !== undefined ? CARDS[selectedPacket] : [];

	return <>
		{selectedDeck.length > 0 && <AnimatedDeck deck={selectedDeck} selectedPacket={selectedPacket} packetsApi={packetsApi} />}

		<AnimatedPackets packetsProps={packetsProps} packetsApi={packetsApi} />

		<NavigationButtons />
	</>
}
