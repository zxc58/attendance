<script setup>
import { RouterView, RouterLink } from 'vue-router'
import TopIndex from './components/TopIndex.vue'
</script>

<template>
  <TopIndex />
  <RouterView />
</template>

<style>
@media screen and (max-width: 768px) {
  .rwd-d-none {
    display: none;
  }
}
</style>
