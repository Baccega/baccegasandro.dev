import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
			<Image className="absolute inset-0 object-cover" src="/textures/background-texture-3.jpeg" alt="wood planks background" fill />
		</main>
	);
}
