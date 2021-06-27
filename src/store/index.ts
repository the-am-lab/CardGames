import { createStore } from 'vuex'
import { CardType, Card } from '@/types/WarGame'
import StoreState from '@/types/Store'

export default createStore({
  state: {
    cardsGame: [
      { name: "2", slug: "2", value: 2, type: CardType.hearts },
      { name: "3", slug: "3", value: 3, type: CardType.hearts },
      { name: "4", slug: "4", value: 4, type: CardType.hearts },
      { name: "5", slug: "5", value: 5, type: CardType.hearts },
      { name: "6", slug: "6", value: 6, type: CardType.hearts },
      { name: "7", slug: "7", value: 7, type: CardType.hearts },
      { name: "8", slug: "8", value: 8, type: CardType.hearts },
      { name: "9", slug: "9", value: 9, type: CardType.hearts },
      { name: "10", slug: "10", value: 10, type: CardType.hearts },
      { name: "Jack", slug: "jack", value: 11, type: CardType.hearts },
      { name: "Queen", slug: "queen", value: 12, type: CardType.hearts },
      { name: "King", slug: "king", value: 13, type: CardType.hearts },
      { name: "Ace", slug: "ace", value: 14, type: CardType.hearts },
      { name: "2", slug: "2", value: 2, type: CardType.diamonds },
      { name: "3", slug: "3", value: 3, type: CardType.diamonds },
      { name: "4", slug: "4", value: 4, type: CardType.diamonds },
      { name: "5", slug: "5", value: 5, type: CardType.diamonds },
      { name: "6", slug: "6", value: 6, type: CardType.diamonds },
      { name: "7", slug: "7", value: 7, type: CardType.diamonds },
      { name: "8", slug: "8", value: 8, type: CardType.diamonds },
      { name: "9", slug: "9", value: 9, type: CardType.diamonds },
      { name: "10", slug: "10", value: 10, type: CardType.diamonds },
      { name: "Jack", slug: "jack", value: 11, type: CardType.diamonds },
      { name: "Queen", slug: "queen", value: 12, type: CardType.diamonds },
      { name: "King", slug: "king", value: 13, type: CardType.diamonds },
      { name: "Ace", slug: "ace", value: 14, type: CardType.diamonds },
      { name: "2", slug: "2", value: 2, type: CardType.spades },
      { name: "3", slug: "3", value: 3, type: CardType.spades },
      { name: "4", slug: "4", value: 4, type: CardType.spades },
      { name: "5", slug: "5", value: 5, type: CardType.spades },
      { name: "6", slug: "6", value: 6, type: CardType.spades },
      { name: "7", slug: "7", value: 7, type: CardType.spades },
      { name: "8", slug: "8", value: 8, type: CardType.spades },
      { name: "9", slug: "9", value: 9, type: CardType.spades },
      { name: "10", slug: "10", value: 10, type: CardType.spades },
      { name: "Jack", slug: "jack", value: 11, type: CardType.spades },
      { name: "Queen", slug: "queen", value: 12, type: CardType.spades },
      { name: "King", slug: "king", value: 13, type: CardType.spades },
      { name: "Ace", slug: "ace", value: 14, type: CardType.spades },
      { name: "2", slug: "2", value: 2, type: CardType.clubs },
      { name: "3", slug: "3", value: 3, type: CardType.clubs },
      { name: "4", slug: "4", value: 4, type: CardType.clubs },
      { name: "5", slug: "5", value: 5, type: CardType.clubs },
      { name: "6", slug: "6", value: 6, type: CardType.clubs },
      { name: "7", slug: "7", value: 7, type: CardType.clubs },
      { name: "8", slug: "8", value: 8, type: CardType.clubs },
      { name: "9", slug: "9", value: 9, type: CardType.clubs },
      { name: "10", slug: "10", value: 10, type: CardType.clubs },
      { name: "Jack", slug: "jack", value: 11, type: CardType.clubs },
      { name: "Queen", slug: "queen", value: 12, type: CardType.clubs },
      { name: "King", slug: "king", value: 13, type: CardType.clubs },
      { name: "Ace", slug: "ace", value: 14, type: CardType.clubs },
    ],
    players: [{ name: "You", card: null, game: [] }, { name: "Opponent", card: null, game: [] }],
  },
  mutations: {
    updatePlayerCard(state: StoreState, data: { index: number, value: Card }): void {
      const { index, value } = data;
      state.players[index].card = value;
    },
    updateUsername(state: StoreState, value: string): void {
      state.players[0].name = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
