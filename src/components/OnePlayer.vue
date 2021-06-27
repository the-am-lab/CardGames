<template>
  <div class="game onePlayer">
    <h2>One player</h2>
    <div class="gameInfos">
      <div class="cardsNumber">
        <p class="shadowed">
          My cards: {{ $store.state.players[0].game.length }}
        </p>
        <p class="shadowed">
          Opponent cards: {{ $store.state.players[1].game.length }}
        </p>
      </div>
      <p class="shadowed">
        Player ahead: <b>{{ playerAhead }}</b>
      </p>
    </div>
    <button @click="pick()">Draw!</button>
    <p
      class="shadowed full"
      :class="{ valid: wonDraw == true, invalid: wonDraw == false }"
      v-if="
        $store.state.players[0].card != null &&
        $store.state.players[1].card != null
      "
    >
      {{ playersStatus }}
    </p>

    <div
      class="playersCard"
      v-if="
        $store.state.players[0].card != null &&
        $store.state.players[1].card != null
      "
    >
      <PlayerCard :card="$store.state.players[0].card" />
      <PlayerCard :card="$store.state.players[1].card" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Card } from "@/types/WarGame";
import { Store } from "node_modules/vuex/types";
import StoreState from "@/types/Store";
import PlayerCard from "@/components/ui/PlayerCard.vue";

@Options({
  components: {
    PlayerCard,
  },
})
export default class OnePlayer extends Vue {
  $store!: Store<StoreState>;

  wonDraw: boolean | null = null;
  playersStatus = "";
  playerAhead = "";

  created(): void {
    this.prepareGame();
  }

  async prepareGame(): Promise<void> {
    await this.awaitTimeOut(this.divideCards());
  }

  divideCards(): Promise<void> {
    return new Promise((res) => {
      let game = [...this.$store.state.cardsGame];
      let a = 0;
      while (a < game.length) {
        this.$store.state.players[0].game.push(this.getCard(game));
        this.$store.state.players[1].game.push(this.getCard(game));
      }
      res();
    });
  }

  getCard(game: Array<Card>): Card {
    let i = this.getRandomInt(0, game.length);
    let card = game[i];
    game.splice(i, 1);
    return card;
  }

  getLastCard(i: number): Card | null {
    let game = this.$store.state.players[i].game;
    let card = game.pop();
    if (card != undefined) {
      return card;
    } else {
      return null;
    }
  }

  pick() {
    if (
      this.$store.state.players[0].game.length > 0 ||
      this.$store.state.players[1].game.length > 0
    ) {
      this.$store.commit("updatePlayerCard", {
        index: 0,
        value: this.getLastCard(0),
      });
      this.$store.commit("updatePlayerCard", {
        index: 1,
        value: this.getLastCard(1),
      });

      this.calculateHand();
    }
  }

  calculateHand(): void {
    if (
      this.$store.state.players[0].card != null &&
      this.$store.state.players[1].card != null
    ) {
      if (
        this.$store.state.players[0].card.value ==
        this.$store.state.players[1].card.value
      ) {
        this.$store.state.players[0].game.unshift(
          this.$store.state.players[0].card
        );
        this.$store.state.players[1].game.unshift(
          this.$store.state.players[1].card
        );
        this.playersStatus = "Tie!";
      } else if (
        this.$store.state.players[0].card.value >
        this.$store.state.players[1].card.value
      ) {
        this.$store.state.players[0].game.unshift(
          this.$store.state.players[0].card
        );
        this.$store.state.players[0].game.unshift(
          this.$store.state.players[1].card
        );
        this.playersStatus = "You win the draw!";
        this.wonDraw = true;
      } else if (
        this.$store.state.players[0].card.value <
        this.$store.state.players[1].card.value
      ) {
        this.$store.state.players[1].game.unshift(
          this.$store.state.players[0].card
        );
        this.$store.state.players[1].game.unshift(
          this.$store.state.players[1].card
        );
        this.playersStatus = "You loose the draw!";
        this.wonDraw = false;
      }
    }

    if (this.$store.state.players[0].game.length == 0) {
      this.playersStatus = "Player 2 has won!";
    } else if (this.$store.state.players[1].game.length == 0) {
      this.playersStatus = "Player 1 has won!";
    }

    if (this.$store.state.players[0].game.length > 26) {
      this.playerAhead = this.$store.state.players[0].name;
    } else {
      this.playerAhead = this.$store.state.players[1].name;
    }
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  awaitTimeOut(callback: Promise<void>, time = 1000): Promise<void> {
    return new Promise((res) => {
      setTimeout(async () => {
        await callback;
        res();
      }, time);
    });
  }
}
</script>

<style lang="scss" scoped>
.game {
  width: 760px;
  max-width: 100%;
  margin: 0 auto;
}
.cardsNumber {
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  column-gap: 10px;

  p {
    width: 100%;
  }
}
button {
  width: 100%;
  padding: 20px 10px;
  font-size: 20px;
  margin: 10px 0;
}
.playersCard {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  column-gap: 10px;
}

.valid {
  box-shadow: #0b800030 0px 2px 5px 0px;
}
.invalid {
  box-shadow: #7a000030 0px 2px 5px 0px;
}
</style>