"use client"

import { PACKETS, trans, type CARDS } from "@/app/page";
import { animated, to, type SpringValue, type SpringRef } from "@react-spring/web";
import { useEffect, useRef } from "react";
import { above_position, stacked_position } from "@/lib/positions";
import { usePortfolioStore } from "@/lib/store";
import { Packet } from "./packet";
import { wait } from "@/lib/utils";


export function AnimatedPackets(props: {
    packetsProps: {
        x: SpringValue<number>;
        rot: SpringValue<number>;
        scale: SpringValue<number>;
        y: SpringValue<number>;
        clipPath: SpringValue<number[]>;
    }[];
    packetsApi: SpringRef<{
        x: number;
        rot: number;
        scale: number;
        y: number;
        clipPath: number[];
    }>
}) {
    const previousPacket = useRef<number | null>(null);
    const setIsAnimating = usePortfolioStore((state) => state.setIsAnimating);
    const currentPacket = usePortfolioStore((state) => state.currentPacket);
    const [selectedPacket, setSelectedPacket] = usePortfolioStore((state) => [state.selectedPacket, state.setSelectedPacket]);

    function handlePacketClick(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        // This will trigger the packet showcase animation in the deck
        setSelectedPacket(currentPacket as keyof typeof CARDS);
        previousPacket.current = null;
    }

    // Triggering the current packet fall animation
    useEffect(() => {
        if (selectedPacket !== undefined) return;
        const anim = async () => {
            setIsAnimating(true);
            if (currentPacket < (previousPacket?.current ?? 0)) {
                // Going back animation
                props.packetsApi.start((i) => {
                    if (i !== currentPacket + 1) return;
                    return above_position(i);
                })
            } else {
                // Fall animation
                props.packetsApi.start((i) => {
                    if (currentPacket !== i) return;
                    return stacked_position(i);
                })
            }
            previousPacket.current = currentPacket;
            await wait(200);
            setIsAnimating(false);
        }
        anim()
    }, [selectedPacket, props.packetsApi, currentPacket, setIsAnimating]);

    return <>
        {props.packetsProps.map(({ x, y, rot, scale, clipPath }, i) => (
            <animated.div
                key={PACKETS[i].id}
                className="absolute inset-auto"
                style={{
                    transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
                }}
            >
                <animated.div
                    className="relative"
                    style={{
                        transform: to([rot, scale], trans),
                        clipPath: to(
                            [clipPath],
                            (clipPath) =>
                                `polygon(${clipPath[0]}% ${clipPath[1]}%, ${clipPath[2]}% ${clipPath[3]}%, ${clipPath[4]}% ${clipPath[5]}%, ${clipPath[6]}% ${clipPath[7]}%)`
                        ),
                    }}
                    onMouseDown={handlePacketClick}
                >
                    <Packet title={PACKETS[i].title} texture={PACKETS[i].texture} />
                </animated.div>
            </animated.div>
        ))}
    </>
}