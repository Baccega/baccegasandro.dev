import leafTexture from "/public/textures/card-texture-1.jpeg";
import waveTexture from "/public/textures/card-texture-2.jpeg";
import circuitTexture from "/public/textures/card-texture-3.jpeg";
import stormTexture from "/public/textures/card-texture-4.jpeg";

const deck = [
	{
		id: 1,
		title: "Card Title",
		description: "Card Description",
		texture: leafTexture,
	},
	{
		id: 2,
		title: "Card Title",
		description: "Card Description",
		texture: leafTexture,
	},
	{
		id: 3,
		title: "Card Title",
		description: "Card Description",
		texture: leafTexture,
	},
	{
		id: 4,
		title: "Card Title",
		description: "Card Description",
		texture: leafTexture,
	},
];

export const ABOUT_ME = {
	id: 1,
	slug: "about-me",
	title: "About me",
	texture: leafTexture,
	deck: deck,
};
