<script setup lang="ts">

import type {Ref} from "vue";
import {ref} from "vue";

let score : Ref<number> = ref(100);

function hit(nbPointsPerdus:number){
  if(score.value!=0){
    if((score.value-nbPointsPerdus)>0){
      score.value -= nbPointsPerdus;
    }else if((score.value-nbPointsPerdus)<=0){
      score.value=0;
    }
  }
}

function heal(nbPointsGagnes:number){
  if(score.value<100){
    if((score.value+ nbPointsGagnes)<100){
      score.value += nbPointsGagnes;

    }else if((score.value+ nbPointsGagnes)>=100){
      score.value=100;
    }
  }
}

</script>

<template>
  <div class="health-box">


    <div id="health-bar-red" :style="'width:' + score + '%;'"></div>
    <div id="health-bar-blue" :style="'width:' + score + '%;'"></div>
    <div id="health-bar" :style="'width:' + score + '%;'"></div>
    <div class="carre" id="carre-1"></div>
    <div class="carre" id="carre-2"></div>
    <div class="carre" id="carre-3"></div>
    <div class="carre" id="carre-4"></div>
    <div class="barre" id="barre-1"></div>
    <div class="barre" id="barre-2"></div>
  </div>
  <div id="aa" v-on:click="hit(10)"></div>
  <div id="ab" v-on:click="heal(15)"></div>
</template>

<style scoped>
.health-box{
  position: relative;
  background-color: green;
  height: 30px;
  width: 400px;
  margin: 0 auto;
  border: solid 2px black;
  border-top-width: 8px;
  border-bottom-width: 8px;
  z-index: -2;
}

#health-bar {
  background-color: red;
  height: 30px;
  position: absolute; top:0; left:0;
  transition-property: width;
  transition-duration: 0.5s;
}

#health-bar-red{
  background-color: #7a0606;
  height: 30px;
  position: absolute; top:0; left:0;
  transition-property: width;
  transition-duration: 0.5s;
  transition-delay: 0.1s;
}

#health-bar-blue{
  background-color: greenyellow;
  height: 30px;
  position: absolute; top:0; left:0;
  transition-property: width;
  transition-duration: 0.5s;
  transition-delay: -0.1s;
}

.carre{
  background-color: black;
  height: 8px;
  width: 8px;
  position: absolute;
}
#carre-1,#carre-2{
  top:0;
}
#carre-3,#carre-4{
  bottom:0;
}

#carre-2,#carre-4{
  right:0;
}

#carre-1,#carre-3{
  left:0;
}

.barre{
  background-color: black;
  width: 10px;
  height: 36px;
  position: absolute;
  top:-4px;

}
#barre-1{
  left:-8px;
}
#barre-2{
  right:-8px;
}

#aa{
  background-color: blue;
  width: 50px;
  height: 50px;
}
#ab{
  background-color: red;
  width: 50px;
  height: 50px;
}
</style>