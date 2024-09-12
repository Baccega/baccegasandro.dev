import { config, type SpringRef, type SpringValue } from "@react-spring/web";
import { randomIntFromInterval } from "./utils";

const PACK_FULL_CLIPPATH = [0, 0, 100, 0, 100, 100, 0, 100];

export type PacketSpringProps = {
	x: SpringValue<number>;
	rot: SpringValue<number>;
	scale: SpringValue<number>;
	y: SpringValue<number>;
	clipPath: SpringValue<number[]>;
	dropShadow: SpringValue<number[]>;
};
export type PacketSpringApi = SpringRef<{
	x: number;
	rot: number;
	scale: number;
	y: number;
	clipPath: number[];
	dropShadow: number[];
}>;

export const packets_up_position = (i: number) => ({
	x: 0,
	rot: 0,
	scale: 1,
	y: -window.innerHeight,
	dropShadow: [-40, 40, 10, 0.5],
});

export const packets_random_position = (i: number) => ({
	x: randomIntFromInterval(-200, 200),
	y: randomIntFromInterval(-200, 200),
	rot: randomIntFromInterval(-100, 100),
	scale: 1,
});

export const packets_scattered_position = (i: number) => {
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

export const packets_above_position = (i: number) => ({
	x: 0,
	rot: 0,
	scale: 1.5,
	y: -window?.innerHeight ?? -1000,
	clipPath: PACK_FULL_CLIPPATH,
	dropShadow: [0, 0, 0, 0.0],
});
export const packets_showcase_position = () => ({
	x: 0,
	y: 30,
	scale: 1.1,
	rot: 0,
	dropShadow: [-40, 40, 10, 0.5],
});
export const packets_stacked_position = (i: number, inverted = false) => ({
	x: 0,
	y: i * (inverted ? -4 : 4) + 10,
	scale: 1,
	rot: Math.random() * 6,
	delay: i * 100,
	clipPath: PACK_FULL_CLIPPATH,
	dropShadow: [-20, 20, 10, 0.6],
});

export const packets_clip = (i: number) => ({
	clipPath: [0, 7, 100, 8, 100, 100, 0, 100],
	config: config.stiff,
});
