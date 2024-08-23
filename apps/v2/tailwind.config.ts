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
				packet: "min(22.5rem,95dvw)",
				card: "min(22rem,88dvw)",
				ribbon: "100%",
			},
			height: {
				packet: "34rem",
				card: "33rem",
				ribbon: "5rem",
			},
			boxShadow: {
				card: "-40px 40px 100px 15px rgba(0,0,0,.4)",
			},
		},
	},
	plugins: [],
};
export default config;
