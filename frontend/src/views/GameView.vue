<script setup lang="ts">
import QuizBlock from '@/components/QuizBlock.vue';
import { ref } from 'vue';

const currentScore = ref(0);

import HealthBar from "@/views/HealthBar.vue";
</script>

<template>
    <div class="game-view">
        <div class="left-side inventoryGUI_item">
            <h1>Score: {{ currentScore }}</h1>

        </div>
        <div class="right-side inventoryGUI_item">
            <QuizBlock @update-score="currentScore += $event" />
        </div>
    </div>
</template>

<style scoped>
.game-view {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    height: 100vh;
}

.left-side {
    flex: 3;
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
