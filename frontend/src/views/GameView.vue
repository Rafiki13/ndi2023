<script setup lang="ts">
import QuizBlock from '@/components/QuizBlock.vue';
import { ref } from 'vue';

const currentScore = ref(0);

</script>

<template>
    <h1>Score: {{ currentScore }}</h1>
    <QuizBlock @update-score="currentScore += $event"/>
</template>

<style scoped>

</style>
