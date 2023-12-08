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

const isFullScreen: Ref<boolean> = ref(false);

function afficherDescription(spriteId: number) {
  actualSprite.value = sprites.value[spriteId]
  isFullScreen.value = true;
}

function retirerDescription() {
  actualSprite.value = null
}

function quitFullScreen() {
  isFullScreen.value = false;
  retirerDescription();
}

</script>

<template>
  <div id="popup_container" :class="{inventoryGUI: true, fullscreen_popup: isFullScreen}">
    <div id="popup" class="inventoryGUI_item">
      <img src="../assets/img/minecraftGUI/cross.png" alt="close pop-up"
           :class="{cross: true, hide_cross: !isFullScreen}" @click="quitFullScreen()"/>

      <div v-if="actualSprite && isFullScreen" id="popupInfos" class="inventoryGUI">
        <img src="../assets/img/minecraftGUI/cross.png" alt="close description" @click="retirerDescription" class="cross"/>
        <div id="icon-container" class="inventoryGUI_item">
          <img :src="'./src/assets/img/' + actualSprite.fichier" alt="">
        </div>
        <p>{{ actualSprite.description }}</p>
      </div>

      <ul id="sprites">
        <li v-for="sprite in sprites" :key="sprite.id">
          <SpriteElement v-model="sprite.fichier" @afficher-description="afficherDescription(sprite.id)"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
  background-image: url("./src/assets/img/background.png");
  background-repeat: repeat-x;
  background-position: center center;
  background-size: contain;
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

#popupInfos {
  position: absolute;
  top: 10px;
  left: 10px;
  width: calc(100% - 70px);

  > #icon-container{
    width: 80px;
    aspect-ratio: 1;
    display:flex;
    justify-content: center;
    align-items: center;

    > img {
      width: auto;
      height: auto;
      max-width: 80%;
      max-height: 80%;
    }
  }
}
</style>