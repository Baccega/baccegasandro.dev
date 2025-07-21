import type { Card } from "@/content/packets";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import type React from "react";
import { CurvedText } from "./curvedText";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

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
	"relative grid grid-rows-[1fr,auto,80px,1fr] grid-cols-[1.5rem,1fr,1.5rem] items-center justify-center rounded-2xl w-full h-full",
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

const cardDescriptionVariants = cva(
	"text-foreground text-balance",
	{
		variants: {
			variant: {
				default: "text-2xl",
				small: "text-xl",
				tiny: "text-md",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

const badgeVariants = cva(
	"absolute right-[-18px] border-[3px] bg-white border-card-dividers-color w-10 h-10 rounded-full flex justify-center items-center cursor-help",
	{
		variants: {
			position: {
				1: "bottom-[130px]",
				2: "bottom-[88px]",
				3: "bottom-[46px]",
				4: "bottom-[4px]",
			},
		},
		defaultVariants: {
			position: 1
		}
	},
);

export interface CardProps
	extends React.ButtonHTMLAttributes<HTMLDivElement>,
	VariantProps<typeof cardWrapperVariants> {
	card: Card;
}


export default function CardComponent({ card, variant }: CardProps) {
	const { texture, description, image, title, subtitle, descriptionSize, headingSize = "default", wip, badges } = card;

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
				<span className="col-start-2 relative w-full h-full z-20 flex justify-center">
					{badges.map((badge, i) => <Tooltip key={badge.description}>
						<TooltipContent side="left">
							<p className="text-lg">{badge.description}</p>
						</TooltipContent>
						<TooltipTrigger asChild className="cursor-help"><span className={badgeVariants({ position: i + 1 <= 4 && i + 1 > 1 ? i + 1 as 1 | 2 | 3 | 4 : 1 })}>
							<badge.icon className="m-auto" />
						</span></TooltipTrigger>

					</Tooltip>)}
				</span>
				<h2 className="col-span-3 relative bg-center flex justify-center text-center w-full h-full bg-no-repeat bg-cover text-2xl font-semibold text-foreground bg-ribbon">
					<CurvedText size={headingSize} text={title} />
				</h2>
				<div className="relative col-start-2 text-center bg-card-description bg-no-repeat h-[102%] -translate-y-[1.2rem] pt-6 px-4 flex flex-col gap-2">
					{description.map((paragraph) =>
						<p key={typeof paragraph === "string" ? paragraph : paragraph.key} className={cardDescriptionVariants({ variant: descriptionSize })} > {paragraph}</p>
					)}
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
		</div >
	);
}