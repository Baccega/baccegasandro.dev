"use client"

import { type CARDS, trans } from "@/app/page";
import { useSprings, animated, to, type SpringRef, config } from "@react-spring/web";
import { Card } from "./card";
import { useEffect, useRef, useState } from "react";
import { above_position, clip, random_position, scattered_position, showcase_position, stacked_position, up_position } from "@/lib/positions";
import { wait } from "@/lib/utils";
import { usePortfolioStore } from "@/lib/store";


export function AnimatedDeck(props: {
    deck: typeof CARDS[keyof typeof CARDS], selectedPacket?: number, packetsApi: SpringRef<{
        x: number;
        rot: number;
        scale: number;
        y: number;
        clipPath: number[];
    }>
}) {
    const [spawned, setSpawned] = useState(false);
    const previousCard = useRef<number | null>(null);
    const [cardsProps, cardsApi] = useSprings(props.deck.length, (i) => ({ x: 0, y: i * 2, rot: 0, scale: 1, boxShadow: 0, delay: 300 }));
    const currentCard = usePortfolioStore((state) => state.currentCard);
    const setIsAnimating = usePortfolioStore((state) => state.setIsAnimating);

    // Triggering the showcase animation for the selected packet
    useEffect(() => {
        if (spawned) return;
        const anim = async () => {
            if (props.selectedPacket === undefined) return;
            setIsAnimating(true);
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
            props.packetsApi.start((i) => ({
                ...above_position(i),
                immediate: true
            }));
            cardsApi.start((i) => ({ from: above_position(i), ...stacked_position(i, true) }
            ))
            await wait(1000);
            setIsAnimating(false);
            setSpawned(true);
        }
        anim()
    }, [spawned, cardsApi, props.packetsApi, props.selectedPacket, setIsAnimating]);

    // Triggering the current card scatter or stack animation
    useEffect(() => {
        if (!spawned) return;
        const anim = async () => {
            setIsAnimating(true);
            const invertedCard = props.deck.length - currentCard
            if (currentCard < (previousCard?.current ?? 0)) {
                // Re-Stack animation
                console.log("Re-Stack", invertedCard)
                await cardsApi.start((i) => {
                    if (i !== invertedCard - 1) return;
                    return ({ ...stacked_position(i, true), delay: 0 });
                })
            } else {
                // Scatter animation
                await cardsApi.start((i) => {
                    if (i !== invertedCard) return;
                    return ({ ...scattered_position(i) });
                })
            }
            await wait(200);
            // Keep button disabled if end of deck
            if (invertedCard !== 0) {
                setIsAnimating(false);
            }
            previousCard.current = currentCard;
        }
        anim()
    }, [cardsApi, setIsAnimating, currentCard, props.deck.length, spawned]);

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