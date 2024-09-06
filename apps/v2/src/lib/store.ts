import type { CARDS } from "@/app/page";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AnimationState {
	currentPacket: number;
	setCurrentPacket: (newPacket: number) => void;
	currentCard: number;
	setCurrentCard: (newCard: number) => void;
	selectedPacket: keyof typeof CARDS | undefined;
	setSelectedPacket: (newPacket: keyof typeof CARDS | undefined) => void;
	isAnimating: boolean;
	setIsAnimating: (newState: boolean) => void;
}

export const usePortfolioStore = create<AnimationState>((set) => ({
	currentPacket: 0,
	setCurrentPacket: (newPacket: number) => set({ currentPacket: newPacket }),
	currentCard: 0,
	setCurrentCard: (newCard: number) => set({ currentCard: newCard }),
	selectedPacket: undefined,
	setSelectedPacket: (newPacket: keyof typeof CARDS | undefined) =>
		set({ selectedPacket: newPacket, currentCard: 0, currentPacket: 0 }),
	isAnimating: false,
	setIsAnimating: (newState: boolean) => set({ isAnimating: newState }),
}));
