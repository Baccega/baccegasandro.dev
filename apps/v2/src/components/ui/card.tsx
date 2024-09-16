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
	"relative grid grid-rows-[1fr,80px,1fr] grid-cols-1 items-center justify-center rounded-2xl w-full h-full",
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
	const { texture, description, id, title, subtitle, headingSize = "default" } = card;
	return (
		<div className={cn(cardWrapperVariants({ variant }))}>
			<div className={cn(cardContainerVariants({ variant }))}>
				<div className="bg-card-portrait bg-no-repeat h-[104%] mx-6 translate-y-5 shadow-inner" />
				<h2 className="relative flex justify-center text-center w-full h-full bg-no-repeat bg-cover text-2xl font-semibold text-foreground bg-ribbon">
					<CurvedText size={headingSize} text={title} />
				</h2>
				<div className="text-center bg-card-description bg-no-repeat h-[102%] -translate-y-4 mx-6 pt-4">
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