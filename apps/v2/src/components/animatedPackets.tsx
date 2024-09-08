"use client"

import { trans } from "@/app/page";
import { animated, to, type SpringValue, type SpringRef, config } from "@react-spring/web";
import { useEffect, useRef } from "react";
import { usePortfolioStore } from "@/lib/store";
import { Packet } from "./packet";
import { wait } from "@/lib/utils";
import { packets_above_position, packets_stacked_position, type PacketSpringApi, type PacketSpringProps } from "@/lib/packetsPositions";
import { Deck, PACKETS } from "@/content/packets";


export function AnimatedPackets(props: {
    packetsProps: PacketSpringProps[];
    packetsApi: PacketSpringApi
}) {
    const previousPacket = useRef<number | null>(null);
    const setIsAnimating = usePortfolioStore((state) => state.setIsAnimating);
    const currentPacket = usePortfolioStore((state) => state.currentPacket);
    const [selectedPacket, setSelectedPacket] = usePortfolioStore((state) => [state.selectedPacket, state.setSelectedPacket]);

    function handlePacketClick(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        if (selectedPacket !== undefined) return;
        // This will trigger the packet showcase animation in the deck
        setSelectedPacket(currentPacket);
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
                    return packets_above_position(i);
                })
            } else {
                // Fall animation
                props.packetsApi.start((i) => {
                    if (currentPacket !== i) return;
                    return { ...packets_stacked_position(i), config: { ...config.stiff, clamp: true } };
                })
            }
            previousPacket.current = currentPacket;
            await wait(200);
            setIsAnimating(false);
        }
        anim()
    }, [selectedPacket, props.packetsApi, currentPacket, setIsAnimating]);

    return <>
        {props.packetsProps.map(({ x, y, rot, scale, clipPath, dropShadow }, i) => (
            <animated.div
                key={PACKETS[i].id}
                className="absolute inset-auto"
                style={{
                    transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
                    filter: to(
                        [dropShadow],
                        (dropShadow) =>
                            `drop-shadow(${dropShadow[0]}px ${dropShadow[1]}px ${dropShadow[2]}px rgba(0, 0, 0, ${dropShadow[3]}))`
                    ),
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