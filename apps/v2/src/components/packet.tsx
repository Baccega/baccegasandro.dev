import type { StaticImageData } from "next/image";
import Image from "next/image";
import ribbon from "../resources/ribbon-1.png";
import { CurvedText } from "./ui/curvedText";

export function Packet(props: { title: string; texture: StaticImageData, portrait: string, wip: boolean }) {

	return (<div className="hover:cursor-pointer relative px-0 w-packet h-packet shadow-card overflow-hidden grid grid-rows-[2rem,1fr,2rem]">
		<span className="bg-packet-border bg-no-repeat bg-cover w-full h-full" />
		<div className="relative w-full h-full">
			<Image
				className="z-10 absolute inset-0 object-cover brightness-90"
				src={props.texture}
				placeholder="blur"
				alt={props.title}
				fill
				priority={false}
			/>
			<div className="relative grid grid-rows-[1fr,2fr] grid-cols-[20px,1fr,20px] z-20 w-full h-full pb-8">
				<span className="relative flex items-center justify-center col-span-3">
					<Image
						className="z-50 object-cover"
						src="/shapes/brand-logo.svg"
						alt="Baccega Sandro, The Portfolio"
						width={250}
						height={150}
						priority={false}
					/>
				</span>
				<span className="relative col-start-2 col-end-3 row-start-2 row-end-3 mr-[1px]">
					{props.wip ? <p className="text-white text-shadow-black text relative flex w-full h-2/3 justify-center items-center text-3xl z-50">Work in Progress</p> : null}
					<Image
						className="object-cover portrait-clip"
						src={props.portrait}
						alt={props.title}
						fill
						priority={false}
					/>
				</span>
				<div className="col-start-2 col-end-3 row-start-2 row-end-3 relative w-full h-full shadow-inner">
					<div className="relative h-full bg-packet-portrait bg-no-repeat bg-cover bg-center" />
				</div>
				<h2 className="absolute bottom-[10%] bg-center flex justify-center text-center w-full h-[90px] bg-no-repeat bg-cover text-2xl font-semibold text-foreground bg-ribbon">
					<CurvedText size="default" text={props.title} />
				</h2>
			</div>
		</div>
		<span className="rotate-180 bg-packet-border bg-no-repeat bg-cover w-full h-full" />
	</div>)
}