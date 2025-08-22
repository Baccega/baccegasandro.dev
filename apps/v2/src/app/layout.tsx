import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import backgroundImage from "/public/textures/background-texture-4.jpeg";
import { cn } from "@/lib/utils";

import localFont from 'next/font/local'
import { Alfa_Slab_One } from 'next/font/google'
import { LoadingOverlay } from "@/components/loadingOverlay";
import { TooltipProvider } from "@/components/ui/tooltip";

const magicMedieval = localFont({
	src: [
		{
			path: '../../public/fonts/magic-medieval-font/Magicmedieval.woff',
			weight: '400',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-magic-medieval',
})

const alfaSlabOne = Alfa_Slab_One({ subsets: ['latin'], weight: "400", display: 'fallback', variable: '--font-alfaSlabOne' })


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
		<html lang="en" className={cn(magicMedieval.variable, alfaSlabOne.variable)}>
			<body className="relative font-medieval">
				<script>
    				/* to prevent Firefox FOUC, this must be here */
					let FF_FOUC_FIX;
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
				/>
				<TooltipProvider delayDuration={200}>
					<main className="flex h-[100dvh] w-full items-center justify-center relative pb-10 tablet:pb-0 overflow-hidden">
						{children}
					</main>
				</TooltipProvider>
			</body>
		</html>
	);
}
