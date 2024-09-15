import type { Card } from "@/content/packets";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import React, { useEffect } from "react";

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
	"relative grid grid-rows-[1fr,80px,1fr] grid-cols-1 pb-2 items-center justify-center rounded-2xl w-full h-full",
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
	const { texture, description, id, title, subtitle } = card;
	return (
		<div className={cn(cardWrapperVariants({ variant }))}>
			<div className={cn(cardContainerVariants({ variant }))}>
				<div className="w-full h-full bg-red-500 border-2 px-2" />
				<h2 className="relative flex justify-center text-center w-full h-full bg-no-repeat bg-cover text-2xl font-semibold text-foreground bg-ribbon">
					<CurvedText text={title} />
				</h2>
				<div className="text-center bg-card-background border-2 border-card-outline rounded-b-lg">
					{description.map((paragraph) => (
						<p key={paragraph} className="text-foreground">{paragraph}</p>
					))}
				</div>
				<Image
					className="-z-10 rounded-xl absolute inset-0 object-cover"
					src={texture}
					placeholder="blur"
					alt={title}
					fill
					priority={false}
				/>
			</div>
		</div>
	);
}


function CurvedText({ text }: { text: string }) {
	const pathRef = React.useRef<SVGPathElement>(null);
	const textRef = React.useRef<SVGTextElement>(null);
	const [startOffset, setStartOffset] = React.useState(-1000);

	// Set the start offset of the text to center it on the path
	useEffect(() => {
		if (pathRef.current && textRef.current) {
			const path = pathRef.current;
			const text = textRef.current;

			const pathLength = path.getTotalLength();
			const textLength = text.getComputedTextLength();
			setStartOffset((pathLength - textLength) / 2);
		}
	}, []);

	return (
		<svg viewBox="0 0 1250 92" width="240" height="75">
			<title>{text}</title>
			<g transform="matrix(1,0,0,1,-350,-240)">
				<path ref={pathRef} className="hidden" id="curve" d="M353.617,331.051C759.28,211.79 1175.2,206.549 1602.75,330.48" />
				<text ref={textRef} className="text-[110px] w-full">
					<textPath xlinkHref="#curve" startOffset={startOffset + 20}>
						{text}
					</textPath>
				</text>
			</g>
		</svg>
	)
}