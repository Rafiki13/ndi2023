<script setup lang="ts">
import {ref} from 'vue';
import type {Ref} from 'vue';
import SpriteElement from "@/components/SpriteElement.vue";

let id = 0;

// TODO : automatiser les sprites à utiliser lors des réponses de l'utilisateur
const sprites: Ref<Sprite[]> = ref([
  {id: id++, nom: "Arbre", fichier: "tree.png", description: "arbre"},
  {id: id++, nom: "Usine", fichier: "factory.png", description: "usine"}
]);

interface Sprite {
  id: number;
  nom: string;
  fichier: string;
  description: string;
}

const actualSprite = ref();

const isFullScreen: Ref<boolean> = ref(true);

function afficherDescription(spriteId: number) {
  actualSprite.value = sprites.value[spriteId]
}

function retirerDescription() {
  actualSprite.value = null
}

</script>

<template>
  <div id="popup_container" :class="{inventoryGUI: true, fullscreen_popup: isFullScreen}">
    <div id="popup" class="inventoryGUI_item">
      <!-- TODO : faire en sorte que la croix mette la fenetre en petit-->
      <img src="../assets/img/minecraftGUI/cross.png" alt="close pop-up" :class="{cross: true, hide_cross: !isFullScreen}" @click="isFullScreen = !isFullScreen"/>

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
  </div>
</template>

<style scoped>
#sprites {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 100%;
}

#sprites li {
  list-style-type: none;
}

#popup {
  background-image: url("./src/assets/img/img.png");
  background-position: center center;
  background-size: cover;
  position: relative;
  height: 100%;
}

#popup_container {
  aspect-ratio: 3.2;
  width: 300px;
}

.cross {
  position: absolute;
  right: 5px;
  top: 5px;
}

.hide_cross {
  display: none;
}

.fullscreen_popup {
  width: 80vw !important;
}

</style>