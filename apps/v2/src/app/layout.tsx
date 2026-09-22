import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import backgroundImage from "../../public/textures/background-texture-4.jpeg";

import { Copyright } from "@/components/copyright";
import { LoadingOverlay } from "@/components/loadingOverlay";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Carter_One } from "next/font/google";
import localFont from "next/font/local";

const magicMedieval = localFont({
	src: [
		{
			path: "../../public/fonts/magic-medieval-font/Magicmedieval.woff",
			weight: "400",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--font-magic-medieval",
});

const carterOne = Carter_One({
	subsets: ["latin"],
	weight: "400",
	display: "fallback",
	variable: "--font-carter-one",
});

export const metadata: Metadata = {
	title: "Baccega Sandro | The Portfolio",
	description:
		"Software Engineer // Specialized in ⚛️ React Web development and passionate about 🤖 automating boring tasks",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={cn(magicMedieval.variable, carterOne.variable)}>
			<body className="relative font-medieval">
				<script>
					{/* to prevent Firefox FOUC, this must be here */} let FF_FOUC_FIX;
				</script>
				<LoadingOverlay />
				<Image
					className="-z-50 absolute inset-0 object-cover bg-repeat"
					src={backgroundImage}
					placeholder="blur"
					alt="wood planks background"
					fill
					sizes="100vw"
					priority={true}
					unoptimized
				/>
				<TooltipProvider delayDuration={200}>
					<main className="flex h-dvh w-full items-center justify-center relative pb-10 sm:pb-0 overflow-hidden">
						<Copyright className="fixed top-1 left-1/2 -translate-x-1/2 text-sm font-semibold tracking-wide text-amber-950/60 [text-shadow:0_1px_0_rgb(255_255_255/0.5),0_-1px_0_rgb(0_0_0/0.25)] hover:text-amber-950/45 sm:top-auto sm:right-2 sm:bottom-2 sm:left-auto sm:translate-x-0" />
						{children}
					</main>
				</TooltipProvider>
			</body>
		</html>
	);
}
