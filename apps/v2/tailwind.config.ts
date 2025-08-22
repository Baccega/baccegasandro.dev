import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/content/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				medieval: ["var(--font-magic-medieval)"],
				alfaSlabOne: ["var(--font-alfaSlabOne)"],
			},
			colors: {
				"card-outline": "#2f2b2b",
				"card-primary": "#007918",
				"card-border": "#a3a3a3",
				"card-background": "#fff",
				"card-background-disabled": "#ededed",
				"card-dividers-color": "#000",
				"packet-silver": "rgb(229, 229, 229)",
				foreground: "hsl(var(--foreground))",
				"foreground-contrast": "#fff",
				background: "hsl(var(--background))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
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
			dropShadow: {
				"from-top": "0px 5px 2px rgba(0, 0, 0, 0.5)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
