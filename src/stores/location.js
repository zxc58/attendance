import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import getDistance from 'geolib/es/getDistance'
const companyLatitude = Number(import.meta.env.VITE_APP_COMPANY_LATITUDE)
const companyLongitude = Number(import.meta.env.VITE_APP_COMPANY_LONGITUDE)

export const useLocationStore = defineStore('location', () => {
  const location = ref(null)

  const longitude = computed(() => location.value?.longitude)
  const latitude = computed(() => location.value?.latitude)
  const accuracy = computed(() => location.value?.accuracy)
  const isLowAccuracy = computed(() => location.value?.accuracy >= 400)
  const distance = computed(() => {
    const longitude = location.value?.longitude
    const latitude = location.value?.latitude
    const accuracy = location.value?.accuracy
    if (!longitude ?? !latitude ?? !accuracy) {
      return null
    }
    return (
      accuracy +
      getDistance(
        { latitude: companyLatitude, longitude: companyLongitude },
        { latitude, longitude }
      )
    )
  })

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
    distance,
    setLocation,
  }
})
