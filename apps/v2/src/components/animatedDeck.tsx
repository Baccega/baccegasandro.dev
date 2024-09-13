"use client"

import { trans } from "@/app/page";
import { useSprings, animated, to, type SpringRef, config } from "@react-spring/web";
import { Card } from "./card";
import { useEffect, useRef, useState } from "react";
import { wait } from "@/lib/utils";
import { usePortfolioStore } from "@/lib/store";
import { packets_above_position, packets_clip, packets_scattered_position, packets_showcase_position, type PacketSpringApi } from "@/lib/packetsPositions";
import { cards_above_position, cards_scattered_position, cards_stacked_position, cards_up_position } from "@/lib/cardPositions";
import type { Deck } from "@/content/packets";


export function AnimatedDeck(props: {
    deck: Deck, selectedPacket?: number, packetsApi: PacketSpringApi
}) {
    const [spawned, setSpawned] = useState(false);
    const previousCard = useRef<number | null>(null);
    const [cardsProps, cardsApi] = useSprings(props.deck.length, (i) => ({ x: 0, y: i, rot: 0, scale: 1, boxShadow: 0, delay: 1000, immediate: true }));
    const currentCard = usePortfolioStore((state) => state.currentCard);
    const setIsAnimating = usePortfolioStore((state) => state.setIsAnimating);

    // Triggering the showcase animation for the selected packet
    useEffect(() => {
        if (spawned) return;
        const anim = async () => {
            if (props.selectedPacket === undefined) return;
            setIsAnimating(true);
            await props.packetsApi.start((i) => {
                if (props.selectedPacket !== i) return packets_above_position(i);
                return packets_showcase_position();
            })
            await wait(1000);
            await props.packetsApi.start((i) => {
                if (props.selectedPacket !== i) return;
                return packets_clip(i)
            });
            await wait(1000);
            await cardsApi.start(cards_up_position)
            await wait(500);
            await props.packetsApi.start((i) => {
                if (props.selectedPacket !== i) return;
                return packets_scattered_position(i)
            });
            await wait(500);
            props.packetsApi.start((i) => ({
                ...packets_above_position(i),
                immediate: true
            }));
            cardsApi.start((i) => ({ from: cards_above_position(i), ...cards_stacked_position(i, true) }
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
            const invertedCard = props.deck.length - currentCard
            // Disable button if end of deck
            if (invertedCard === 0) {
                setIsAnimating(true);
            }

            if (currentCard < (previousCard?.current ?? 0)) {
                // Re-Stack animation
                await cardsApi.start((i) => {
                    if (i !== invertedCard - 1) return;
                    return ({ ...cards_stacked_position(i, true), delay: 0 });
                })
            } else {
                // Scatter animation
                await cardsApi.start((i) => {
                    if (i !== invertedCard) return;
                    return ({ ...cards_scattered_position(i) });
                })
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