<script setup>
import PunchBlock from '../components/PunchBlock.vue'
import DataBlock from '../components/DataBlock.vue'
import PunchingDetails from '../components/PunchingDetails.vue'
</script>

<template>
  <main>
    <div class="container-md">
      <div class="row mt-1">
        <DataBlock />
        <PunchBlock />
      </div>
      <br />
      <div class="row">
        <PunchingDetails />
      </div>
    </div>
  </main>
</template>
<style></style>
