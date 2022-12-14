<!-- eslint-disable no-unused-vars -->
<script setup>
import TopIndex from '../components/TopIndex.vue'
import TaipeiClock from '../components/TaipeiClock.vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <TopIndex />
    <TaipeiClock />
  </main>
</template>
