import type { Card } from "@/content/packets";
import Image from "next/image";

export default function CardComponent(props: Card) {
	return (
		<div className="relative rounded-xl border-card-border p-3 -z-20 w-card h-card border bg-card-outline">
			<div className="relative flex flex-col items-center justify-center rounded-2xl w-full h-full p-4">
				<Image
					className="-z-10 rounded-xl absolute inset-0 object-cover"
					src={props.texture}
					placeholder="blur"
					alt={props.title}
					fill
					priority={false}
				/>
				<h2 className="text-2xl font-semibold text-foreground">
					{props.title}
				</h2>
				<div className="bg-card-background border-2 border-card-outline rounded-b-lg">
					{props.description.map((paragraph) => (
						<p key={paragraph} className="text-foreground">{paragraph}</p>
					))}
				</div>
			</div>
		</div>
	);
}
