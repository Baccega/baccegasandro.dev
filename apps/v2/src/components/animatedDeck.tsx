"use client"

import { useSprings, animated, to } from "@react-spring/web";
import Card from "./ui/card";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { trans, wait } from "@/lib/utils";
import { usePortfolioStore } from "@/lib/store";
import { packets_above_position, packets_clip, packets_scattered_position, packets_showcase_position, type PacketSpringApi } from "@/lib/packetsPositions";
import { cards_above_position, cards_scattered_position, cards_stacked_position, cards_up_position } from "@/lib/cardPositions";
import type { Deck } from "@/content/packets";


export function AnimatedDeck(props: {
    deck: Deck, selectedPacket?: number, packetsApi: PacketSpringApi
}) {
    const [spawned, setSpawned] = useState(false);
    const previousCard = useRef<number | null>(null);
    const dragState = useRef<{
        pointerId: number;
        index: number;
        startX: number;
        startTime: number;
        baseRot: number;
        baseY: number;
    } | null>(null);
    const skipScatterForCard = useRef<number | null>(null);
    const [draggingCardIndex, setDraggingCardIndex] = useState<number | null>(null);
    const [cardsProps, cardsApi] = useSprings(props.deck.length, () => ({ x: 5000, y: 5000, rot: 0, scale: 1, boxShadow: 0 }));
    const currentCard = usePortfolioStore((state) => state.currentCard);
    const setIsAnimating = usePortfolioStore((state) => state.setIsAnimating);
    const setCurrentCard = usePortfolioStore((state) => state.setCurrentCard);
    const activeCardIndex = props.deck.length - currentCard - 1;

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
            await cardsApi.start((i) => ({ x: 0, y: i, immediate: true }))
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
                if (skipScatterForCard.current === invertedCard) {
                    skipScatterForCard.current = null;
                    previousCard.current = currentCard;
                    return;
                }
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

    function handleCardPointerDown(index: number, e: PointerEvent<HTMLDivElement>) {
        if (!spawned || index !== activeCardIndex) return;
        const target = e.target;
        if (
            target instanceof HTMLElement &&
            target.closest("a, button, input, textarea, select, summary, [role='button']")
        ) {
            return;
        }

        dragState.current = {
            pointerId: e.pointerId,
            index,
            startX: e.clientX,
            startTime: e.timeStamp,
            baseRot: cardsProps[index]?.rot.get() ?? 0,
            baseY: cardsProps[index]?.y.get() ?? 0,
        };
        setDraggingCardIndex(index);
        e.currentTarget.setPointerCapture(e.pointerId);

        void cardsApi.start((i) => {
            if (i !== index) return;
            return {
                scale: 1.05,
                config: { friction: 30, tension: 700 },
            };
        });
    }

    function handleCardPointerMove(index: number, e: PointerEvent<HTMLDivElement>) {
        const state = dragState.current;
        if (!state || state.pointerId !== e.pointerId || state.index !== index) return;

        const movementX = e.clientX - state.startX;
        void cardsApi.start((i) => {
            if (i !== index) return;
            return {
                x: movementX,
                y: state.baseY,
                rot: state.baseRot + movementX / 12,
                scale: 1.05,
                config: { friction: 40, tension: 900 },
                immediate: true,
            };
        });
    }

    async function handleCardPointerEnd(index: number, e: PointerEvent<HTMLDivElement>) {
        const state = dragState.current;
        if (!state || state.pointerId !== e.pointerId || state.index !== index) return;
        dragState.current = null;
        setDraggingCardIndex(null);

        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
        }

        const movementX = e.clientX - state.startX;
        const elapsedMs = Math.max(e.timeStamp - state.startTime, 1);
        const velocity = Math.abs(movementX) / elapsedMs;
        const direction = movementX < 0 ? -1 : 1;
        const shouldDismiss = Math.abs(movementX) > 120 || velocity > 0.5;

        if (!shouldDismiss) {
            await cardsApi.start((i) => {
                if (i !== index) return;
                return {
                    x: 0,
                    y: state.baseY,
                    rot: state.baseRot,
                    scale: 1,
                    config: { friction: 35, tension: 500 },
                };
            });
            return;
        }

        skipScatterForCard.current = index;
        await cardsApi.start((i) => {
            if (i !== index) return;
            return {
                x: (window.innerWidth + 300) * direction,
                y: state.baseY,
                rot: state.baseRot + direction * 10 * Math.max(velocity, 1),
                scale: 1,
                boxShadow: 0,
                config: { friction: 26, tension: 220 },
            };
        });
        setCurrentCard(usePortfolioStore.getState().currentCard + 1);
    }

    return <>
        {cardsProps.map(({ x, y, rot, scale, boxShadow }, i) => (
            <animated.div
                key={`${props.selectedPacket ?? "deck"}-${props.deck[i].id}-${i}`}
                className="absolute inset-auto"
                style={{
                    transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
                }}
            >
                <animated.div
                    className="relative"
                    onPointerDown={(e) => handleCardPointerDown(i, e)}
                    onPointerMove={(e) => handleCardPointerMove(i, e)}
                    onPointerUp={(e) => void handleCardPointerEnd(i, e)}
                    onPointerCancel={(e) => void handleCardPointerEnd(i, e)}
                    style={{
                        transform: to([rot, scale], trans),
                        boxShadow: to(
                            [boxShadow],
                            (boxShadow) =>
                                `-50px 50px 100px 15px rgba(0, 0, 0, ${boxShadow})`
                        ),
                        cursor: i === draggingCardIndex ? "grabbing" : i === activeCardIndex ? "grab" : "default",
                        touchAction: i === activeCardIndex ? "none" : "auto",
                        userSelect: "none",
                        WebkitUserSelect: "none",
                    }}
                >
                    <Card card={props.deck[i]} />
                    {/* <div className="bg-red-400 w-card h-card shadow-xl">Hello</div> */}
                </animated.div>
            </animated.div>
        ))}</>
}
