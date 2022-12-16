import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import createInstance from '../assets/api'
import dayjsTaipei from '../assets/timeHelper'

const api = createInstance()

export const useRecordStore = defineStore('record', () => {
  const recentRecords = reactive(null)
  const todaysRecord = ref(null)
  const getTodaysRecord = computed(() => todaysRecord.value)
  const workingHour = computed(() =>
    todaysRecord.value
      ? dayjsTaipei().diff(dayjsTaipei(todaysRecord.value.createdAt), 's')
      : null
  )
  async function fetchTodaysRecord() {
    const response = await api.get('api/records/today')
    todaysRecord.value = response?.data?.record ?? null
  }
  return {
    todaysRecord,
    recentRecords,
    fetchTodaysRecord,
    workingHour,
    getTodaysRecord,
  }
})
