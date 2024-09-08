import leafTexture from "/public/textures/card-texture-1.jpeg";
import waveTexture from "/public/textures/card-texture-2.jpeg";
import circuitTexture from "/public/textures/card-texture-3.jpeg";
import stormTexture from "/public/textures/card-texture-4.jpeg";

const deck = [
	{
		id: 1,
		title: "Card Title",
		description: "Card Description",
		texture: waveTexture,
	},
	{
		id: 2,
		title: "Card Title",
		description: "Card Description",
		texture: waveTexture,
	},
	{
		id: 3,
		title: "Card Title",
		description: "Card Description",
		texture: waveTexture,
	},
	{
		id: 4,
		title: "Card Title",
		description: "Card Description",
		texture: waveTexture,
	},
];

export const CONTACT_ME = {
	id: 2,
	slug: "contact-me",
	title: "Contact me",
	texture: waveTexture,
	deck: deck,
};
