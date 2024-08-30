"use client"
import { animated, to, useSprings, config } from "@react-spring/web";
import { Packet } from "@/components/packet";

import texture1 from "/public/textures/card-texture-1.jpeg";
import texture2 from "/public/textures/card-texture-2.jpeg";
import texture3 from "/public/textures/card-texture-3.jpeg";
import texture4 from "/public/textures/card-texture-4.jpeg";
import React, { useEffect } from "react";
import { AnimatedDeck } from "@/components/animatedDeck";
import { above_position, stacked_position } from "@/lib/positions";

const PACKETS = [
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
} as const


export const trans = (r: number, s: number) =>
	`rotateY(${r / 10
	}deg) rotateZ(${r}deg) scale(${s}) translate3d(0px, -30px, 0px)`;


export default function Home() {
	// const [{ x, y, scale, rot }, api] = useSpring(stacked_position);
	const [currentPacket, setCurrentPacket] = React.useState(0);
	const [selectedPacket, setSelectedPacket] = React.useState<keyof typeof CARDS>();
	const [isAnimating, setIsAnimating] = React.useState(false);
	const [packetsProps, packetsApi] = useSprings(PACKETS.length, (i) => ({
		from: above_position(i),
		to: stacked_position(i),
		immediate: false,
	}));

	const selectedDeck = selectedPacket !== undefined ? CARDS[selectedPacket] : [];

	// Triggering the first packet fall animation on load
	useEffect(() => {
		packetsApi.start((i) => {
			if (i !== 0) return;
			return stacked_position(i);
		})
	}, [packetsApi]);

	// Triggering the selected packet cards animation
	useEffect(() => {
		const anim = async () => {
			if (selectedPacket === undefined) return;
			// setIsAnimating(true);
			// setIsAnimating(false);
		}
		anim()
	}, [selectedPacket]);

	async function handleNextPacket(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		const nextPacket = currentPacket + 1;
		setIsAnimating(true);
		// if (nextPacket >= PACKETS.length) {
		// 	await wait(500);
		// 	api.start((i) => above_position(i))
		// 	await wait(500);
		// 	api.start((i) => above_position(i))
		// 	setCurrentPacket(0);
		// 	setIsAnimating(false);
		// 	return;
		// }
		packetsApi.start((i) => {
			if (nextPacket !== i) return;
			return stacked_position(i);
		})
		setIsAnimating(false);
		setCurrentPacket(nextPacket);
	}

	async function handlePrevPacket(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (currentPacket === 0) return;
		const prevPacket = currentPacket - 1;

		setIsAnimating(true);

		packetsApi.start((i) => {
			if (i <= prevPacket) return;
			return above_position(i);
		})
		setIsAnimating(false);
		setCurrentPacket(prevPacket);
	}

	function handlePacketClick(e: React.MouseEvent<HTMLDivElement>) {
		e.preventDefault();
		setSelectedPacket(currentPacket as keyof typeof CARDS);
	}

	return <>
		{selectedDeck && <AnimatedDeck deck={selectedDeck} selectedPacket={selectedPacket} packetsApi={packetsApi} />}

		{packetsProps.map(({ x, y, rot, scale, clipPath }, i) => (
			<animated.div
				key={PACKETS[i].id}
				className="absolute inset-auto"
				style={{
					transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
				}}
			>
				<animated.div
					className="relative"
					style={{
						transform: to([rot, scale], trans),
						clipPath: to(
							[clipPath],
							(clipPath) =>
								`polygon(${clipPath[0]}% ${clipPath[1]}%, ${clipPath[2]}% ${clipPath[3]}%, ${clipPath[4]}% ${clipPath[5]}%, ${clipPath[6]}% ${clipPath[7]}%)`
						),
					}}
					onMouseDown={handlePacketClick}
				>
					<Packet title={PACKETS[i].title} texture={PACKETS[i].texture} />
				</animated.div>

			</animated.div>
		))}

		<div className="absolute bottom-10 flex gap-10">
			<button disabled={isAnimating || currentPacket === 0} type="button" className="text-white" onClick={handlePrevPacket}>Prev</button>
			<button disabled={isAnimating || currentPacket === PACKETS.length - 1} type="button" className="text-white" onClick={handleNextPacket}>Next</button>
		</div>
	</>
}
