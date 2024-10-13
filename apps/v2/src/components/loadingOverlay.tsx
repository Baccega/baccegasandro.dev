"use client"

import React from "react"
import Image from "next/image"
import { Spinner } from "./ui/spinner"

export function LoadingOverlay() {
    const [imagesLoaded, setImagesLoaded] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            const images = Array.from(document.querySelectorAll("div img")) as HTMLImageElement[];

            const proms = images.map(im => new Promise(res => {
                if (im.complete) return res([im.width, im.height]);
                im.onload = () => res([im.width, im.height]);
            }));

            Promise.all(proms).then(data => {
                setImagesLoaded(true);
            })
        }, 1000);
    }, []);


    return (<div aria-hidden style={{ opacity: imagesLoaded ? 0 : 1, visibility: imagesLoaded ? 'hidden' : 'visible', transition: 'visibility 0.5s, opacity 0.5s linear;' }} className="z-[100] absolute w-[100dvw] h-[100dvh] bg-black flex flex-col justify-center items-center gap-4">
        <Image
            className="object-cover"
            src="/shapes/brand-logo.svg"
            alt="Loading logo"
            width={250}
            height={150}
            priority={true}
        />
        <p aria-hidden className="text-white text-3xl pt-2">Loading assets</p>
        <Spinner />
    </div>)
}