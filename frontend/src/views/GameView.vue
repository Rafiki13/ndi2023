<script setup lang="ts">
import QuizBlock from '@/components/QuizBlock.vue';
import Earth from "@/components/RotatingEarth.vue";
import HealthBar from "@/components/HealthBar.vue";
import { ref } from 'vue';
import EarthElementList from "@/components/EarthElementList.vue";

const currentScore = ref(50);

</script>

<template>
    <div class="game-view">
        <div class="left-side inventoryGUI_item">
            <HealthBar :score="currentScore" />
            <Earth />
            <!-- <earth-element-list></earth-element-list> -->
        </div>
        <div class="right-side inventoryGUI_item">
            <QuizBlock @update-score="currentScore = Math.min(Math.max(currentScore + $event, 0), 100);" />
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
