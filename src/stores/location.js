import { computed } from 'vue'
import { defineStore } from 'pinia'
import getDistance from 'geolib/es/getDistance'
import { useGeolocation } from '@vueuse/core'

const companyLatitude = Number(import.meta.env.VITE_APP_COMPANY_LATITUDE)
const companyLongitude = Number(import.meta.env.VITE_APP_COMPANY_LONGITUDE)
const distanceLimit = Number(import.meta.env.VITE_APP_DISTANCE_LIMIT ?? 400)

export const useLocationStore = defineStore('location', () => {
  const location = useGeolocation().coords

  const distance = computed(() => {
    if (!location.value) return NaN
    const { accuracy, latitude, longitude } = location.value
    const d = getDistance(
      { latitude: companyLatitude, longitude: companyLongitude },
      { latitude, longitude }
    )
    return accuracy + d
  })
  const isInRange = computed(() => distance.value <= distanceLimit)
  const getLocation = computed(() => {
    if (!location.value) return undefined
    const { accuracy, latitude, longitude } = location.value
    if (!accuracy || !latitude || !longitude) return undefined
    return { accuracy, latitude, longitude }
  })
  return {
    location,
    getLocation,
    distance,
    isInRange,
  }
})
