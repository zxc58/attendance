import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { fetchTodaysAttendance, fetchRecentAttendances } from '../assets/api'
import dayjsTaipei, { countWorkingHour } from '../assets/timeHelper'
import { useTimeStore } from './time'
import { storeToRefs } from 'pinia'
const requiredWorkingHour = import.meta.env.REQUIRED_WORKING_HOUR ?? 8

export const useAttendanceStore = defineStore('attendance', () => {
  const todaysAttendance = ref(null)
  const recentAttendances = ref([])

  const formatPunchIn = computed(() => {
    const punchIn = todaysAttendance.value?.punchIn
    if (!punchIn) {
      return null
    }
    return dayjsTaipei(punchIn).format('HH:MM')
  })
  const leftTime = computed(() => {
    if (!todaysAttendance?.value?.punchIn) {
      return null
    }
    const now = dayjsTaipei()
    const timeToPunchOut = dayjsTaipei(todaysAttendance.value.punchIn).add(
      requiredWorkingHour,
      'h'
    )
    const isPunchOutTime = now.isAfter(timeToPunchOut)
    if (!isPunchOutTime) {
      return timeToPunchOut.diff(now, 'm')
    }
    return null
  })
  const attendanceList = computed(() => {
    const a = recentAttendances.value.map((e) => {
      const [status, className] = countWorkingHour(e)
      return {
        id: e.id,
        date: dayjsTaipei(e.date).format('MM月DD日'),
        day: `星期${e.day}`,
        status,
        class: className,
      }
    })
    return a
  })

  async function setTodaysAttendance(newRecord) {
    try {
      if (!newRecord) {
        newRecord = await fetchTodaysAttendance()
      }
      todaysAttendance.value = newRecord
    } catch (err) {
      alert('發生未知錯誤')
      console.log(err)
    }
  }

  async function setRecentAttendances(newRecords) {
    try {
      if (!newRecords) {
        newRecords = await fetchRecentAttendances()
        newRecords = newRecords.map((e) => {
          const attendances = { ...e.Attendances }
          delete e.Attendances, e.id
          return {
            ...e,
            ...attendances,
          }
        })
      }
      recentAttendances.value = newRecords
    } catch (err) {
      alert('發生未知錯誤')
      console.error(err)
    }
  }

  return {
    todaysAttendance,
    recentAttendances,
    leftTime,
    attendanceList,
    formatPunchIn,
    setRecentAttendances,
    setTodaysAttendance,
  }
})
