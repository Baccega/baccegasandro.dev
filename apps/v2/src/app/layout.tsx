import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import backgroundImage from "/public/textures/background-texture-4.jpeg";
import { cn } from "@/lib/utils";

import localFont from 'next/font/local'
import { LoadingOverlay } from "@/components/loadingOverlay";

const magicMedieval = localFont({
	src: [
		{
			path: '../../public/fonts/magic-medieval-font/Magicmedieval.ttf',
			weight: '400',
			style: 'normal',
		},
	],
})

export const metadata: Metadata = {
	title: "Baccega Sandro | The Portfolio",
	description: "Software Engineer // Specialized in ⚛️ React Web development and passionate about 🤖 automating boring tasks",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(magicMedieval.className, "relative")}>
				<LoadingOverlay />
				<Image
					className="-z-50 absolute inset-0 object-cover bg-repeat"
					src={backgroundImage}
					placeholder="blur"
					alt="wood planks background"
					fill
					priority={false}
				/>
				<main className="flex h-[100dvh] w-full items-center justify-center relative pb-10 tablet:pb-0 overflow-hidden">
					{children}
				</main>
			</body>
		</html>
	);
}
