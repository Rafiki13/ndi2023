<script setup lang="ts">

defineEmits<{
  afficherDescription: [],
}>();

defineProps<{
  modelValue: string
}>();

</script>

<template>
   <img @click="$emit('afficherDescription')" :src="`./src/assets/img/${modelValue}`" alt="">
</template>

<style scoped>
  img {
    cursor: pointer;
    height: 100%;
  }
</style>