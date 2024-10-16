import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";


const realisticButtonVariants = cva(
    "text-stone-950 p-3 rounded-full active:shadow-button-pressed bg-stone-300 border-4 border-stone-950 transition-all duration-200 active:scale-100 hover:scale-[102%] hover:shadow-button-hover shadow-button",
    {
        variants: {
            direction: {
                prev: "",
                next: "",
            },
            variant: {
                default: "",
                disabled:
                    "text-stone-950 bg-stone-600 border-stone-950 hover:shadow-button-pressed shadow-button-pressed scale-100 cursor-not-allowed hover:scale-100",
                ghost: "",
            },
            width: {
                default: "",
                wide: "py-1 w-full"
            }
        },
        defaultVariants: {
            variant: "default",
            direction: "prev",
            width: "default",
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof realisticButtonVariants> {
    className?: string;
}

const RealisticButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, direction, width, ...props }, ref) => {
        return (
            <button
                className={cn(realisticButtonVariants({ direction, variant, width, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
RealisticButton.displayName = "RealisticButton";

export { RealisticButton, realisticButtonVariants };