<script setup lang="ts">

</script>

<template>
  <div id="rotatingContainer">
    <img src="../assets/img/sprits/earth.png" alt="earth" id="earth"/>
  </div>
</template>

<style scoped lang="scss">
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  #rotatingContainer {
    animation-duration: 20s;
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-direction: normal;
    transform-origin: center;
    animation-timing-function: linear;

    width: 300px;
    height: 300px;
  }

  #earth {
    margin: 25%;
    width: 50%;
    aspect-ratio: 1;
  }
</style>