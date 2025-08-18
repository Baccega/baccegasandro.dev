import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const woodButtonVariants = cva(
    ["transition-all", "hover:drop-shadow-from-top hover:invert hover:sepia hover:contrast-75", "active:scale-95 active:contrast-125 active:drop-shadow-none"],
    {
        variants: {
            waiting: {
                true: ["cursor-wait", "hover:drop-shadow-none hover:invert-0 hover:sepia-0 hover:contrast-100 active:scale-100 active:contrast-100"],
                false: ""
            },
            _disabled: {
                true: ["cursor-not-allowed", "hover:drop-shadow-none hover:invert-0 hover:sepia-0 hover:contrast-100 active:scale-100 active:contrast-100"],
                false: ""
            }
        },
        defaultVariants: {
            waiting: false,
            _disabled: false,
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof woodButtonVariants> {
    className?: string;
}

const WoodButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, disabled, waiting, ...props }, ref) => {
        return (
            <button
                className={cn(woodButtonVariants({ className, _disabled: disabled, waiting }))}
                ref={ref}
                disabled={disabled}
                {...props}
            />
        );
    },
);
WoodButton.displayName = "WoodButton";

export { WoodButton, woodButtonVariants };