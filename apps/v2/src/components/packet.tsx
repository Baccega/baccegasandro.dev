import type { StaticImageData } from "next/image";
import Image from "next/image";
import ribbon from "../resources/ribbon-1.png";

export function Packet(props: { title: string; texture: StaticImageData }) {
	return (<div className="hover:cursor-pointer relative rounded-xl py-8 px-0 w-packet h-packet bg-packet-silver shadow-card">
		<div className="relative flex flex-col items-center justify-center rounded-2xl w-full h-full overflow-hidden px-2">
			<Image
				className="z-10 rounded-xl absolute inset-0 object-cover"
				src={props.texture}
				placeholder="blur"
				alt={props.title}
				fill
				priority={false}
			/>
			<div className="relative z-20 w-ribbon h-ribbon flex items-center justify-center pb-6">
				<Image
					className="object-fill absolute inset-0"
					src={ribbon}
					alt="ribbon"
					fill
					priority={true}
				/>
				<h2 className="relative text-2xl font-semibold text-foreground">
					{props.title}
				</h2>
			</div>
		</div>
	</div>)
}