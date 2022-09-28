
export interface SingleCard {
    title: string;
    subtitle: string;
    type: "work" | "education" | "project" | "contact" | "bio";
    description: string;
    image: string | null;

}