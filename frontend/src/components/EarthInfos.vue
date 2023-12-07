<script setup lang="ts">
import {ref} from 'vue';
import type {Ref} from 'vue';
import SpriteElement from "@/components/SpriteElement.vue";

let id=0;

// TODO : automatiser les sprites à utiliser lors des réponses de l'utilisateur
const sprites: Ref<Sprite[]> = ref([
  {id: id++, nom: "Arbre", fichier: "tree.png", description:"arbre"},
  {id: id++, nom: "Usine", fichier: "factory.png", description:"usine"}
]);

interface Sprite {
  id: number;
  nom: string;
  fichier: string;
  description: string;
}

const actualSprite = ref();

function afficherDescription(spriteId: number){
  actualSprite.value = sprites.value[spriteId]
}

function retirerDescription(){
  actualSprite.value = null
}
</script>

<template>
  <div id="popup">

    <!-- TODO : faire en sorte que la croix mette la fenetre en petit-->
    <button id="cross">X</button>

    <div v-if="actualSprite">
      <button @click="retirerDescription">X</button>
      {{ actualSprite.description }}
    </div>

    <ul id="sprites">
      <li v-for="sprite in sprites" :key="sprite.id">
        <SpriteElement v-model="sprite.fichier" @afficher-description="afficherDescription(sprite.id)"/>
      </li>
    </ul>

  </div>
</template>

<style scoped>
  #cross {
    position: relative;
    top: 10px;
    left: 10px;
  }

  #popup {
    background-color: lightgray;
  }

</style>