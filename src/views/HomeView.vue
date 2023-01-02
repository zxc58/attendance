<script setup>
import TaipeiClock from '../components/TaipeiClock.vue'
import PunchBlock from '../components/PunchBlock.vue'
import DataBlock from '../components/DataBlock.vue'
</script>

<template>
  <main>
    <div class="container-md">
      <div class="row d-over-bp">
        <TaipeiClock />
      </div>
      <div class="row">
        <DataBlock />
        <PunchBlock />
      </div>
    </div>
  </main>
</template>
<style></style>
