import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import backgroundImage from "/public/textures/background-texture-3.jpeg";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(inter.className, "relative")}>
				<Image
					className="-z-50 absolute inset-0 object-cover bg-repeat"
					src={backgroundImage}
					placeholder="blur"
					alt="wood planks background"
					fill
					priority={false}
				/>
				<main className="flex h-screen w-full items-center justify-center relative pb-10 tablet:pb-0">
					{children}
				</main>
			</body>
		</html>
	);
}
