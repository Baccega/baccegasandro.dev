import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const curvedTextPathVariants = cva(
    "w-full font-bevan",
    {
        variants: {
            size: {
                tiny: "text-[60px]",
                small: "text-[70px]",
                default: "text-[95px]",
            },
        },
        defaultVariants: {
            size: "default",
        },
    },
);

const curvedGMatrixVariants = cva(
    "",
    {
        variants: {
            size: {
                tiny: "matrix(1,0,0,1,-355,-275)",
                small: "matrix(1,0,0,1,-355,-270)",
                default: "matrix(1,0,0,1,-355,-260)",
            },
        },
        defaultVariants: {
            size: "default",
        },
    },
);

export interface CurvedTextProps
    extends React.HTMLAttributes<HTMLOrSVGElement>,
    VariantProps<typeof curvedTextPathVariants> {
    className?: string;
    text: string;
}

const CurvedText = React.forwardRef<HTMLOrSVGElement, CurvedTextProps>(
    ({ text, className, size, ...props }, ref) => {
        const pathRef = React.useRef<SVGPathElement>(null);
        const textRef = React.useRef<SVGTextElement>(null);
        const [startOffset, setStartOffset] = React.useState(-1000);

        // Set the start offset of the text to center it on the path
        React.useEffect(() => {
            const path = pathRef.current;
            const text = textRef.current;
            if (!path || !text) return;

            const pathLength = path.getTotalLength();
            const textLength = text.getComputedTextLength();

            const newOffset = (pathLength - textLength) / 2;

            if (startOffset === newOffset) return;

            setStartOffset(newOffset);
        }, [startOffset]);

        return (
            <svg viewBox="0 0 1249 92" width="100%" height="75">
                <title>{text}</title>
                <g transform={cn(curvedGMatrixVariants({ size }))}>
                    <path ref={pathRef} className="hidden" fill="red" id="curve" d="M353.698,398.093 C776.993,245.796 1192.62,256.708 1602.18,396.499" />
                    <text ref={textRef} fill="white" stroke="black" strokeWidth="3" className={cn(curvedTextPathVariants({ size }))}>
                        <textPath xlinkHref="#curve" startOffset={startOffset}>
                            {text}
                        </textPath>
                    </text>
                </g>
            </svg >
        )
    },
);
CurvedText.displayName = "CurvedText";

export { CurvedText };