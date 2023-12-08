<script setup lang="ts">

import RotatingEarth from "@/components/RotatingEarth.vue";
import router from "@/router";
import GameView from "@/views/GameView.vue";

function redirect(): void {

}

</script>

<template>
  <div class="parent">
    <h1>Bienvenue à EcoQuizz !</h1>
    <div class="hori">
      <div class="vert earth">
        <RotatingEarth></RotatingEarth>
      </div>
      <div class="vert">
        <p> Bienvenue à Ecoquizz ! Un jeu écolo sur un thème 100% écolo !</p>
        <p>Dans ce quizz, vous allez découvrir ou redécouvrir les principaux thèmes autour du Changement Climatique.
          Au menu : questions à choix multiples, vrai ou faux et bien d'autres !</p>
        <p>Votre but sera alors de rendre la planète, que vous voyez au-dessus, la plus saine possible en répondant juste
          aux questions !</p>
        <p>Bonne chance à vous !</p>
        <RouterLink class="answer inventoryGUI" to="/jeu"> Démarrer le jeu !</RouterLink>
      </div>
    </div>


  </div>
</template>

<style scoped>
p,
h1 {
  color: white
}

.parent {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #192019;
  overflow: hidden;
}

.hori {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.vert {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
}

.earth {
  width: 100%;
  height: 100%;
}

p {
  width: 35vw;
  word-break: break-word;
  text-align: center;
  font-size: 18px;
}

h1 {
  font-size: 70px;
}

.answer {
  margin-top: 5%;
  text-align: center;
  width: fit-content;
  text-decoration: none;
}

.answer:hover {
  cursor: pointer;
  filter: brightness(1.2);
}
</style>