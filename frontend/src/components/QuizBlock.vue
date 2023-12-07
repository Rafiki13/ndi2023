<script setup lang="ts">
import type { Answer, Question } from '@/types';
import { ref, type Ref } from 'vue';

const emit = defineEmits(['updateScore']);

const wasAnswerCorrect: Ref<boolean> = ref(false);
const selectedAnswer: Ref<Answer | null> = ref(null);

const answer1: Answer = { content: '15mph', isCorrect: false, textIfSelected: 'wrong' };
const answer2: Answer = { content: '30mph', isCorrect: false, textIfSelected: 'wrong' };
const answer3: Answer = { content: 'African or European?', isCorrect: true, textIfSelected: 'AAAAAAAAAAAAAAAAAAAAAAAAA!!!!!' };

const question = ref<Question>({
    content: 'What is the airspeed velocity of an unladen swallow?',
    imageSrc: '',
    possibleAnswers: [answer1, answer2, answer3],
    pointsIfCorrect: 200,
    pointsIfWrong: -100,
    theme: 'general',
});

const answerQuestion = (answer: Answer) => {
    selectedAnswer.value = answer;
    wasAnswerCorrect.value = answer.isCorrect;
    emit('updateScore', wasAnswerCorrect.value ? question.value.pointsIfCorrect : question.value.pointsIfWrong);
};


</script>

<template>
    <div class="wrapper">
        <div class="question">
            <h2>{{ question.content }}</h2>
            <img v-if="question.imageSrc" :src="question.imageSrc" />
        </div>
        <div v-if="!selectedAnswer" class="answers">
            <div v-for="answer in question.possibleAnswers" :key="answer.content">
                <button @click="answerQuestion(answer)">{{ answer.content }}</button>
            </div>
        </div>
        <div v-else :class="wasAnswerCorrect ? 'correct' : 'wrong'">
            <h2 v-if="wasAnswerCorrect">Correct!</h2>
            <h2 v-else>Wrong!</h2>
            <p>{{ selectedAnswer?.textIfSelected }}</p>

            <button @click="selectedAnswer = null">Next question</button>
        </div>
    </div>
</template>

<style scoped></style>