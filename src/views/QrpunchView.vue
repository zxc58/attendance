<script setup>
import { ref, watch } from 'vue'
import { useLocationStore } from '../stores/location'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { qrPunch } from '../assets/api'
import router from '../router'
import dayjsTaipei from '../assets/timeHelper'
const distanceLimit = import.meta.env.VITE_APP_DISTANCE_LIMIT ?? 400
const locationStore = useLocationStore()
const route = useRoute()
const { distance, getLocation } = storeToRefs(locationStore)
const status = ref(null)
console.log(route.query)
watch(distance, async () => {
  console.log('watch')
  if (distance <= distanceLimit) {
    watch(() => {})
    const data = {
      location: getLocation.value,
      punch: dayjsTaipei().startOf('minute').toDate(),
      uuid: 0,
    }
    console.log(data)
    // const message = await qrPunch(data)
    // status.value = message
  }
})
</script>

<template>
  <div class="container-md text-center block">
    <div v-if="!status">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div>Loading...</div>
    </div>
    <div v-else>
      {{ status }}
    </div>
  </div>
</template>

<style scoped>
.block {
  margin-top: 100px;
}
</style>
