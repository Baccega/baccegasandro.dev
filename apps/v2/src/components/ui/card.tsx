import type { Card } from "@/content/packets";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import type React from "react";
import { CurvedText } from "./curvedText";

const cardWrapperVariants = cva(
	"relative rounded-xl border-card-border p-3 -z-20 w-card h-card border bg-card-outline",
	{
		variants: {
			variant: {
				default: "",
				foiled: ""
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

const cardContainerVariants = cva(
	"relative grid grid-rows-[1fr,80px,1fr] grid-cols-[1.5rem,1fr,1.5rem] items-center justify-center rounded-2xl w-full h-full",
	{
		variants: {
			variant: {
				default: "",
				foiled: ""
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface CardProps
	extends React.ButtonHTMLAttributes<HTMLDivElement>,
	VariantProps<typeof cardWrapperVariants> {
	card: Card;
}


export default function CardComponent({ card, variant }: CardProps) {
	const { texture, description, image, title, subtitle, headingSize = "default", wip } = card;

	// Need to use as because typescript does not like CSS variables
	const imageInlineStyle = {
		"--image": `url(${image})`
	} as React.CSSProperties;

	return (
		<div className={cn(cardWrapperVariants({ variant }))}>
			<div className={cn(cardContainerVariants({ variant }))}>
				<div className="relative h-[104%] col-start-2 translate-y-5 shadow-inner before:svg-portrait" style={imageInlineStyle}>
					<div className="relative h-full bg-card-portrait bg-no-repeat bg-cover bg-center" />
					{wip ? <p className="absolute top-20 left-10 text-white text-shadow-black flex text-3xl">Work in Progress</p> : null}
				</div>

				<h2 className="col-span-3 relative bg-center flex justify-center text-center w-full h-full bg-no-repeat bg-cover text-2xl font-semibold text-foreground bg-ribbon">
					<CurvedText size={headingSize} text={title} />
				</h2>
				<div className="col-start-2 text-center bg-card-description bg-no-repeat h-[102%] -translate-y-[1.2rem] pt-6 px-4 flex flex-col gap-2">
					{description.map((paragraph) => {
						if (typeof paragraph === "string") {
							return (
								<p key={paragraph} className="text-foreground text-2xl">{paragraph}</p>
							);
						}
						return (
							<p key={paragraph.key} className="text-foreground text-2xl">{paragraph}</p>
						);

					})}
				</div>
				<Image
					className="-z-10 rounded-xl absolute inset-0 object-cover"
					src={texture}
					placeholder="blur"
					alt={title}
					fill
					sizes="346px"
					priority={false}
				/>
			</div>
		</div>
	);
}