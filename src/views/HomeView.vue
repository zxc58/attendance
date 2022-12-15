<!-- eslint-disable no-unused-vars -->
<script setup>
import TopIndex from '../components/TopIndex.vue'
import TaipeiClock from '../components/TaipeiClock.vue'
import PunchBlockVue from '../components/PunchBlock.vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <TopIndex />
    <div class="container-lg">
      <div class="row border border-primary">
        <TaipeiClock />
      </div>
      <div class="row border border-danger">
        <div class="col"></div>
        <PunchBlockVue />
      </div>
    </div>
  </main>
</template>
<style></style>
