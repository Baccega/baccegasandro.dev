"use client";

import {
	CRITICAL_ASSET_BYTES,
	CRITICAL_IMAGE_ASSETS,
	DEFERRED_IMAGE_ASSETS,
} from "@/lib/assets";
import Image from "next/image";
import React from "react";
import { Spinner } from "./ui/spinner";

type NetworkInformation = {
	downlink?: number;
};

function loadAndDecode(src: string) {
	return new Promise<void>((resolve) => {
		const image = new window.Image();
		const done = () => resolve();

		image.onload = () => {
			if (image.decode)
				image
					.decode()
					.catch(() => undefined)
					.then(done);
			else done();
		};
		// A missing optional asset must not leave the whole site inaccessible.
		image.onerror = done;
		image.src = src;
	});
}

function getLoadEstimate() {
	const connection = (
		navigator as Navigator & { connection?: NetworkInformation }
	).connection;
	const mbps = connection?.downlink;
	if (!mbps) return null;

	// Add modest request/decode overhead to the transfer estimate.
	return Math.max(
		1,
		Math.ceil(((CRITICAL_ASSET_BYTES * 8) / (mbps * 1_000_000)) * 1.2),
	);
}

export function LoadingOverlay() {
	const [imagesLoaded, setImagesLoaded] = React.useState(false);
	const [dismissed, setDismissed] = React.useState(false);
	const [showBailout, setShowBailout] = React.useState(false);
	const [loadedCount, setLoadedCount] = React.useState(0);
	const [estimatedSeconds, setEstimatedSeconds] = React.useState<number | null>(
		null,
	);

	React.useEffect(() => {
		let cancelled = false;
		const bailoutTimer = globalThis.setTimeout(
			() => setShowBailout(true),
			5000,
		);
		setEstimatedSeconds(getLoadEstimate());

		Promise.all(
			CRITICAL_IMAGE_ASSETS.map(async (src) => {
				await loadAndDecode(src);
				if (!cancelled) setLoadedCount((count) => count + 1);
			}),
		).then(() => {
			if (cancelled) return;
			setImagesLoaded(true);

			const warmDeferredAssets = () => {
				for (const src of DEFERRED_IMAGE_ASSETS) void loadAndDecode(src);
			};
			if ("requestIdleCallback" in window)
				window.requestIdleCallback(warmDeferredAssets, { timeout: 2500 });
			else globalThis.setTimeout(warmDeferredAssets, 250);
		});

		return () => {
			cancelled = true;
			globalThis.clearTimeout(bailoutTimer);
		};
	}, []);

	const progress = Math.round(
		(loadedCount / CRITICAL_IMAGE_ASSETS.length) * 100,
	);
	const hidden = imagesLoaded || dismissed;

	return (
		<div
			aria-hidden={hidden}
			style={{
				opacity: hidden ? 0 : 1,
				visibility: hidden ? "hidden" : "visible",
				transition: "visibility 0.5s, opacity 0.5s linear",
			}}
			className="z-[100] fixed inset-0 bg-black flex flex-col justify-center items-center gap-4"
		>
			<div className="relative">
				<Image
					className="object-cover h-auto"
					src="/shapes/brand-logo.svg"
					alt="Loading logo"
					width={250}
					height={103}
					priority={true}
				/>
			</div>
			<p aria-hidden className="text-white text-3xl pt-2">
				Loading assets
			</p>
			<p className="text-white/70 text-base tabular-nums">
				{progress}%
				{estimatedSeconds && loadedCount === 0
					? ` · about ${estimatedSeconds}s on this connection`
					: ""}
			</p>
			<Spinner />
			{showBailout && (
				<button
					type="button"
					className="mt-4 rounded-md border border-white/60 px-5 py-2 text-base text-white transition-colors hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
					onClick={() => setDismissed(true)}
				>
					Continue anyway
				</button>
			)}
		</div>
	);
}
