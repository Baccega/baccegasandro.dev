"use client"

import { useSprings } from "@react-spring/web";
import type React from "react";
import { AnimatedDeck } from "@/components/animatedDeck";
import { usePortfolioStore } from "@/lib/store";
import { NavigationButtons } from "@/components/navigationButtons";
import { AnimatedPackets } from "@/components/animatedPackets";
import { packets_above_position } from "@/lib/packetsPositions";
import { PACKETS } from "@/content/packets";

export default function Home() {
	const selectedPacket = usePortfolioStore((state) => state.selectedPacket);
	const [packetsProps, packetsApi] = useSprings(PACKETS.length, (i) => ({
		...packets_above_position(i)
	}));


	const selectedDeck = selectedPacket !== undefined ? PACKETS[selectedPacket].deck : [];

	return <>
		{selectedDeck.length > 0 && <AnimatedDeck deck={selectedDeck} selectedPacket={selectedPacket} packetsApi={packetsApi} />}

		<AnimatedPackets packetsProps={packetsProps} packetsApi={packetsApi} />

		<NavigationButtons />
	</>
}