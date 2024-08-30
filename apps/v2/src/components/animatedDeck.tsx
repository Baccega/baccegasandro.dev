"use client"

import { trans, type CARDS } from "@/app/page";
import { useSprings, animated, to, type SpringRef } from "@react-spring/web";
import { Card } from "./card";
import { useEffect } from "react";
import { above_position, clip, scattered_position, showcase_position, stacked_position, up_position } from "@/lib/positions";
import { wait } from "@/lib/utils";


export function AnimatedDeck(props: {
    deck: typeof CARDS[keyof typeof CARDS], selectedPacket?: number, packetsApi: SpringRef<{
        x: number;
        rot: number;
        scale: number;
        y: number;
        clipPath: number[];
    }>
}) {
    const [cardsProps, cardsApi] = useSprings(props.deck.length, (i) => ({ x: 0, y: i * 2, rot: 0, scale: 1, boxShadow: 0, delay: 300 }));

    useEffect(() => {
        const anim = async () => {
            if (props.selectedPacket === undefined) return;
            await props.packetsApi.start((i) => {
                if (props.selectedPacket !== i) return above_position(i);
                return showcase_position();
            })
            await wait(1000);
            await props.packetsApi.start((i) => {
                if (props.selectedPacket !== i) return;
                return clip(i)
            });
            await wait(1000);
            await cardsApi.start(up_position)
            await wait(500);
            await props.packetsApi.start((i) => {
                if (props.selectedPacket !== i) return;
                return scattered_position(i)
            });
            await wait(500);
            await cardsApi.start((i) => ({ from: above_position(i), ...stacked_position(i, true) }))
        }
        anim()
    }, [cardsApi, props.packetsApi, props.selectedPacket]);

    return <>
        {cardsProps.map(({ x, y, rot, scale, boxShadow }, i) => (
            <animated.div
                key={props.deck[i].id}
                className="absolute inset-auto"
                style={{
                    transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
                }}
            >
                <animated.div
                    className="relative"
                    style={{
                        transform: to([rot, scale], trans),
                        boxShadow: to(
                            [boxShadow],
                            (boxShadow) =>
                                `-50px 50px 100px 15px rgba(0, 0, 0, ${boxShadow})`
                        ),
                    }}
                >
                    <Card description={props.deck[i].description} title={props.deck[i].title} texture={props.deck[i].texture} />
                    {/* <div className="bg-red-400 w-card h-card shadow-xl">Hello</div> */}
                </animated.div>
            </animated.div>
        ))}</>
}