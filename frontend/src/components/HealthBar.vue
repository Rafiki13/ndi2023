<script setup lang="ts">

import type {Ref} from "vue";
import {ref, watch, computed} from "vue";


const props = defineProps({
  score: {
    type: Number,
    default: 100
  }
})

const displayScore = computed(() => {
  return props.score < 0 ? 0 :
   props.score > 100 ? 100 : props.score
})

</script>

<template>
  <div class="health-box">


    <div id="health-bar-red" :style="'width:' + displayScore + '%;'"></div>
    <div id="health-bar-blue" :style="'width:' + displayScore + '%;'"></div>
    <div id="health-bar" :style="'width:' + displayScore + '%;'"></div>
    <div class="carre" id="carre-1"></div>
    <div class="carre" id="carre-2"></div>
    <div class="carre" id="carre-3"></div>
    <div class="carre" id="carre-4"></div>
    <div class="barre" id="barre-1"></div>
    <div class="barre" id="barre-2"></div>
  </div>

</template>

<style scoped>
.health-box{
  position: relative;
  background-color: darkred;
  height: 30px;
  width: 400px;
  margin: 0 auto;
  border: solid 2px black;
  border-top-width: 8px;
  border-bottom-width: 8px;
  z-index: 1;
  flex-shrink: 0;
}

#health-bar {
  background-color: green;
  height: 30px;
  position: absolute; top:0; left:0;
  transition-property: width;
  transition-duration: 0.5s;
}

#health-bar-red{
  background-color: orange;
  height: 30px;
  position: absolute; top:0; left:0;
  transition-property: width;
  transition-duration: 0.5s;
  transition-delay: 0.1s;
}

#health-bar-blue{
  background-color: limegreen;
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
  top:-3px;

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