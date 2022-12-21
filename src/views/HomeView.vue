<script setup>
import TaipeiClock from '../components/TaipeiClock.vue'
import PunchBlockVue from '../components/PunchBlock.vue'
import { useLocationStore } from '../stores/location'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
const locationStore = useLocationStore()
onBeforeMount(() => {
  locationStore.setLocation()
})
const { longitude, latitude } = storeToRefs(locationStore)
</script>

<template>
  <main>
    <div class="container-md">
      <div class="row">
        <TaipeiClock />
      </div>
      <div class="row">
        <div class="col rwd-d-none">
          <img src="../assets/03.jpg" class="img-fluid" />
        </div>
        <PunchBlockVue />
      </div>
    </div>
  </main>
</template>
<style></style>
