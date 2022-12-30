import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import getDistance from 'geolib/es/getDistance'
const companyLatitude = Number(import.meta.env.VITE_APP_COMPANY_LATITUDE)
const companyLongitude = Number(import.meta.env.VITE_APP_COMPANY_LONGITUDE)

export const useLocationStore = defineStore('location', () => {
  const location = ref(null)

  const distance = computed(() => {
    if (!location.value) {
      return NaN
    }
    const { accuracy, latitude, longitude } = location.value
    const d = getDistance(
      { latitude: companyLatitude, longitude: companyLongitude },
      { latitude, longitude }
    )
    return accuracy + d
  })
  const getLocation = computed(() => {
    if (!location.value) {
      return null
    }
    const { accuracy, latitude, longitude } = location.value
    if (!accuracy || !latitude || !longitude) {
      return null
    }
    return { accuracy, latitude, longitude }
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
    navigator.geolocation.getCurrentPosition(setLocation, null, options)
  }

  return {
    location,
    getLocation,
    distance,
    setLocation,
  }
})
