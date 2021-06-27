<template>
  <div class="playerCard">
    <p>
      Picked:
      {{ card.name + " of " + card.type }}
    </p>
    <img :src="`/img/cards/${card.slug}_of_${card.type}.jpg`" />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  props: {
    card: {
      type: Object,
      default: null,
    },
  },
})
export default class PlayerCard extends Vue {}
</script>

<style lang="scss" scoped>
.playerCard {
  box-shadow: #2c2c2c30 0px 2px 5px 0px;
  border-radius: 8px;
  padding: 10px;
  width: 50%;
}
</style>