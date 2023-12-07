<script setup lang="ts">
import QuizBlock from '@/components/QuizBlock.vue';
import { ref } from 'vue';

const currentScore = ref(0);

import EarthInfos from "@/components/EarthInfos.vue";
</script>

<template>
  <h1>Score: {{ currentScore }}</h1>
  <QuizBlock @update-score="currentScore += $event"/>
  <EarthInfos/>
</template>

<style scoped>

</style>
