<script setup lang="ts">
import QuizBlock from '@/components/QuizBlock.vue';
import Earth from "@/components/RotatingEarth.vue";
import HealthBar from "@/components/HealthBar.vue";
import {type Ref, ref, watch} from 'vue';
import EarthElementList from "@/components/EarthElementList.vue";
import router from '@/router';
import {type RotatingEarthSprite, type EarthListSprite} from '@/types'


const spritesRotatingEarth: Ref<RotatingEarthSprite[]> = ref([]);
const spritesEarthList: Ref<EarthListSprite[]> = ref([]);

const currentScore = ref(50);

watch(currentScore, (newValue) => {
    if (newValue <= 0) {
        router.push('/gameover');
    }
});

const finishGame = () => {
    router.push('/gamecompleted');
}

let id = 0;

function addSprite(fichier: string, nom: string, description: string) {
  spritesEarthList.value.push({
    id: id, nom: nom, fichier: fichier, description: description, height: 50, marginBottom: 3
  });
  spritesRotatingEarth.value.push({
  id: id, fichier: fichier, height: 50, marginBottom: 5
  });

  id++
}

</script>

<template>
    <div class="game-view">
        <div class="left-side inventoryGUI_item">
            <HealthBar :score="currentScore" />
            <Earth :sprites="spritesRotatingEarth"/>
            <earth-element-list :sprites="spritesEarthList"></earth-element-list>
        </div>
        <div class="right-side inventoryGUI_item">
            <QuizBlock @update-score="currentScore = Math.min(Math.max(currentScore + $event, 0), 100);"
                @out-of-questions="finishGame" @emitNewSprite="(fichier, nom, description) => addSprite(fichier, nom, description)"/>
        </div>
    </div>
</template>

<style scoped>
.game-view {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    min-height: 100vh;
    overflow: hidden;
}

.left-side {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
}

.right-side {
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    padding: 45px;
}
</style>
