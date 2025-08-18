"use client";

import { PACKETS } from "@/content/packets";
import { usePortfolioStore } from "@/lib/store";
import { wait } from "@/lib/utils";
import { Ban, ChevronLeft, ChevronRight, CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { RealisticButton } from "./ui/realisticButton";
import arrowLeft from "/public/shapes/arrow-left-wood.svg";
import arrowRight from "/public/shapes/arrow-right-wood.svg";
import disabled from "/public/shapes/disabled-wood.svg";
import Image from "next/image";
import { WoodButton } from "./ui/woodButton";

export function NavigationButtons() {
    const [isAnimating, setIsAnimating] = usePortfolioStore(
        useShallow((state) => [state.isAnimating, state.setIsAnimating]),
    );
    const [currentPacket, setCurrentPacket] = usePortfolioStore((state) => [
        state.currentPacket,
        state.setCurrentPacket,
    ]);
    const [selectedPacket, setSelectedPacket] = usePortfolioStore((state) => [
        state.selectedPacket,
        state.setSelectedPacket,
    ]);
    const [currentCard, setCurrentCard] = usePortfolioStore((state) => [
        state.currentCard,
        state.setCurrentCard,
    ]);

    const selectedDeck =
        selectedPacket !== undefined ? PACKETS[selectedPacket].deck : [];

    const isStartOfStack =
        (selectedPacket === undefined && currentPacket === 0) ||
        (selectedPacket !== undefined && currentCard === 0);
    const isEndOfStack =
        (selectedPacket === undefined && currentPacket >= PACKETS.length - 1) ||
        (selectedPacket !== undefined && currentCard >= selectedDeck.length);

    // Deck is finished
    useEffect(() => {
        if (currentCard !== selectedDeck.length || selectedDeck.length === 0)
            return;

        const backToPackets = async () => {
            await wait(1000);
            setSelectedPacket(undefined);
            setIsAnimating(false);
            return;
        };
        backToPackets();
    }, [currentCard, selectedDeck.length, setSelectedPacket, setIsAnimating]);

    async function handleNext(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (isAnimating) return;

        if (selectedPacket !== undefined) {
            // Deck is visible
            if (currentCard > selectedDeck.length) return;
            const nextCard = currentCard + 1;
            setCurrentCard(nextCard);
        } else {
            // Packets are visible
            if (currentCard === PACKETS.length) return;
            const nextPacket = currentPacket + 1;
            setCurrentPacket(nextPacket);
        }
    }

    async function handlePrev(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (isAnimating) return;

        if (selectedPacket !== undefined) {
            // Deck is visible
            if (currentCard === 0) return;
            const prevCard = currentCard - 1;
            setCurrentCard(prevCard);
        } else {
            // Packets are visible
            if (currentPacket === 0) return;
            const prevPacket = currentPacket - 1;
            setCurrentPacket(prevPacket);
        }
    }

    return (
        <div className="absolute bottom-2 md:bottom-10 flex gap-20">
            <WoodButton
                waiting={isAnimating}
                disabled={isStartOfStack}
                onClick={handlePrev}
            >
                {isStartOfStack ? <Image className="pointer-events-none" width={64} src={disabled} alt="No previous card/packet" /> : <Image className="pointer-events-none" width={64} src={arrowLeft} alt="Previous card/packet" />}
            </WoodButton>
            <WoodButton
                waiting={isAnimating}
                disabled={isEndOfStack}
                onClick={handleNext}
            >
                {isEndOfStack ? <Image className="pointer-events-none" width={64} src={disabled} alt="No next packet" /> : <Image className="pointer-events-none" width={64} src={arrowRight} alt="Next card/packet" />}
            </WoodButton>
        </div >
    );
}
