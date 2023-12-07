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
    height: 80px;
    width: 80px;
    cursor: pointer;
  }
</style>