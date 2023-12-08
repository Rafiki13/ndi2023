<script setup lang="ts">

</script>

<template>
  <div id="staticContainer">
    <div id="rotatingContainer">
      <img src="../assets/img/sprits/earth.png" alt="earth" id="earth" />
    </div>
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

#staticContainer {
  width: 100%;
  height: 100%;
  position: relative;
}

#rotatingContainer {
  position: absolute;
  animation-duration: 20s;
  animation-name: rotate;
  animation-iteration-count: infinite;
  animation-direction: normal;
  transform-origin: center;
  animation-timing-function: linear;

  width: 500px;
  height: 500px;
}

#earth {
  margin: 25%;
  width: 50%;
  aspect-ratio: 1;
  image-rendering: pixelated;
}
</style>