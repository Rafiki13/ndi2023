<script setup lang="ts">
import {ref, type Ref} from "vue";

const props = defineProps<{sprites: Ref<Sprite[]>}>();

interface Sprite {
  id: number;
  fichier: string;
  height: number;
  marginBottom: number;
}
let id = 0;

</script>

<template>
  <div id="rotatingContainer">
    <img src="../assets/img/sprits/earth.png" alt="earth" id="earth"/>

    <img v-for="sprite in sprites"
         :key="sprite.id"
         :src="`./src/assets/img/sprits/${sprite.fichier}`"
         :style="`height: ${sprite.height}px; top: ${50 - (sprite.marginBottom * 2)}px; transform-origin: center ${125 - (sprite.marginBottom * 2)}px; transform: translateX(-50%) rotate(${(sprite.id * 360)/ sprites.length}deg);`"
         class="sprite"
         />
  </div>
</template>

<style scoped lang="scss">
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

#rotatingContainer {
  animation-duration: 20s;
  animation-name: rotate;
  animation-iteration-count: infinite;
  animation-direction: normal;
  transform-origin: center center;
  animation-timing-function: linear;
  display:flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 300px;
  height: 300px;
  }

  #earth {
    margin: 50px;
    width: 250px;
    aspect-ratio: 1;
    image-rendering: pixelated;
  }

  .sprite {
    left: 50%;
    position: absolute;
    image-rendering: pixelated;
  }
</style>