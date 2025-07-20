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
	"relative grid grid-rows-[1fr,80px,auto,1fr] grid-cols-[1.5rem,1fr,1.5rem] items-center justify-center rounded-2xl w-full h-full",
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
	"absolute border-[3px] bg-white border-card-dividers-color w-10 h-10 rounded-full flex justify-center items-center cursor-help",
	{
		variants: {
			position: {
				center: "bottom-0",
				'odd-1': "left-[65px] bottom-[-3px]",
				'odd-3': "right-[65px] bottom-[-3px]",
				'even-1': "left-[35px] bottom-[-8px]",
				'even-2': "left-[90px] bottom-[-2px]",
				'even-3': "right-[90px] bottom-[-2px]",
				'even-4': "right-[35px] bottom-[-8px]",
			},
		},
	},
);

function getBadgePosition(index: number, totalNumberOfBadges: number): VariantProps<typeof badgeVariants>["position"] {
	switch (true) {
		case totalNumberOfBadges === 1 || (totalNumberOfBadges === 3 && index === 1):
			return 'center'
		case totalNumberOfBadges === 3 && index === 0:
			return 'odd-1';
		case totalNumberOfBadges === 3 && index === 2:
			return 'odd-3';
		case totalNumberOfBadges === 4 && index === 0:
			return 'even-1';
		case totalNumberOfBadges === 2 && index === 0 || (totalNumberOfBadges === 4 && index === 1):
			return 'even-2';
		case totalNumberOfBadges === 2 && index === 1 || (totalNumberOfBadges === 4 && index === 2):
			return 'even-3';
		case totalNumberOfBadges === 4 && index === 3:
			return 'even-4';
		default:
			return "center"
	}
}

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

				<h2 className="col-span-3 relative bg-center flex justify-center text-center w-full h-full bg-no-repeat bg-cover text-2xl font-semibold text-foreground bg-ribbon">
					<CurvedText size={headingSize} text={title} />
				</h2>
				<span className="col-start-2 relative w-full h-full z-20 flex justify-center">
					{badges.map((badge, i) => <span key={i} className={badgeVariants({ position: getBadgePosition(i, badges.length) })}>
						<badge.icon className="m-auto" />
					</span>)}

				</span>
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