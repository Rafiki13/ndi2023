<script setup lang="ts">
import {ref, Ref} from "vue";

interface Sprite {
  id: number;
  fichier: string;
  height: number;
  marginBottom: number;
}
let id = 0;

const sprites: Ref<Sprite[]> = ref([
  {id: id++, nom: "Arbre", fichier: "tree.png", description: "arbre", height: 50, marginBottom: 3},
  {id: id++, nom: "Usine", fichier: "factory.png", description: "usine", height: 50, marginBottom: 7.6},
  {id: id++, nom: "Usine", fichier: "factory.png", description: "usine", height: 50, marginBottom: 0}
]);

</script>

<template>
  <div id="rotatingContainer">
    <img src="../assets/img/sprits/earth.png" alt="earth" id="earth"/>

    <img v-for="sprite in sprites"
         :key="sprite.id"
         :src="`./src/assets/img/sprits/${sprite.fichier}`"
         :style="`height: ${sprite.height}px; top: ${50 - (sprite.marginBottom * 4)}px; transform-origin: center ${125 + (sprite.marginBottom * 4)}px; transform: rotate(${(sprite.id * 360)/ id}deg);`"
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
  /*animation-duration: 20s;
  animation-name: rotate;
  animation-iteration-count: infinite;
  animation-direction: normal;
  transform-origin: center;
  animation-timing-function: linear;*/

    position: relative;
    width: 300px;
    height: 300px;
  }

#earth {
  margin: 25%;
  width: 50%;
  aspect-ratio: 1;
  image-rendering: pixelated;
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