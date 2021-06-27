import { Card, Player } from "./WarGame";

export default interface StoreState {
    cardsGame: Array<Card>,
    players: Array<Player>,
}