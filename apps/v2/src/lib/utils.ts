import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function wait(time: number) {
	return new Promise<number>((resolve) => {
		setTimeout(resolve, time);
	});
}

export function randomIntFromInterval(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export const trans = (r: number, s: number) =>
	`rotateY(${
		r / 10
	}deg) rotateZ(${r}deg) scale(${s}) translate3d(0px, -30px, 0px)`;
