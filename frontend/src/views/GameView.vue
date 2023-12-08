<script setup lang="ts">
import QuizBlock from '@/components/QuizBlock.vue';
import Earth from "@/components/RotatingEarth.vue";
import HealthBar from "@/components/HealthBar.vue";
import {type Ref, ref, watch} from 'vue';
import EarthElementList from "@/components/EarthElementList.vue";
import router from '@/router';
import {type RotatingEarthSprite, type EarthListSprite} from '@/types'


const spritesRotatingEarth: Ref<RotatingEarthSprite[]> = ref([
  {id: 0, nom: "Arbre", fichier: "tree.png", description: "arbre", height: 50, marginBottom: 7.6},
  {id: 1, nom: "Usine", fichier: "tree.png", description: "arbre", height: 50, marginBottom: 7.6},
  {id: 2, nom: "Usine", fichier: "tree.png", description: "arbre", height: 50, marginBottom: 5}
]);
const spritesEarthList: Ref<EarthListSprite[]> = ref([
  {id: 0, nom: "Arbre", fichier: "tree.png", description: "arbre", height: 50, marginBottom: 3},
  {id: 1, nom: "Usine", fichier: "tree.png", description: "usine", height: 50, marginBottom: 7.6}
]);

const currentScore = ref(50);

watch(currentScore, (newValue) => {
    if (newValue <= 0) {
        router.push('/gameover');
    }
});

const finishGame = () => {
    router.push('/gamecompleted');
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
                @out-of-questions="finishGame" />
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
