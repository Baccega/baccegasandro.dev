import type { StaticImageData } from "next/image";
import Image from "next/image";
import ribbon from "../resources/ribbon-1.png";
import { CurvedText } from "./ui/curvedText";

export function Packet(props: { title: string; texture: StaticImageData, portrait: string }) {

	// Need to use as because typescript does not like CSS variables
	const imageInlineStyle = {
		"--image": `url(${props.portrait})`
	} as React.CSSProperties;

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
						src="/images/cards-logo.png"
						alt="Baccega Sandro, The Portfolio"
						width={250}
						height={150}
						priority={false}
					/>
				</span>
				<div className="col-start-2 relative w-[121%] h-[102%] scale-90 packet-portrait-scale -translate-x-[33px] translate-y-5 shadow-inner before:card-portrait" style={imageInlineStyle}>
					<div className="relative h-full bg-card-portrait bg-no-repeat bg-cover bg-center" />
				</div>
				<h2 className="absolute bottom-[15%] bg-center flex justify-center text-center w-full h-[90px] bg-no-repeat bg-cover text-2xl font-semibold text-foreground bg-ribbon">
					<CurvedText size="default" text={props.title} />
				</h2>
			</div>
		</div>
	</div>)
}