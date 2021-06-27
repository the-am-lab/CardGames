<template>
  <div class="home">
    <button class="reset" @click="reset" v-if="step == steps.ingame">
      Return home (loose current game)
    </button>

    <h1 v-if="step == steps.home">War - Card game</h1>

    <div v-if="step == steps.home">
      <button @click="chooseGamemode(gamemodes.oneplayer)">1 player</button>
      <button @click="chooseGamemode(gamemodes.twoplayer)">2 players</button>
    </div>

    <OnePlayer v-if="gamemode == gamemodes.oneplayer" />

    <TwoPlayers v-if="gamemode == gamemodes.twoplayer" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Store } from "node_modules/vuex/types";
import StoreState from "@/types/Store";
import OnePlayer from "../components/OnePlayer.vue";
import TwoPlayers from "../components/TwoPlayers.vue";

enum STEPS {
  home,
  ingame,
}

enum GAMEMODES {
  oneplayer,
  twoplayer,
}

@Options({
  components: {
    OnePlayer,
    TwoPlayers,
  },
})
export default class Home extends Vue {
  $store!: Store<StoreState>;

  step = STEPS.home;
  steps = STEPS;

  gamemode = -1;
  gamemodes = GAMEMODES;

  reset(): void {
    this.$store.state.players.forEach((player) => {
      player.card = null;
      player.game = [];
    });
    this.gamemode = -1;
    this.step = STEPS.home;
  }

  chooseGamemode(val: number): void {
    this.gamemode = val;
    this.step = STEPS.ingame;
  }
}
</script>

<style lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

p {
  margin: 5px 0 10px 0;
}

.reset {
  width: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

button {
  background: #2c2c2c;
  color: white;
  border: none;
  box-shadow: #2c2c2c30 0px 0px 5px 0px;
  outline: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:nth-child(2) {
    margin-left: 5px;
  }

  &:hover {
    background: #464646;
  }
}

.shadowed {
  box-shadow: #2c2c2c30 0px 0px 5px 0px;
  padding: 5px;
}
</style>