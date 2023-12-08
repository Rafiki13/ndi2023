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
    imageSrc: 'https://unsplash.com/photos/8wTPqxlnKM4/download?force=true&w=1920',
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
    <div class="quiz-block inventoryGUI">

        <div class="upper-half">
            <div class="theme inventoryGUI_item">
                <h2>{{ question.theme }}</h2>
            </div>

            <div class="question inventoryGUI_item">
                <p>{{ question.content }}</p>
                <img class="question-image" v-if="question.imageSrc" :src="question.imageSrc" />
            </div>
        </div>
 
        <div class="lower-half">
            <div v-if="!selectedAnswer" class="answers">
                <div v-for="answer in question.possibleAnswers" :key="answer.content" class="answer inventoryGUI"
                    @click="answerQuestion(answer)">
                    {{ answer.content }}
                </div>
            </div>

            <div v-else class="inventoryGUI_item text-after-answer" :class="wasAnswerCorrect ? 'correct' : 'wrong'">
                <h2 v-if="wasAnswerCorrect">Correct!</h2>
                <h2 v-else>Wrong!</h2>
                <p>{{ selectedAnswer?.textIfSelected }}</p>

                <div class="next-question-button inventoryGUI" @click="selectedAnswer = null">Next question</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.quiz-block {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    height: 100%;
    gap: 20px;
}

.upper-half {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 50px;
    align-items: center;
    width: 100%;
}

.lower-half {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.theme {
    width: 50%;
    text-align: center;
    color: #45BC7F;
    text-transform: uppercase;
}

.answers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 80%;
}

@media (max-width: 768px) {
    .answers {
        grid-template-columns: 1fr;
    }
}

.answer {
    width: 90%;
    text-align: center;
    user-select: none;
}

.next-question-button {
    width: 30%;
    text-align: center;
    user-select: none;
}

.next-question-button:hover,
.answer:hover {
    cursor: pointer;
    filter: brightness(1.2);
}

.question {
    width: 80%;
    text-align: center;
    padding: 10px;
}

.question-image {
    width: 50%;
    height: auto;
}

.text-after-answer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 80%;
    padding: 10px;
}

.correct {
  border-image-source:url("../assets/img/minecraftGUI/succesGUI.png") !important;
  background-color:#518650;


}

.wrong {
  border-image-source:url("../assets/img/minecraftGUI/errorGUI.png") !important;
  background-color:#B13838;
}
</style>