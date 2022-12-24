import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchTodaysAttendance, fetchRecentAttendances } from '../assets/api'
import dayjsTaipei, { countWorkingHour } from '../assets/timeHelper'
const requiredWorkingHour = Number(
  import.meta.env.VITE_APP_REQUIRED_WORKING_HOUR ?? 8
)

export const useAttendanceStore = defineStore('attendance', () => {
  const todaysAttendance = ref(null)
  const recentAttendances = ref([])

  const formatPunchOut = computed(() => {
    const punchOut = todaysAttendance.value?.punchOut
    if (!punchOut) {
      return null
    }
    return dayjsTaipei(punchOut).format('HH:mm')
  })
  const formatPunchIn = computed(() => {
    const punchIn = todaysAttendance.value?.punchIn
    if (!punchIn) {
      return null
    }
    return dayjsTaipei(punchIn).format('HH:mm')
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
      const left = timeToPunchOut.diff(now, 'm')
      if (left === 0) {
        return '不到一分鐘'
      }
      if (left >= 10) {
        return '還不到下班時間'
      }
      return `還有${left + 1}分鐘`
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
    formatPunchOut,
    setRecentAttendances,
    setTodaysAttendance,
  }
})
