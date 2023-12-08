<script setup lang="ts">
import {ref} from 'vue';
import type {Ref} from 'vue';
import SpriteElement from "@/components/SpriteElement.vue";
import {type EarthListSprite} from '@/types'


let id = 0;

const props = defineProps<{sprites: EarthListSprite[]}>();

const actualSprite: any = ref();

const isFullScreen: Ref<boolean> = ref(false);

function afficherDescription(spriteId: number) {
  actualSprite.value = props.sprites[spriteId];
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
           :class="{cross: true, hide: !isFullScreen}" @click="quitFullScreen()"/>

      <div v-if="actualSprite && isFullScreen" id="popupInfos" class="inventoryGUI">
        <img src="../assets/img/minecraftGUI/cross.png" alt="close description" @click="retirerDescription"
             class="cross"/>
        <div>
          <div id="icon-container" class="inventoryGUI_item">
            <img :src="'./src/assets/img/sprits/' + actualSprite.fichier" alt="">
          </div>
          <h2>{{ actualSprite.nom }}</h2>
        </div>

        <p>{{ actualSprite.description }}</p>
      </div>

      <ul id="sprites">
        <li v-for="sprite in sprites" :key="sprite.id"
            :style="`height: ${sprite.height}%; margin-bottom: ${sprite.marginBottom}%;`">
          <SpriteElement v-model="sprite.fichier" @afficher-description="afficherDescription(sprite.id)"/>
        </li>
      </ul>
    </div>
  </div>
  <div id="filler" :class="{hide: !isFullScreen}"></div>
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
  background-image: url("./src/assets/img/sprits/background.png");
  background-repeat: repeat-x;
  background-position: center center;
  background-size: contain;
  position: relative;
  height: calc(100% - 10px);
}

#popup_container {
  width: 480px;
  height: calc(500px / 3.2);
  aspect-ratio: 3.2;
}

.cross {
  position: absolute;
  right: 5px;
  top: 5px;
}

.hide {
  display: none;
}

.fullscreen_popup {
  width: calc(100vw - 40px) !important;
  max-height: calc(100vh - 40px);
  height: auto !important;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  z-index: 3 !important;
}

#popupInfos {
  position: absolute;
  top: 10px;
  left: 10px;
  width: calc(100% - 70px);

  > div {
    display: flex;
    align-items: center;

    h2 {
      margin-left: 10px;
    }
  }

  #icon-container {
    width: 80px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 80%;
      height: 80%;
    }
  }

  p {
    margin: 5px 10px;
  }
}

#filler {
  height: calc(500px / 3.2);
}
</style>