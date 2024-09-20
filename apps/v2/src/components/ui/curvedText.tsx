import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const curvedTextPathVariants = cva(
    "w-full",
    {
        variants: {
            size: {
                small: "text-[90px]",
                default: "text-[110px]",
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
                small: "matrix(1,0,0,1,-345,-220)",
                default: "matrix(1,0,0,1,-350,-210)",
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
            if (pathRef.current && textRef.current) {
                const path = pathRef.current;
                const text = textRef.current;

                const pathLength = path.getTotalLength();
                const textLength = text.getComputedTextLength();
                setStartOffset((pathLength - textLength) / 2);
            }
        }, []);

        return (
            <svg viewBox="0 0 1249 92" width="100%" height="75">
                <title>{text}</title>
                <g transform={cn(curvedGMatrixVariants({ size }))}>
                    <path ref={pathRef} className="hidden" fill="red" id="curve" d="M353.698,331.744C776.993,204.83 1192.62,213.923 1602.18,330.416" />
                    <text ref={textRef} className={cn(curvedTextPathVariants({ size }))}>
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