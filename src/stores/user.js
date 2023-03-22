import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import avatarUrl from '../assets/avatar.png'
import dayjsTaipei, { countWorkingHour } from '../utils/helpers/timeHelper'
const requiredWorkingHour = Number(
  import.meta.env.VITE_APP_REQUIRED_WORKING_HOUR ?? 8
)

export const useUserStore = defineStore('user', () => {
  /* about user */
  const user = ref()

  const userName = computed(() => user.value?.name)
  const userId = computed(() => user.value?.id)
  const userAvatar = computed(() => user?.value?.avatar ?? avatarUrl)
  const isAdmin = computed(() => user.value?.isAdmin)
  /* about attendance */
  const recentAttendance = ref()

  const today = computed(() =>
    recentAttendance.value ? recentAttendance.value[0] : undefined
  )
  const formattedPunchOut = computed(() => {
    if (!today.value) return
    const { punchOut } = today.value
    if (!punchOut) return
    return dayjsTaipei(punchOut).format('HH:mm')
  })
  const formattedPunchIn = computed(() => {
    if (!today.value) return
    const { punchIn } = today.value
    if (!punchIn) return
    return dayjsTaipei(punchIn).format('HH:mm')
  })
  const leftTime = computed(() => {
    if (!today.value) return
    const { punchIn } = today.value
    if (!punchIn) return
    const now = dayjsTaipei()
    const timeToPunchOut = dayjsTaipei(punchIn).add(requiredWorkingHour, 'hour')
    if (now.isAfter(timeToPunchOut)) return
    const left = timeToPunchOut.diff(now, 'm')
    if (left === 0) return '不到一分鐘'
    if (left >= 10) return '還不到下班時間'
    return `還有${left + 1}分鐘`
  })
  const attendanceHistoryRecord = computed(() => {
    if (!recentAttendance.value) return []
    const list = recentAttendance.value.map((element, index) => {
      if (index === 0) return {}
      const [status, color, details] = countWorkingHour(element)
      return {
        id: element.dateId,
        date: dayjsTaipei(element.date).format('MM月DD日'),
        day: `星期${element.day}`,
        status,
        class: color,
      }
    })
    list.shift()
    return list
  })
  /* About API */
  function formatAndStoreApiData(employee, attendances) {
    if (employee) user.value = employee
    if (attendances)
      recentAttendance.value = attendances.map((element) => {
        const attendance = element.Attendances
        const dateId = element.id
        delete element.Attendances
        return { ...element, ...attendance, dateId }
      })
  }
  return {
    /* user */
    user,
    userName,
    userId,
    userAvatar,
    isAdmin,
    /* attendance */
    recentAttendance,
    today,
    formattedPunchIn,
    formattedPunchOut,
    leftTime,
    attendanceHistoryRecord,
    /* Other */
    formatAndStoreApiData,
  }
})
/*
const todaysAttendance = ref(null)
  const details = ref(null)
  const recentAttendances = ref(null)

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
*/
