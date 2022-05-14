<script setup lang="ts">
import NButton from './components/button'
import NLoading from './components/loading/NLoading.vue'
</script>

<template>
  <div class="app">
    <NButton type="outlined" color="primary" elevated>Nocturnal UI</NButton>
  </div>
</template>

<style>
.app {
  height: 100vh;
  display: grid;
  place-content: center;
}
</style>
