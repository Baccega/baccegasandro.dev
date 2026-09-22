import { cn } from "@/lib/utils";

type CopyrightProps = {
	className?: string;
};

export function Copyright({ className }: CopyrightProps) {
	const currentYear = new Date().getFullYear();

	return (
		<a
			className={cn("whitespace-nowrap hover:underline text-white hover:text-white/80", className)}
			href="https://github.com/Baccega/baccegasandro.dev"
			target="_blank"
			rel="noreferrer"
		>
			© 2022-{currentYear} Baccega Sandro
		</a>
	);
}
