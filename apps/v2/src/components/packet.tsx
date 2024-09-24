import type { StaticImageData } from "next/image";
import Image from "next/image";
import ribbon from "../resources/ribbon-1.png";
import { CurvedText } from "./ui/curvedText";

export function Packet(props: { title: string; texture: StaticImageData, portrait: string }) {

	return (<div className="hover:cursor-pointer relative rounded-xl py-8 px-0 w-packet h-packet bg-packet-silver shadow-card overflow-hidden">
		<div className="relative rounded-2xl w-full h-full">
			<Image
				className="z-10 rounded-xl absolute inset-0 object-cover"
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
						src="/images/brand-logo.png"
						alt="Baccega Sandro, The Portfolio"
						width={250}
						height={150}
						priority={false}
					/>
				</span>
				<span className="relative col-start-2 col-end-3 row-start-2 row-end-3 mr-[1px]">
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
	</div>)
}