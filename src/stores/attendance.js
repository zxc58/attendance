import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchTodaysAttendance, fetchRecentAttendances } from '../assets/api'
import dayjsTaipei, { countWorkingHour } from '../assets/helpers/timeHelper'
import { flash } from '../assets/helpers/flashHelper'
const requiredWorkingHour = Number(
  import.meta.env.VITE_APP_REQUIRED_WORKING_HOUR ?? 8
)

export const useAttendanceStore = defineStore('attendance', () => {
  const todaysAttendance = ref(null)
  const details = ref(null)
  const recentAttendances = ref(null)

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
    if (!recentAttendances.value) {
      return null
    }
    const list = recentAttendances.value.map((e) => {
      const [status, color, details] = countWorkingHour(e)
      return {
        id: e.dateId,
        date: dayjsTaipei(e.date).format('MM月DD日'),
        day: `星期${e.day}`,
        status,
        class: `table-${color}${details ? ' row-details' : ''}`,
        showDetails: details
          ? () => {
              setDetails(e.dateId)
            }
          : null,
      }
    })
    return list
  })
  const formatDetails = computed(() => {
    if (!details?.value) {
      return null
    }
    const [status, color] = countWorkingHour(details.value)
    const { punchIn, punchOut, date, day } = details.value
    return {
      punchIn: punchIn ? dayjsTaipei(punchIn).format('HH:mm') : '無紀錄',
      punchOut: punchOut ? dayjsTaipei(punchOut).format('HH:mm') : '無紀錄',
      date: dayjsTaipei(date).format('YYYY年MM月DD日'),
      day: `星期${day}`,
      status,
      color,
    }
  })

  async function setTodaysAttendance(newRecord) {
    try {
      if (!newRecord) {
        newRecord = await fetchTodaysAttendance()
      }
      todaysAttendance.value = newRecord
    } catch (err) {
      flash({ variant: 'danger', message: '發生未知錯誤，請重新嘗試' })
      console.error(err)
    }
  }

  async function setRecentAttendances(newRecords) {
    try {
      if (!newRecords) {
        newRecords = await fetchRecentAttendances()
        newRecords = newRecords.map((e) => ({
          dateId: e.id,
          date: e.date,
          day: e.day,
          isHoliday: e.isHoliday,
          attendanceId: e?.Attendances?.id,
          punchIn: e?.Attendances?.punchIn,
          punchOut: e?.Attendances?.punchOut,
        }))
      }
      recentAttendances.value = newRecords
    } catch (err) {
      flash({ variant: 'danger', message: '發生未知錯誤，請重新嘗試' })
      console.error(err)
    }
  }
  function setDetails(dateId) {
    details.value = recentAttendances.value.find((e) => e.dateId === dateId)
  }

  return {
    todaysAttendance,
    recentAttendances,
    details,
    leftTime,
    attendanceList,
    formatPunchIn,
    formatPunchOut,
    formatDetails,
    setDetails,
    setRecentAttendances,
    setTodaysAttendance,
  }
})
