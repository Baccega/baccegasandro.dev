import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"card-outline": "#2f2b2b",
				"card-primary": "#007918",
				"card-border": "#a3a3a3",
				"card-background": "#fff",
				"card-background-disabled": "#ededed",
				"card-dividers-color": "#000",
				"packet-silver": "rgb(229, 229, 229)",
				foreground: "#000",
				"foreground-contrast": "#fff",
			},
			width: {
				packet: "min(22.5rem,97dvw)",
				card: "min(22rem,95dvw)",
				ribbon: "100%",
			},
			height: {
				packet: "calc(30rem + 4rem)",
				card: "33rem",
				ribbon: "5rem",
			},
			boxShadow: {
				card: "-40px 40px 100px 15px rgba(0,0,0,.4)",
				button: "0px 5px 5px 0px rgba(0,0,0,0.6)",
				"button-hover": "0px 10px 5px 0px rgba(0,0,0,0.5)",
				"button-pressed": "inset 0px 3px 5px 0px rgba(0,0,0,0.75)",
			},
			backgroundImage: {
				ribbon: "url('/shapes/ribbon-bended.svg')",
				"card-description": "url('/shapes/card-description.svg')",
				"card-portrait": "url('/shapes/card-portrait.svg')",
				"packet-portrait": "url('/shapes/packet-portrait.svg')",
				"packet-border": "url('/shapes/packet-border.svg')",
			},
		},
	},
	plugins: [],
};
export default config;
