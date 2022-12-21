import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLocationStore = defineStore('location', () => {
  const location = ref(null)
  const longitude = computed(() => location.value?.longitude)

  const latitude = computed(() => location.value?.latitude)
  const accuracy = computed(() => location.value?.accuracy)

  function setLocation() {
    const options = {
      timeout: 2000,
      enableHighAccuracy: true,
    }
    const successCallback = (e) => {
      location.value = e.coords
    }
    navigator.geolocation.getCurrentPosition(successCallback, null, options)
  }

  return {
    location,
    latitude,
    longitude,
    accuracy,
    setLocation,
  }
})
