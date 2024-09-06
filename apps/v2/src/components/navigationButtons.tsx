"use client"

import { CARDS, PACKETS, trans } from "@/app/page";
import { usePortfolioStore } from "@/lib/store";
import { wait } from "@/lib/utils";
import { useEffect } from "react";


export function NavigationButtons() {

    const [isAnimating, setIsAnimating] = usePortfolioStore((state) => [state.isAnimating, state.setIsAnimating]);
    const [currentPacket, setCurrentPacket] = usePortfolioStore((state) => [state.currentPacket, state.setCurrentPacket]);
    const [selectedPacket, setSelectedPacket] = usePortfolioStore((state) => [state.selectedPacket, state.setSelectedPacket]);
    const [currentCard, setCurrentCard] = usePortfolioStore((state) => [state.currentCard, state.setCurrentCard]);

    const selectedDeck = (selectedPacket !== undefined) ? CARDS[selectedPacket] : []

    const isPrevDisabled = isAnimating || (selectedPacket === undefined && currentPacket === 0) || (selectedPacket !== undefined && currentCard === 0);
    const isNextDisabled = isAnimating || (selectedPacket === undefined && currentPacket >= PACKETS.length) || (selectedPacket !== undefined && currentCard >= selectedDeck.length);

    // Deck is finished
    useEffect(() => {
        if (currentCard !== selectedDeck.length) return;

        const backToPackets = async () => {
            await wait(1000);
            setSelectedPacket(undefined);
            setIsAnimating(false);
            return;
        }
        backToPackets()
    }, [currentCard, selectedDeck.length, setSelectedPacket, setIsAnimating])

    async function handleNext(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (selectedPacket !== undefined) {
            // Deck is visible
            if (currentCard > selectedDeck.length)
                return;
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
            // packetsApi.start((i) => {
            //     if (i <= prevPacket) return;
            //     return above_position(i);
            // })
        }
    }


    return <div className="absolute bottom-10 flex gap-10">
        <button disabled={isPrevDisabled} type="button" className="text-white" onClick={handlePrev}>{isAnimating ? "Disabled" : "Prev"}</button>
        <button disabled={isNextDisabled} type="button" className="text-white" onClick={handleNext}>{isAnimating ? "Disabled" : "Next"}</button>
    </div>
}