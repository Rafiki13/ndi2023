<script setup lang="ts">
import QuizBlock from '@/components/QuizBlock.vue';
import { ref } from 'vue';
import EarthElementList from "@/components/EarthElementList.vue";

const currentScore = ref(0);

</script>

<template>
  <EarthElementList/>

  <h1>Score: {{ currentScore }}</h1>
    <QuizBlock @update-score="currentScore += $event"/>

  <div class="wrapper">
        <div class="left-side inventoryGUI_item">

        </div>
        <div class="right-side inventoryGUI_item">

        </div>
    </div>

</template>

<style scoped>

    .wrapper {
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
    }
</style>
