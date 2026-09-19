import { PACKETS } from "@/content/packets";
import backgroundTexture from "../../public/textures/background-texture-4.jpeg";

const SHARED_SHAPES = [
	"/shapes/brand-logo.svg",
	"/shapes/packet-border.svg",
	"/shapes/packet-portrait.svg",
	"/shapes/ribbon-bended.svg",
	"/shapes/arrow-left-wood.svg",
	"/shapes/arrow-right-wood.svg",
	"/shapes/disabled-wood.svg",
];

const unique = (assets: string[]) => [...new Set(assets)];

// These assets can be shown on the landing screen, so the loading overlay waits
// for their actual load and decode instead of relying on a fixed delay.
export const CRITICAL_IMAGE_ASSETS = unique([
	backgroundTexture.src,
	...SHARED_SHAPES,
	...PACKETS.flatMap((packet) => [packet.texture.src, packet.portrait]),
	...PACKETS.flatMap((packet) => packet.deck.map((card) => card.texture.src)),
]);

// Card portraits and card-only parchment are intentionally warmed after the
// landing screen. Blocking startup on them would add roughly 20 MB today.
export const DEFERRED_IMAGE_ASSETS = unique([
	"/shapes/card-description.svg",
	"/shapes/card-portrait.svg",
	...PACKETS.flatMap((packet) => packet.deck.map((card) => card.image)),
]).filter((asset) => !CRITICAL_IMAGE_ASSETS.includes(asset));

// Public/static source sizes as of this asset set. This is only used to show a
// useful connection-based estimate; completion is always based on real events.
export const CRITICAL_ASSET_BYTES = 9_101_356;
