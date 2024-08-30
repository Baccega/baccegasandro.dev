import { config } from "@react-spring/web";
import { randomIntFromInterval } from "./utils";

const PACK_FULL_CLIPPATH = [0, 0, 100, 0, 100, 100, 0, 100];

export const up_position = (i: number) => ({
	x: 0,
	rot: 0,
	scale: 1,
	y: -1000,
});

export const random_position = (i: number) => ({
	x: randomIntFromInterval(-200, 200),
	y: randomIntFromInterval(-200, 200),
	rot: randomIntFromInterval(-100, 100),
	scale: 1,
});

export const scattered_position = (i: number) => {
	const direction = Math.random() > 0.5 ? 1 : -1;
	const x = (300 + window.innerWidth) * direction;
	const y = randomIntFromInterval(-window.innerHeight, window.innerHeight);
	const scale = 1.1;
	return {
		x,
		y,
		scale,
		rot: 200 * direction,
		delay: undefined,
		config: config.slow,
	};
};

export const above_position = (i: number) => ({
	x: 0,
	rot: 0,
	scale: 1.5,
	y: -1000,
	clipPath: PACK_FULL_CLIPPATH,
	// boxShadow: CARD_BOXSHADOW_TRANSPARENCY,
	// dropShadow: [0, 0, 0, 0.0],
});
export const showcase_position = () => ({
	x: 0,
	y: 30,
	scale: 1.1,
	rot: 0,
});
export const stacked_position = (i: number, inverted = false) => ({
	x: 0,
	y: i * (inverted ? -4 : 4) + 10,
	scale: 1,
	rot: Math.random() * 5,
	delay: i * 100,
	// clipPath: PACK_FULL_CLIPPATH,
	// boxShadow: CARD_BOXSHADOW_TRANSPARENCY,
	// dropShadow: [-20, 20, 10, 0.6],
});

export const clip = (i: number) => ({
	clipPath: [0, 7, 100, 8, 100, 100, 0, 100],
	config: config.stiff,
});
