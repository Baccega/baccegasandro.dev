import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AnimationState {
	currentPacket: number;
	setCurrentPacket: (newPacket: number) => void;
	currentCard: number;
	setCurrentCard: (newCard: number) => void;
	selectedPacket: number | undefined;
	setSelectedPacket: (newPacket: number | undefined) => void;
	isAnimating: boolean;
	setIsAnimating: (newState: boolean) => void;
}

export const usePortfolioStore = create<AnimationState>()(
	devtools((set) => ({
		currentPacket: 0,
		setCurrentPacket: (newPacket: number) =>
			set({ currentPacket: newPacket }, false, "setCurrentPacket"),
		currentCard: 0,
		setCurrentCard: (newCard: number) =>
			set({ currentCard: newCard }, false, "setCurrentCard"),
		selectedPacket: undefined,
		setSelectedPacket: (newPacket: number | undefined) =>
			set(
				{ selectedPacket: newPacket, currentCard: 0, currentPacket: 0 },
				false,
				"setSelectedPacket",
			),
		isAnimating: false,
		setIsAnimating: (newState: boolean) =>
			set({ isAnimating: newState }, false, "setIsAnimating"),
	})),
);
