import { StaticImageData } from "next/image";

export interface SingleCard {
    title: string;
    subtitle?: string;
    type: "work" | "education" | "project" | "contact" | "bio";
    description: JSX.Element;
    image: StaticImageData;
    longText?: boolean;
}