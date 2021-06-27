export enum CardType {
    hearts = "hearts",
    diamonds = "diamonds",
    spades = "spades",
    clubs = "clubs",
}

export interface Card {
    name: string;
    slug: string;
    value: number;
    type: CardType;
}

export interface Player {
    name: string;
    card: Card | null;
    game: Array<Card>;
}