import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import createInstance from '../assets/api'
import dayjsTaipei from '../assets/timeHelper'
import { useRecordStore } from './record'
const api = createInstance()
const requiredWorkingHour = import.meta.env.REQUIRED_WORKING_HOUR ?? 8

export const useTimeStore = defineStore('time', () => {
  const currentTime = ref(null)
  const leftTime = computed(() => {
    const recordStore = useRecordStore()
    const punchInTime = recordStore?.todaysRecord?.createdAt
    if (!punchInTime || !currentTime.value) {
      return null
    }
    const b = dayjsTaipei(punchInTime)
      .add(requiredWorkingHour, 'hour')
      .diff(dayjsTaipei(currentTime.value), 'minute')
    if (Number(b) <= 0) {
      return null
    }
    return `剩下${b}分鐘`
  })
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
    initTime,
    formatTime,
    leftTime,
  }
})
