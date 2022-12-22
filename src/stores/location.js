import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLocationStore = defineStore('location', () => {
  const location = ref(null)

  const longitude = computed(() => location.value?.longitude)
  const latitude = computed(() => location.value?.latitude)
  const accuracy = computed(() => location.value?.accuracy)
  const isLowAccuracy = computed(() => location.value?.accuracy >= 400)

  function setLocation() {
    console.log('set location')
    const options = {
      timeout: 10000,
      enableHighAccuracy: false,
    }
    const successCallback = (e) => {
      console.log(e.coords.accuracy)
      console.log('e')
      location.value = e.coords
    }
    const failiureCallback = (f) => {
      console.log('fail')
    }
    navigator.geolocation.getCurrentPosition(
      successCallback,
      failiureCallback,
      options
    )
  }

  return {
    location,
    latitude,
    longitude,
    accuracy,
    isLowAccuracy,
    setLocation,
  }
})
