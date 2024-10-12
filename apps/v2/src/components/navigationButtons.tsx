"use client";

import { PACKETS } from "@/content/packets";
import { usePortfolioStore } from "@/lib/store";
import { wait } from "@/lib/utils";
import { Ban, ChevronLeft, ChevronRight, CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { RealisticButton } from "./ui/realisticButton";

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
    const isPrevDisabled = isStartOfStack || isAnimating;
    const isNextDisabled = isEndOfStack || isAnimating;

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
        <div className="absolute bottom-10 flex gap-10">
            <RealisticButton
                variant={isPrevDisabled ? "disabled" : "default"}
                disabled={isPrevDisabled}
                onClick={handlePrev}
                direction="prev"
            >
                {isStartOfStack ? <Ban strokeWidth={3} size="30" /> : <ChevronLeft strokeWidth={3} size="30" />}
            </RealisticButton>
            <RealisticButton
                variant={isNextDisabled ? "disabled" : "default"}
                disabled={isNextDisabled}
                onClick={handleNext}
                direction="next"
            >
                {isEndOfStack ? <Ban strokeWidth={3} size="30" /> : <ChevronRight strokeWidth={3} size="30" />}
            </RealisticButton>
        </div >
    );
}
