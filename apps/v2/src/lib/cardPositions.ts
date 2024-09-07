import { config, type SpringRef, type SpringValue } from "@react-spring/web";
import { randomIntFromInterval } from "./utils";

const CARD_BOXSHADOW_TRANSPARENCY = 0.2;

export type CardsSpringProps = {
	x: SpringValue<number>;
	rot: SpringValue<number>;
	scale: SpringValue<number>;
	y: SpringValue<number>;
	boxShadow: SpringValue<number>;
};
export type CardsSpringApi = SpringRef<{
	x: number;
	rot: number;
	scale: number;
	y: number;
	boxShadow: number;
}>;

export const cards_up_position = (i: number) => ({
	x: 0,
	rot: 0,
	scale: 1,
	y: -window.innerHeight,
	boxShadow: 0,
});

export const cards_random_position = (i: number) => ({
	x: randomIntFromInterval(-200, 200),
	y: randomIntFromInterval(-200, 200),
	rot: randomIntFromInterval(-100, 100),
	scale: 1,
});

export const cards_scattered_position = (i: number) => {
	const direction = Math.random() > 0.5 ? 1 : -1;
	const x = (300 + window.innerWidth) * direction;
	const y = randomIntFromInterval(-window.innerHeight, window.innerHeight);
	const scale = 1.1;
	return {
		x,
		y,
		scale,
		boxShadow: 0,
		rot: 200 * direction,
		delay: 0,
		config: config.slow,
	};
};

export const cards_above_position = (i: number) => ({
	x: 0,
	rot: 0,
	scale: 1.5,
	y: -window.innerHeight,
	boxShadow: CARD_BOXSHADOW_TRANSPARENCY,
});
export const cards_showcase_position = () => ({
	x: 0,
	y: 30,
	scale: 1.1,
	rot: 0,
});
export const cards_stacked_position = (i: number, inverted = false) => ({
	x: 0,
	y: i * (inverted ? -4 : 4) + 10,
	scale: 1,
	rot: Math.random() * 5,
	delay: i * 100,
	boxShadow: CARD_BOXSHADOW_TRANSPARENCY,
});
