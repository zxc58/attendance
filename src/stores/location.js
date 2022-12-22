import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLocationStore = defineStore('location', () => {
  const location = ref(null)

  const longitude = computed(() => location.value?.longitude)
  const latitude = computed(() => location.value?.latitude)
  const accuracy = computed(() => location.value?.accuracy)
  const isLowAccuracy = computed(() => location.value?.accuracy >= 400)

  function setLocation(GeolocationPositionObject) {
    if (GeolocationPositionObject) {
      location.value = GeolocationPositionObject.coords
      return
    }
    const options = {
      timeout: 10 * 1000,
      enableHighAccuracy: false,
    }
    const successCallback = (GeolocationPositionObject) => {
      location.value = GeolocationPositionObject.coords
    }

    navigator.geolocation.getCurrentPosition(successCallback, null, options)
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
