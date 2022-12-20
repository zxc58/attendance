import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import createInstance from '../assets/api'
import dayjsTaipei from '../assets/timeHelper'
const api = createInstance()

export const useTimeStore = defineStore('time', () => {
  const currentTime = ref(null)

  const formatTime = computed(() => {
    return dayjsTaipei(currentTime.value).format('HH:mm')
  })

  const initTime = () => {
    currentTime.value = dayjsTaipei().toDate()
    setInterval(() => {
      currentTime.value = dayjsTaipei().toDate()
    }, 1000 * 5)
  }

  return {
    currentTime,
    formatTime,
    initTime,
  }
})
