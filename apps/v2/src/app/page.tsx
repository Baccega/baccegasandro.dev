"use client"
import { useSpring, animated, to, useSprings } from "@react-spring/web";
import { Packet } from "@/components/packet";

import texture1 from "/public/textures/card-texture-1.jpeg";
import texture2 from "/public/textures/card-texture-2.jpeg";
import texture3 from "/public/textures/card-texture-3.jpeg";
import texture4 from "/public/textures/card-texture-4.jpeg";
import React, { useEffect } from "react";

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

const CARDS = [
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
];

function wait(time: number) {
	return new Promise<number>((resolve) => {
		setTimeout(resolve, time);
	});
}

const above_position = (i: number) => ({
	x: 0,
	rot: 0,
	scale: 1.5,
	y: -1000,
	// clipPath: PACK_FULL_CLIPPATH,
	// boxShadow: CARD_BOXSHADOW_TRANSPARENCY,
	// dropShadow: [0, 0, 0, 0.0],
});
const showcase_position = () => ({
	x: 0,
	y: 30,
	scale: 1.1,
	rot: 0,
});
const stacked_position = (i: number) => ({
	x: 0,
	y: i * -4,
	scale: 1,
	rot: Math.random() * 5,
	delay: i * 100,

	// clipPath: PACK_FULL_CLIPPATH,
	// boxShadow: CARD_BOXSHADOW_TRANSPARENCY,
	// dropShadow: [-20, 20, 10, 0.6],
});
const trans = (r: number, s: number) =>
	`rotateY(${r / 10
	}deg) rotateZ(${r}deg) scale(${s}) translate3d(0px, -30px, 0px)`;

export default function Home() {
	// const [{ x, y, scale, rot }, api] = useSpring(stacked_position);
	const [currentPacket, setCurrentPacket] = React.useState(0);
	const [selectedPacket, setSelectedPacket] = React.useState<number>();
	const [isAnimating, setIsAnimating] = React.useState(false);
	const [packetsProps, api] = useSprings(PACKETS.length, (i) => ({
		from: above_position(i),
		to: stacked_position(i),
		immediate: false,
	}));

	// Triggering the first packet fall animation on load
	useEffect(() => {
		api.start((i) => {
			if (i !== 0) return;
			return stacked_position(i);
		})
	}, [api]);

	// Triggering the selected packet cards animation
	useEffect(() => {
		const anim = async () => {
			setIsAnimating(true);
			setIsAnimating(false);
		}
		anim()
	}, []);

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
		api.start((i) => {
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

		api.start((i) => {
			if (i <= prevPacket) return;
			return above_position(i);
		})
		setIsAnimating(false);
		setCurrentPacket(prevPacket);
	}

	function handlePacketClick(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		setSelectedPacket(currentPacket);
	}

	return <>
		{packetsProps.map(({ x, y, rot, scale }, i) => (
			<animated.div
				key={PACKETS[i].id}
				className="absolute"
				style={{
					transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
				}}
			>
				<animated.div
					style={{
						transform: to([rot, scale], trans),
					}}
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
