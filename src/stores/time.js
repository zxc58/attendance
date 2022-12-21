import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import dayjsTaipei from '../assets/timeHelper'

export const useTimeStore = defineStore('time', () => {
  const currentTime = ref(null)

  const formatTime = computed(() => {
    return dayjsTaipei(currentTime.value).format('HH:mm')
  })

  const setTime = () => {
    currentTime.value = dayjsTaipei().toDate()
  }

  return {
    currentTime,
    formatTime,
    setTime,
  }
})
